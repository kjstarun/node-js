import express from "express";
import userRouter from "./API/user.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
