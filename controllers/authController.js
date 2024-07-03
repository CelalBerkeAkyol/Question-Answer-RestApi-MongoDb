const User = require("../models/user");
// custom errror handler dahil edilecek 
const CustomError = require("../helpers/CustomError");
const register = async (reg, res, next) => {
  // post data
  const name = "Harun Akyol";
  const email = "harun@gmail.com";
  const password = "123";
  try {
    
  // async await 
  const user = await User.create({
    name,
    email,
    password

  });

  res
  .status(400)
  .json({
    succes: true,
    data: user
  });
  } catch (error) {
    return next(error);
  }

  
};
// eror test etmek için kendimiz eror oluşturuyoruz 
const errorTest = (req,res,next) =>{
  return next(new TypeError("Type Error"));
}
module.exports = {
  register,
  errorTest
}