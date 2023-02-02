// LIBARYS FOR REST API 
//npm init -y 
//npm i mongoose 
//nmp i express
//npm i dotenv

//PASSWORD HASHING LIBARY
// npm i bcrypt 

//LIBARY FOR GENERATING JWT TOKENS
//npm i jsonwebtoken

//SEVER START COMMAND
//node src/server.js

// ---------------------- \\

//before we do anything run and try to connect to our MongoDB clusters
require("./db/connection"); 

//require our express npm package
const express = require("express");

// import our routes from our moiveRoutes file
const movieRouter = require("./movie/movieRoutes");

//call and define express so we can call server operations
const app = express();

// either set the port from the envrioment varibles OR use 5001
const port = process.env.PORT || 5001;

//Server is expecting everything in JSON in the req.body and will return response's as JSON
app.use(express.json());

//Server has access to our endpoints in our movieRouters file so it can handle requests to a spefic endpoint appropriately
app.use(movieRouter);

//Server is running on port 5001
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
