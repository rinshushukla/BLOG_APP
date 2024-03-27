const express = require("express");
const router = express.Router();
const { authController } = require("../Controller");
const { signupValidator } = require("../valideters/auth");
const validate = require("../valideters/validate");

router.post("/signup", signupValidator, validate, authController.signup);

// const express = require("express");
// const router = express.Router();
// const { authCOntroller } = require("../Controller");

// router.post("/signup",authCOntroller.signup);

// module.exports = router;
module.exports = router;
