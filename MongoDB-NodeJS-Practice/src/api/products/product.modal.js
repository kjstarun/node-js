import Mongoose from "mongoose";

const productSchema = new Mongoose.Schema(
  {
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const productModal = Mongoose.model("Product", productSchema);
export default productModal;
