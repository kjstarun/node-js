import { Router } from "express";
import { getUsername } from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsername);

export default userRouter;
