import pkg from "jsonwebtoken";
//const jsonwebtoken = require("jsonwebtoken");

const signedToken = pkg.sign({ name: "Tarun", company: "ces" }, "hello");
console.log({ signedToken });

try {
  const isVerified = pkg.verify(signedToken, "hello");
  console.log({ isVerified });
} catch (err) {
  console.log(err);
}
