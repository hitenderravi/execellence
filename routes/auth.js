var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator"); //validtr

const { signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("email", "email is requiredd").isEmail(), //validaters
    check("name", "name should be atleast 3 char").isLength({ min: 2 }), //validaters
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(), //validaters
  ],
  signin
);

module.exports = router;
