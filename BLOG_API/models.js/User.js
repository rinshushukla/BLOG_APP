const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String,  required: true },
    password: { type: String, required: true, minlength: 6 },

    // role:1-> SuperAdmin
    //role:2->  Admin
    // role:3-> User
    role: { type: Number, default: 3 },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userschema);
module.exports = User;
