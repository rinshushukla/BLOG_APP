const { check } = require("express-validator");

const signupValidator = [
  check("name").notEmpty().withMessage("Name Cant Be Empty"),

  check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("E-mail Cant Be Empty"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password Shoud Be 6 Charcter Long "),
];
module.exports = { signupValidator };
