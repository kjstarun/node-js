import express, { json } from "express";
import { PORT } from "./config.js";
import productRouter from "./src/api/products/product.route.js";
import { connectDB } from "./src/services/connectDB.js";

const app = express();

connectDB();

app.use(json());
app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`App running successfully on port ${PORT}`);
});
