import { verifyToken } from "../services/jwt.provider.js";

export const isAuthorized = (req, res, next) => {
  const { authorization } = req.headers;

  const isValidToken = verifyToken(authorization);
  console.log("verify", isValidToken);
  if (!isValidToken) {
    return res.status(401).send("Access denied from middleware");
  }

  next();
};
