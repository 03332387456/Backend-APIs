const express = require("express");
const AuthController = require("../controllers/authcontrollers")
const route = express.Router();

route.post("/signup", AuthController.signUp);
route.post("/login", AuthController.login);

module.exports = route;