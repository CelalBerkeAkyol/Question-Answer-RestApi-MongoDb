const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    name : {
        type : String,
        required:[true,"Please provide a name"]
    },
    email : {
        type : String,
        required: true,
        unique : true,
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    },
    password : {
        type : String,
        minlength : 6,
        required : [true,"Please provide a password"],
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now

    },
    title : {
        type: String
    },
    about : {
        type:String
    },
    website : {
        type: String 
    },
    place : {
        type: String
    },
    blocked : {
        type : Boolean,
        default : false
    }


});
module.exports = mongoose.model("user",UserSchema);
// Yeni bir data eklendiğinde mondo db de user adlı schema oluşacak.