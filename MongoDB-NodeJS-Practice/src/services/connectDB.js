import Mongoose from "mongoose";

export const connectDB = () => {
  Mongoose.connect("mongodb://localhost:27017/products")
    .then(() => console.log("Databse connected sucessfully"))
    .catch((err) => console.log("Database connection failed"));
};
