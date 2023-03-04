const http = require("http");

//req - what we send to server(params, queryParams, body)
//res - what server will send us back
const PORT = 8000;
const server = http.createServer((req, res) => {
  res.write(`<h1>Our First Server</h1>`);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running in port,`, PORT);
});
