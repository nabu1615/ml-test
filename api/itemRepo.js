const API_URL = require("./constans");
const axios = require("axios").default;
const decimals = require("./utils/decimals");

// Get items based on client search value

async function searchItems(query) {
  const { data } = await axios.get(`${API_URL}/sites/MLA/search?q=${query}`);

  return {
    author: {
      name: "Javier",
      lastname: "Vargas",
    },
    categories: getCategories(data),
    items: extractItems(data),
  };
}

// Get Category based on more products

const getCategories = (data) => {
  const category = (element) => element.id === "category";
  let categories;

  if (data.available_filters.some(category)) {
    categories = data.available_filters
      .find(category)
      .values.sort((a, b) => b.results - a.results)
      .map((category) => category.id);
  } else {
    categories = data.filters
      .find(category)
      .values.map((category) => category.id);
  }

  return categories;
};

// Extract Items from the api anwser, getting just the result to be used.

const extractItems = (data) => {
  return data.results.length
    ? data.results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: extractPrice(item),
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          city_name: item.address.city_name,
        };
      })
    : null;
};

// Build price object

const extractPrice = (item) => {
  const { currency_id, price } = item;

  return {
    currency: currency_id,
    amount: price,
    decimal: decimals(price),
  };
};

// Get specific product info.

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

// Extract Items from the api anwser, getting just the result to be used.

const extractItem = (item, description) => {
  return {
    id: item.id,
    title: item.title,
    price: extractPrice(item),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
    category_id: item.category_id
  };
};

// Get categories from a specfic product

async function fetchCategories(itemId) {
  const { data } = await axios.get(`${API_URL}categories/${itemId}`);

  const categories = data.path_from_root.map((category) => {
    return category.name;
  });

  return {
    author: {
      name: "Javier",
      lastname: "Vargas",
    },
    categories: categories,
  };
}

module.exports = {
  searchItems,
  fetchItem,
  fetchCategories,
};
