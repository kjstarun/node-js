const http = require("http");
const PORT = 234;

http
  .createServer((request, response) => {
    const Obj = {
      name: "Tarun......",
      age: 21,
      company: "CES",
    };
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(Obj));
    response.end();
  })
  .listen(PORT, () => {
    console.log("Hi from port 234");
  });
