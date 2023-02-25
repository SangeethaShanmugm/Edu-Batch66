const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");

const bodyParser = require("body-parser");
dotenv.config();

const MongoClient = mongo.MongoClient;
const app = express();
app.use(cors());

const PORT = 8000;
let db;

const MONGO_URL = "mongodb://0.0.0.0:27017";

//supporting libraries - middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongodb Connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("Zomato");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
