const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const MongoClient = mongo.MongoClient;
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;
let db;

// console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;

//supporting libraries- middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// const authkey = "b7e7620a6a53b247f5c77d7a6a5bbc9b";
// function auth(key) {
//   if (authkey === key) {
//     return true;
//   } else {
//     return false;
//   }
// }

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
  // let key = req.query.key;
  db.collection("locations")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  // let key = req.header("x-auth-key");
  // if (authkey === key) {

  // } else {
  //   res.send("Unauthorized ");
  // }
});

//get mealtype data
app.get("/quickSearch", (req, res) => {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  // if (auth(req.header("x-auth-key"))) {

  // } else {
  //   res.send("Unauthorized ");
  // }
});

//get restaurant data
app.get("/restaurants", (req, res) => {
  let query = {};
  let stateId = Number(req.query.stateId);
  let mealId = Number(req.query.mealId);
  if (stateId && mealId) {
    query = { state_id: stateId, "mealTypes.mealtype_id": mealId };
  } else if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }
  db.collection("restaurant")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.get("/filter/:mealId", (req, res) => {
  let mealId = Number(req.params.mealId);
  let cuisineId = Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  //sorting
  let sort = { cost: 1 };
  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }
  if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
      "cuisines.cuisine_id": cuisineId,
    };
  } else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  } else if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
    };
  }
  //  else {
  //   query = { "mealTypes.mealtype_id": mealId };
  // }
  db.collection("restaurant")
    .find(query)
    .sort(sort)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//particular restaurant id
// app.get("/details/:id", (req, res) => {
//   let id = mongo.ObjectId(req.params.id);
//   db.collection("restaurant")
//     .find({ _id: id })
//     .toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
// });

app.get("/details/:id", (req, res) => {
  let id = Number(req.params.id);
  db.collection("restaurant")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get menu items
app.get("/menu/:id", (req, res) => {
  let id = Number(req.params.id);
  db.collection("menu")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//list of orders
app.get("/orders", (req, res) => {
  let email = req.query.email;
  let query = {};
  if (email) {
    // query = {email: email}
    query = { email };
  }
  db.collection("orders")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//delete orders
app.delete("/deleteOrder/:id", (req, res) => {
  let oid = mongo.ObjectId(req.params.id);
  db.collection("orders").deleteOne({ _id: oid }, (err, result) => {
    if (err) throw err;
    res.send("Order Deleted");
  });
});

//place order

app.post("/placeOrder", (req, res) => {
  console.log(req.body);
  db.collection("orders").insert(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

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
