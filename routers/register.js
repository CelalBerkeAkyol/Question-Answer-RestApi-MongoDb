const express = require("express");
const router = express.Router();
// controller dosyasını ekleyerek modülerlik katacağız 
const {getAllRegister} = require("../controllers/registerController");

router.get("/",(reg,res)=>{
    res.send("register home Page");
});
router.get("/register",getAllRegister);

module.exports = router; 