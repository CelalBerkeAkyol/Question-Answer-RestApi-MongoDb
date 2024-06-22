const express = require('express');

const auth = require("./auth");
const register = require("./register");

const router = express.Router();

router.use("/register",register);
router.use("/auth",auth);

module.exports = router;