require("dotenv").config();
const mongoose = require("mongoose");

//add database name between / and ? in .env
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

connection();
