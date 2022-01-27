const yargs = require("yargs");
const Movie = require("./utils");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      await movie.add();
      console.log(await movie.list());
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
