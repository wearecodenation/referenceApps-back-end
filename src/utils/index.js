// constructor(title, actor = "Not specified") { 
//   If actor undefined = the string 
  
//   This. - variable that will be stored 
//   This thing we are creating right now 
  
//   Create a method 
//   add() 
//   How can I access what’s been created
  
//   Access to this class outside of this file 
//   Module.exports = Movie 
  
const movieArr = [];

class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  add() {
    movieArr.push(this);
  }
  list() {
    return movieArr;
  }
}

module.exports = Movie;
