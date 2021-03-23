const express = require("express");
const app = express();
const cors = require("cors");
const { searchItems, fetchItem, fetchCategories } = require("./itemRepo");

// Cors Handler

app.use(cors());

// Route Items

app.get("/api/items", (req, res) => {
  const query = req.query.q;

  searchItems(query).then((data) => {
    res.send(data);
  });
});

// Route Item Detail

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;

  fetchItem(itemId).then((data) => {
    res.send(data);
  });
});

// Route Category Tree

app.get("/api/categories/:id", (req, res) => {
  const itemId = req.params.id;

  fetchCategories(itemId).then((data) => {
    res.send(data);
  });
});

// Server port config

app.listen(4000);
