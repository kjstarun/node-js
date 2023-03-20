import express, { json } from "express";
import { PORT } from "./config.js";

const app = express();

connectDB();

app.use(json());

app.listen(PORT, () => {
  console.log(`App running successfully on port ${PORT}`);
});
