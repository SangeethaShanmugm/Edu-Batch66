const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());

const AuthController = require("./controller/authController");
app.use("/auth", AuthController);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
