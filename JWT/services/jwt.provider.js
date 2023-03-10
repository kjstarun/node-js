import jwt from "jsonwebtoken";
import { JWT_KEY } from "./jwt.config.js";

export const createAccessToken = (payload) => {
  if (!payload) return false;
  const result = jwt.sign(payload, JWT_KEY);
  return result;
};

export const verifyToken = (token) => {
  try {
    console.log(token);
    const result = jwt.verify(token, JWT_KEY);
    console.log("res", result);
    return result;
  } catch (error) {
    return false;
  }
};
