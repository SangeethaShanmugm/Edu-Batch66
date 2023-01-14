const express = require("express");
const app = express();
const PORT = 8080;

const data = [
  {
    "id": 1,
    "name": "Avengers",
    "rating": 4.5,
    "type": "Action",
  },
  {
    id: 2,
    name: "Jab We Met",
    rating: 4.7,
    type: "Romantic",
  },
];

//default express endpoint
app.get("/", (req, res) => {
  res.send("Express Server default page");
});
//location endpoint
app.get("/location", (req, res) => {
  res.send("This is location route");
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
