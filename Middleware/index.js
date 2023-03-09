const express = require("express");
const app = express();
const port = 4000;

app.get(
  "/",
  (req, res, next) => {
    console.log("Security check");
    if (req.query.name !== "Tarun") {
      res.send("No access");
    } else {
      next();
    }
  },
  (req, res, next) => {
    console.log("Allowed");
    res.send(`Hi ${req.query.name}`);
  }
);

app.listen(port, () => {
  console.log(`Port ${port}`);
});

// Modulared code with status codes

app.use(express.json());

const checkMiddle = (req, res, next) => {
  if (!req.query.name) {
    res.status(400).json({ message: "Name requried" });
  }

  if (req.query.name !== "tarun") {
    res.status(401).json({ message: "No access" });
  } else {
    //next();
  }
};

const Logic = (req, res, next) => {
  res.send(`Hi ${req.query.name}`);
};

app.get("/", checkMiddle, Logic);

app.listen(port, () => {
  console.log(`Port ${port}`);
});
