const fs = require("fs");
let movieArr;

class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  async grabMovies() {
    try {
      const addArr = fs.readFileSync("./storage.json");
      movieArr = await JSON.parse(fs.readFileSync("./storage.json"));
    } catch (error) {
      movieArr = [];
    }
  }
  async add() {
    await this.grabMovies();
    movieArr.push(this);
    const strArr = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", strArr);
  }
  async list() {
    movieArr = await JSON.parse(fs.readFileSync("./storage.json"));
    return movieArr;
  }
  async update(key, filter) {
    await this.grabMovies();
    for (let i = 0; i < movieArr.length; i++) {
      if (movieArr[i][key] === filter) {
        movieArr[i] = this;
        break;
      }
    }
    const strArr = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", strArr);
  }
  async delete() {
    await this.grabMovies();
    for (let i = 0; i < movieArr.length; i++) {
      if (
        movieArr[i].title === this.title &&
        movieArr[i].actor === this.actor
      ) {
        movieArr.splice(i, 1);
        break;
      }
    }
    const strArr = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", strArr);
  }
}

module.exports = Movie;
