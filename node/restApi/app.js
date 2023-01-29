const express = require("express");
const app = express();
const PORT = 8080;

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

const locations = [
  {
    location_id: 1,
    location_name: "Ashok Nagar, New Delhi",
    state_id: 1,
    state: "Delhi",
    country_name: "India",
  },
  {
    location_id: 2,
    location_name: "Jeevan Nagar, New Delhi",
    state_id: 1,
    state: "Delhi",
    country_name: "India",
  },
  {
    location_id: 3,
    location_name: "Vasant Kunj, New Delhi",
    state_id: 1,
    state: "Delhi",
    country_name: "India",
  },
];

const quickSearch = [
  {
    mealtype_id: 1,
    mealtype: "Breakfast",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/FVhSTWK/breakfast.jpg",
  },
  {
    mealtype_id: 2,
    mealtype: "Lunch",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/8rPxkWP/lunch.jpg",
  },
  {
    mealtype_id: 3,
    mealtype: "Dinner",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/XjzPqYv/dinner.jpg",
  },
  {
    mealtype_id: 4,
    mealtype: "Snacks",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/wchCHfb/snacks.jpg",
  },
  {
    mealtype_id: 5,
    mealtype: "Drinks",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/YR0S6fV/drinks.jpg",
  },
  {
    mealtype_id: 6,
    mealtype: "NightLife",
    content: "Start your day with exclusive breakfast options",
    meal_image: "https://i.ibb.co/q1fC2jW/nightlife.jpg",
  },
];

//default express endpoint
app.get("/", (req, res) => {
  res.send("Hello everyone🥳🥳😉😉😉");
});
//location endpoint
app.get("/locations", (req, res) => {
  res.send(locations);
});

//get mealtype data
app.get("/quickSearch", (req, res) => {
  res.send(quickSearch);
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

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express server listing to port ${PORT}`);
});
