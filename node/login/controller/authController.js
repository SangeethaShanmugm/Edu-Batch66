const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const config = require("../config");
const jwt = require("jsonwebtoken");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello");
});

//get all users
router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//register
router.post("/register", (req, res) => {
  User.find({ email: req.body.email }, (err, data) => {
    if (data.length > 0) {
      res.send("Email Already Taken");
    } else {
      //encrypt password
      let hashPassword = bcrypt.hashSync(req.body.password, 8);
      console.log(hashPassword);
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: hashPassword,
          phone: req.body.phone,
          role: req.body.role ? req.body.role : "User",
        },
        (err, result) => {
          if (err) return res.send("Error while registering");
          res.send("Registration Successfully");
        }
      );
    }
  });
});

//login

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, token: "Error while logging in " });
    if (!user)
      return res.status(404).send({ auth: false, token: "No user found" });
    else {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        return res
          .status(404)
          .send({ auth: false, token: "Invalid Credentials" });
      //generate token
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400,
      }); //24 hours -sec
      res.send({
        message: "Successfully logged in🥳🥳",
        auth: true,
        token: token,
      });
    }
  });
});

module.exports = router;

//getUserByUser(email)
// getUserByUser(email){
//     db.collection("users")
//     .findOne({email})

// }
