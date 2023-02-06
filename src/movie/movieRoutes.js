//import Router class from express 
const { Router } = require("express");

//import controllers so we can call them in our endpoints defined below
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movieControllers");
//define the router class in a variable so we can use it later
const movieRouter = Router();


//GET - On a GET method an endpoint should be returning static information or reading a database.
//POST - On a POST method, data should be sent in the http request to be used by the controller in some way (creating a database entry).
//PUT/PATCH - The PUT and PATCH methods handle update requests, for instance updating data in a database.
//DELETE - Fairly self-explanatory, data should be deleted on a DELETE method.

//Define our endpoints and set which http verb the endpoint is expecting when it recives at request
//our movieRouter gives us access to the get and post methods 
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie", updateMovie);
movieRouter.delete("/movie/:title", deleteMovie);

//export the movieRouter so we can use it outside this file
module.exports = movieRouter;
