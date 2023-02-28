const http = require("http");
const { products } = require("./products");
var url = require("url");

http
  .createServer((req, res) => {
    var adr = req.url;
    var q = url.parse(adr, true);
    // if (q.pathname !== "/productss") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let temp = req.url.replace("/products/", "");
    switch (req.method) {
      case "GET":
        if (temp > 0) {
          res.write(
            JSON.stringify(products.filter((item) => item.id === +temp))
          );
          res.end();
        } else {
          res.write(JSON.stringify(products));
          res.end();
        }
        // if (q.pathname === "/products/") {
        //   res.writeHead(200, { "Content-Type": "application/json" });
        //   res.write(
        //     JSON.stringify(products.filter((item) => item.id === +q.query.id))
        //   );
        //   res.end();
        // } else if (q.pathname === "/products") {
        //   res.writeHead(200, { "Content-Type": "application/json" });
        //   res.write(JSON.stringify(products));
        //   res.end();
        // }
        break;
      case "POST":
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          console.log("hi", body);
          products.push(JSON.parse(body));
          res.end("ok");
        });
        // if (q.query.id && q.query.name && q.query.price) {
        //   products.push({
        //     id: Number(q.query.id),
        //     name: q.query.name,
        //     price: q.query.price,
        //   });
        //   res.writeHead(200, { "Content-Type": "application/json" });
        //   res.write(JSON.stringify(products));
        //   res.end();
        // } else {
        //   res.write("Post a valid request");
        //   res.end();
        // }
        break;
      case "PUT":
        if (q.query.id) {
          products.map((item) => {
            if (item.id === +q.query.id) {
              console.log("entered");
              item.name = q.query.name;
              item.price = q.query.price;
            }
          });
          res.write(JSON.stringify(products));
          res.end();
        }
        break;
      case "DELETE":
        let deleteId = products.findIndex((item) => item.id === +temp);
        if (deleteId >= 0) {
          res.write(JSON.stringify(products[deleteId]));
          products.splice(deleteId, 1);
          res.end();
        } else {
          res.write("Give a valid id");
          res.end();
        }
        break;
      default:
        res.write("Invalid request method");
        res.end();
        break;
    }
  })
  .listen(200);
