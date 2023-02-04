const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = process.env.PORT || 8000;
let db;

// console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;

const data = [
  {
    id: 1,
    name: "Avengers",
    rating: 4.5,
    type: "Action",
  },
  {
    id: 2,
    name: "Jab We Met",
    rating: 4.7,
    type: "Romantic",
  },
];

// const locations = [
//   {
//     location_id: 1,
//     location_name: "Ashok Nagar, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 2,
//     location_name: "Jeevan Nagar, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
//   {
//     location_id: 3,
//     location_name: "Vasant Kunj, New Delhi",
//     state_id: 1,
//     state: "Delhi",
//     country_name: "India",
//   },
// ];

// const quickSearch = [
//   {
//     mealtype_id: 1,
//     mealtype: "Breakfast",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/FVhSTWK/breakfast.jpg",
//   },
//   {
//     mealtype_id: 2,
//     mealtype: "Lunch",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/8rPxkWP/lunch.jpg",
//   },
//   {
//     mealtype_id: 3,
//     mealtype: "Dinner",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/XjzPqYv/dinner.jpg",
//   },
//   {
//     mealtype_id: 4,
//     mealtype: "Snacks",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/wchCHfb/snacks.jpg",
//   },
//   {
//     mealtype_id: 5,
//     mealtype: "Drinks",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/YR0S6fV/drinks.jpg",
//   },
//   {
//     mealtype_id: 6,
//     mealtype: "NightLife",
//     content: "Start your day with exclusive breakfast options",
//     meal_image: "https://i.ibb.co/q1fC2jW/nightlife.jpg",
//   },
// ];

//default express endpoint
app.get("/", (req, res) => {
  res.send("Hello everyone🥳🥳😉😉😉");
});
//location endpoint
app.get("/locations", (req, res) => {
  db.collection("locations")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get mealtype data
app.get("/quickSearch", (req, res) => {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get restaurant data
app.get("/restaurant", (req, res) => {
  db.collection("restaurant")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//particular resturant id
//get data
app.get("/data", (req, res) => {
  res.send(data);
});

//get data based on ID
// req.params - to get the id from
app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const result = data.find((dt) => dt.id == id);
  res.send(result);
});

//Mongodb Connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("zomato-app");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
