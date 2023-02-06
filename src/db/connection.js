//require our dotenv and mongoose packages

//dotenv is a package that allows us to load varibles stored in a .env file 
//so senitive information isn't exposed in our code

//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment

require("dotenv").config();
const mongoose = require("mongoose");

//defining our connection function that be will called when our connection file is imported in server.js
const connection = async () => {
  //try / catch to handel any errors /expections
  try {
    //make a connection to our  mongoDB cluster, passing in the connection string stored in our .env file
    await mongoose.connect(process.env.MONGO_URI);
    //log successfully connected once the connection to Mongo has been made successfully
    console.log("Successfully connected");
    //catch block to handle any errors that might have occord when trying to connect to our cluster
  } catch (error) {
    //if an error has occord, log it in the terminal
    console.log(error);
  }
};
//call connection function when this file is imported
connection();
