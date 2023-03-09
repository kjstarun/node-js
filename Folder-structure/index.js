import Express, { json } from "express";
import userRouter from "./src/api/users/user.route.js";
import { PORT } from "./src/config.js";

const app = Express();

app.use(json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
