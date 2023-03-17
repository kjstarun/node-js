import { Router } from "express";
import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getProducts,
  updateProduct,
} from "./product.controller.js";

const productRouter = Router();

productRouter.post("/", createNewProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/", updateProduct);
productRouter.get("/pages", getProducts);
productRouter.get("/", getAllProducts);

export default productRouter;
