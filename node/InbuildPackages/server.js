const http = require("http");
const fs = require("fs");
const PORT = 9000;

const server = http.createServer((req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(PORT, () => {
  console.log(`Server is running in port,`, PORT);
});
