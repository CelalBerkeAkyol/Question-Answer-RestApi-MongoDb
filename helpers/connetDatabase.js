const mongoose = require("mongoose");

const conntectToDatabase = () =>{
    (mongoose.connect(process.env.MONGO_URI))
    .then(() =>{
        console.log("Connection is succesfull");
    
    })
    .catch(err=>{
        console.log("Connection is unsuccesfull");
        console.error(err);
        })
}
module.exports = conntectToDatabase;