require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movieFunctions");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies(yargsObj.key, yargsObj.filter));
    } else if (yargsObj.update) {
      await updateMovie(
        { [yargsObj.filterKey]: yargsObj.filterValue },
        { [yargsObj.updateKey]: yargsObj.updateValue }
      );
      console.log(await listMovies());
    } else if (yargsObj.delete) {
      await deleteMovie({ [yargsObj.deleteKey]: yargsObj.deleteValue });
      console.log(await listMovies());
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    await mongoose.disconnect();
    console.log(error);
  }
};

app(yargs.argv);
