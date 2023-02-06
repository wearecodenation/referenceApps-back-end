const Movie = require("./movieModel");
//POST
//http://localhost:5001/movie
// {
    //"title" : "Superman",
    //"actor" : "bob"

// }

//controller to handel storing 

exports.addMovie = async (req, res) => {
  try {
    //add a new movie to the databse from the body we pass in the request (example above)
    const newMovie = await Movie.create(req.body);
    //if a user has been successfully added. send a 200 ok status code and send the new movie back in the response
    res.status(200).send({ movie: newMovie });
    // if any of the code returns an error or execption, the below catch block will run
  } catch (error) {
    //log the error in the terminal and return the error message in the response
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
//GET
//http://localhost:5001/movie
// WE CAN'T PASS A BODY IN A GET REQUEST
exports.listMovies = async (req, res) => {
  try {
    //call .find mongoose method with no parameters so all movies will be returned from our cluster 
    //and sent in the response
    const movies = await Movie.find({});
    res.status(200).send({ movies });
    // if any of the code returns an error or execption, the below catch block will run
  } catch (error) {
    console.log(error);
        //log the error in the terminal and return the error message in the response
    // 500 status code = internal server error
    res.status(500).send({ error: error.message });
  }
};
//PUT
//http://localhost:5001/movie
//  {
//     "title" : "superman",
//     "key" : "title",
//     "value": "superman 2"
//  }

exports.updateMovie = async (req, res) => {
  try {
    await User.updateOne(
      //find the user we want to update buy filtering our collection by the movie title
      {username: req.body.username},
      //use the key that we pass in the body of the request so we can dynamically update any key in our 
      //database. the value is what we want to update it too
      {[req.body.key]: req.body.value}
    )
    res.status(200).send({message: "A user felid as been updated"})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
//DELETE
//http://localhost:5001/movie
// {
//     "title" : "superman"
// }
exports.deleteMovie = async (req, res) => {
  try {
    //pass the movie title we pass in the req.body to the deleteOne method that deletes a user from our database
    await Movie.deleteOne({ title: req.body.title });
    res.status(200).send({ message: "Successfully deleted movie" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
