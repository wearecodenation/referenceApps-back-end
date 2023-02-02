//Mongoose is an Object Document Mapping
//organization or structure for a database 
//Essentially, mongoose is a library that allows you to pass documents to a DBMS
//defining the structure of your documents and the types of data you're storing
//Everything in Mongoose starts with a Schema. 
//Each schema maps to a MongoDB collection and 
//defines the shape of the documents within that collection.

//require mongoose npm package
const mongoose = require("mongoose");

//define a new schema 
const movieSchema = new mongoose.Schema({
  //define the structure for the title attribute
  //data type should be a string
  //its a required feild when inserting a new movie in our database =
  // the value must be unqiue 
  title: {
    type: String,
    required: true,
    unique: true,
  },
  //define the structure for the actor attribute. We use an array of object becuase each movie might have more 
  //than one actor
  actors: [
    // each actor must have a datatype of an array
    {
      type: String,
    },
  ],
});

//compile our model from our schema 
//Models are responsible for creating and reading documents from the underlying MongoDB database.
const Movie = mongoose.model("Movie", movieSchema);

//export our model
module.exports = Movie;
