const express = require("express");
const router = express.Router();

router.get("/",(reg,res)=>{
    res.send("Auth home Page");
});
router.get("/user",(reg,res)=>{
    res.send("Auth user Page");

});

module.exports = router; 