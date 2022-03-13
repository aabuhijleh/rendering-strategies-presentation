const fs = require("fs").promises;
const http = require("http");
const path = require("path");

const PORT = 7777;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile(path.join(process.cwd(), "web", req.url)); // read file from "web" folder
      res.writeHead(200);
      res.end(data);
    } catch (err) {
      res.writeHead(404);
      res.end(`Could not find "${req.url}"`);
    }
  })
  .listen(PORT);

console.log(`⚡ Server is running http://localhost:${PORT} ⚡`);
