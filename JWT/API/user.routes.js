import { Router } from "express";
import { getUser, loginUser } from "./user.controller.js";
import { isAuthorized } from "./user.middleware.js";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.get("/", isAuthorized, getUser);

export default userRouter;
