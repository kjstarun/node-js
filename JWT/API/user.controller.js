import { createAccessToken, verifyToken } from "../services/jwt.provider.js";

const USER_NAME = "TARUN";
const PASSWORD = 123456789;

export const loginUser = (req, res) => {
  console.log("called loginuser");
  const { userName, password } = req.body;

  if (userName !== USER_NAME || password !== PASSWORD)
    return res.status(401).send("Invalid credentials");

  const accessToken = createAccessToken({ userName });
  res.send({ accessToken });
};

export const getUser = (req, res) => {
  const { authorization } = req.headers;

  const isValidToken = verifyToken(authorization);
  if (!isValidToken) return res.status(401).send("Access denied from get request");

  res.send({ result: isValidToken });
};
