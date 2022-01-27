const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
  try {
    if (yargsObj.add) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      movie.add();
      console.log(movie.list());
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
