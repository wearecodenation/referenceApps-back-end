const fs = require("fs");
let movieArr;

class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  async add() {
    try {
      const addArr = fs.readFileSync("./storage.json");
      movieArr = await JSON.parse(addArr);
    } catch (error) {
      movieArr = [];
    }
    movieArr.push(this);
    const strArr = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", strArr);
  }
  async list() {
    movieArr = await JSON.parse(fs.readFileSync("./storage.json"));
    return movieArr;
  }
}

module.exports = Movie;
