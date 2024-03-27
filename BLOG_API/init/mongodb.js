const mongoose = require("mongoose");
const { connectionUrl  } = require('../config/keys');
const connectdb = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Database connected Succesfully  ");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;
