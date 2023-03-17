import { Router } from "express";
import {
  createNewProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "./product.controller.js";

const productRouter = Router();

productRouter.post("/", createNewProduct);
productRouter.delete("/", deleteProduct);
productRouter.put("/", updateProduct);
productRouter.get("/", getProducts);

export default productRouter;
