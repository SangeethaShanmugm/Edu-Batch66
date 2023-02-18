const express = require("express");
const app = express();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
let db;

const port = 8080;
const MONGO_URL = "mongodb://localhost:27017";

app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("zomato-app");
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
