const express = require('express');

const auth = require("./auth");
const question = require("./question");

const router = express.Router();
router.use("/question",question);
router.use("/auth",auth);

module.exports = router;