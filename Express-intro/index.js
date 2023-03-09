const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  handleGetRequest,
  handleGetRequestviaId,
  handleDeleteRequest,
  handlePostRequest,
  handlePutRequest,
} = require("./requests.js");
const port = 30000;

app.use(bodyParser.json());
app.get("/products", (req, res) => handleGetRequest(req, res));
app.get("/products/:id", (req, res) => handleGetRequestviaId(req, res));
app.post("/products", (req, res) => handlePostRequest(req, res));
app.put("/products", (req, res) => handlePutRequest(req, res));
app.delete("/products/:id", (req, res) => handleDeleteRequest(req, res));

app.listen(port, () => {
  console.log(`The server started at https://localhost/${port}`);
});