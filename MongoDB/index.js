// import express from "express";
import Mongoose from "mongoose";

Mongoose.connect("mongodb://localhost:27017/Tarun");
const Group = Mongoose.model("Group", { name: String, age: Number });

const Junior = new Group(
  { name: "Tarun", age: "21" },
  { name: "Oviya", age: "22" },
//   { name: "Hareesh", age: 21 },
//   { name: "Gopal" }
);
Junior.save().then(() => console.log("Data created"));

Group.find().then((data) => console.log(data));

// const app = express();
