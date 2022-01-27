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
