
// constructor(title, actor = "Not specified") { 
//   If actor undefined = the string 
  
//   This. - variable that will be stored 
//   This thing we are creating right now 
  
//   Create a method 
//   add() 
//   How can I access what’s been created
  
//   Access to this class outside of this file 
//   Module.exports = Movie 
 

//Empty array to store our movies once the app is initalised 
const movieArr = [];

// Define our class its a template for JavaScript objects but it's NOT an object 
class Movie {
  // A class must have a method called constructor 
  //It has to have the exact name "constructor"
  //It is executed automatically when a new object is created
  //It is used to initialize object properties
  // if the actor value is undefined the actor properity will equal Not specified, actor is an optional properiety 
  constructor(title, actor = "Not specified") {
    //stores the current title and actor properties in the current object instance of our class
    this.title = title;
    this.actor = actor;
  }
  add() {
    // when our add method is called, it adds the current object instance of our class to our movieArr 
    movieArr.push(this);
  }
  list() {
    // when our list method is called is returns all the values in our movieArr
    return movieArr;
  }
}
// need to export our class so we have access to our class outside this file
module.exports = Movie;
