const User = require("../models.js/User");

const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
   const isEmailExist = await User.findOne({email});
   if(isEmailExist){
    res.code= 400;
    throw new Error ("Email Is Already Exist ")
   }

    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({
      code: 201,
      status: true, 
      messgae: "User Registered Sucessfully",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { signup };

// const signup = async (req, res, next) => {};

// module.exports = { signup };
