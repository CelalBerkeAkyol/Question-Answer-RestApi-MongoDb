const express = require('express');
const routers = require("./routers/index.js"); 
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/connetDatabase.js");

// değişkenleri config dosyası içinde tanımlamıştık -- bu dosya gitignore 
dotenv.config({
    path: "/home/celal/restApi-express/config.env"
});

connectDatabase(); // database bağlanmaya yarar
const app = express(); 
const PORT = 5000;



// Aşağıdaki koddaki herhangi bir değişiklik tüm urlleri değiştirecektir. 

app.use("/api",routers); // tüm routerslere yönlendirme yapar 

app.get("/",(req,res) =>{
    res.send("Hello question answer api ");
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})