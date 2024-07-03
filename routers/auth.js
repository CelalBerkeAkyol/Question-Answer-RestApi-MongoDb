const express = require("express");
const router = express.Router();
const {register,errorTest} = require("../controllers/authController");


router.get("/",(reg,res)=>{
    res.send("Auth home Page");
});
router.get("/error",errorTest);
router.post("/register",register);


module.exports = router; 