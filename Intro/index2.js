const http = require("http");

const PORT = 235;

http
  .createServer((req, res) => {
    if (req.url === "/") {
        res.write("homepage");
        res.end();
    } else if (req.url === "/One") {
      res.write("One");
      res.end();
    } else if (req.url === "/Two") {
      res.write("Two");
      res.end();
    } else {
      res.write("Not found");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log("Hi routes");
  });
