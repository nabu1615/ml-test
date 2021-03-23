const API_URL = require("./constans");
const axios = require("axios").default;
const decimals = require("./utils/decimals");

async function searchItems(query) {
  const { data } = await axios.get(`${API_URL}/sites/MLA/search?q=${query}`);

  return {
    author: {
      name: "Javier",
      lastname: "Vargas",
    },
    categories: extractCategories(data),
    items: extractItems(data),
  };
}

const extractCategories = (data) => {
  const categories = data.available_filters.find(
    (filter) => filter.id === "category"
  );

  return categories
    ? categories.values
        .sort((a, b) => b.results - a.results)
        .map((category) => category.id)
    : [];
};

const extractItems = (data) => {
  return data.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: extractPrice(item),
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      city_name: item.address.city_name,
    };
  });
};

const extractPrice = (item) => {
  const { currency_id, price } = item;

  return {
    currency: currency_id,
    amount: price,
    decimal: decimals(price),
  };
};

async function fetchItem(itemId) {
  const responses = await Promise.all([
    axios.get(`${API_URL}/items/${itemId}`),
    axios.get(`${API_URL}/items/${itemId}/description`),
  ]);

  const itemDetails = responses[0].data;
  const itemDescription = responses[1].data;

  return {
    author: {
      name: "Javier",
      lastname: "Vargas",
    },
    item: extractItem(itemDetails, itemDescription),
  };
}

extractDetailPrice = (item) => {
  const { currency_id, price } = item;

  return {
    currency: currency_id,
    amount: price,
    decimal: decimals(price),
  };
};

const extractItem = (item, description) => {
  return {
    id: item.id,
    title: item.title,
    price: extractDetailPrice(item),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
  };
};

module.exports = {
  searchItems,
  fetchItem,
};
