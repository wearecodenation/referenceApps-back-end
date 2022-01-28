const yargs = require("yargs");
const Movie = require("./utils");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      await movie.add();
      console.log(await movie.list());
    } else if (yargsObj.update) {
      const updateMovie = new Movie(yargsObj.title, yargsObj.actor);
      await updateMovie.update(yargsObj.key, yargsObj.filter);
    } else if (yargsObj.delete) {
      const deleteMovie = new Movie(yargsObj.title, yargsObj.actor);
      await deleteMovie.delete();
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
