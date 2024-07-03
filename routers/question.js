const express = require("express");
const router = express.Router();


router.get("/",(reg,res)=>{
    res.send("Questions home Page");
});
router.get("/delete",(reg,res)=>{
    res.send("Questions Delete page")
})


module.exports = router; 