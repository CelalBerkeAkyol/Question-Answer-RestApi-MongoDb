const CustomError = require("../helpers/CustomError");

const customErrorHandler = (err,req,res,next) =>{
    let customError = err; 
    // console.log(err.name);
    if(err.name === "SyntaxError"){
        customError = new CustomError("Unexpected Syntax",400);
    }
    if(err.name === "ValidationError"){
        customError = new CustomError(err.message,400);
    }
    console.log(customError.message,customError.status)
    res.status(customError.status || 500).json({
        succes: false,
        message: customError.message || "Internal server error"
    });
}
module.exports = customErrorHandler;