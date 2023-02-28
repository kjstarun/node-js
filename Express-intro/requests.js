const { products } = require("../products_backend/products.js");

const indexFinder = (id) => {
  return products.findIndex((item) => item.id === id);
};

const handleGetRequest = (req, res) => {
  const response = products;
  res.send(response);
};

const handleGetRequestviaId = (req, res) => {
  let index = indexFinder(+req.params.id);
  let response = [];
  if (id >= 0) {
    response = products[index];
  }
  res.send(response);
};

const handlePostRequest = (req, res) => {
  let index = indexFinder(+req.body.id);
  if (index >= 0) {
    res.send("Send a valid id");
  } else {
    products.push(req.body);
    res.send(products);
  }
};

const handlePutRequest = (req, res) => {
  let index = indexFinder(+req.body.id);
  if (index >= 0) {
    products[index] = req.body;
    res.send(products);
  } else {
    res.send("Send a valid id");
  }
};

const handleDeleteRequest = (req, res) => {
  let index = indexFinder(+req.params.id);
  let response = [];
  if (index >= 0) {
    if (index <= products.length && index >= 0) {
      response = products[index];
      products.splice(index, 1);
      res.send(response);
    } else {
      res.send("Send a valid id");
    }
  } else {
    res.send("Send a valid id");
  }
};

module.exports = {
  handleGetRequest,
  handleGetRequestviaId,
  handlePostRequest,
  handlePutRequest,
  handleDeleteRequest,
};
