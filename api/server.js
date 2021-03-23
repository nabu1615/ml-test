const express = require("express");
const app = express();
const { searchItems, fetchItem } = require("./itemRepo");
const cors = require("cors");

app.use(cors());

app.get("/api/items", (req, res) => {
  const query = req.query.q;

  searchItems(query).then((data) => {
    res.send(data);
  });
});

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;

  fetchItem(itemId).then((data) => {
    res.send(data);
  });
});

app.listen(4000);
