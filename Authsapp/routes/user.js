const express = require('express')
const router = express.Router();
// const User = require("../Model/User");

const {login,signup } = require("../controler/Auth");
console.log("route before")
router.post("/signup", signup);
router.post("/login", login);
console.log("route After")


module.exports = router;