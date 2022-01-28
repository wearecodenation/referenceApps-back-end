const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movieFunctions");
const {
  addActor,
  listActors,
  updateActor,
  deleteActor,
} = require("./actor/actorFunctions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.Movie) {
      if (yargsObj.add) {
        await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
        console.log(await listMovies());
      } else if (yargsObj.list) {
        console.log(await listMovies({ [yargsObj.key]: yargsObj.value }));
      } else if (yargsObj.update) {
        await updateMovie(
          { [yargsObj.filterKey]: yargsObj.filterValue },
          { [yargsObj.updateKey]: yargsObj.updateValue }
        );
        console.log(await listMovies());
      } else if (yargsObj.delete) {
        await deleteMovie({ [yargsObj.key]: yargsObj.value });
      } else {
        console.log("No such Movie command");
      }
    } else if (yargsObj.Actor) {
      if (yargsObj.add) {
        await addActor({ name: yargsObj.name });
        console.log(await listActors());
      } else if (yargsObj.list) {
        console.log(await listActors({ name: yargsObj.name }));
      } else if (yargsObj.update) {
        await updateActor(
          { name: yargsObj.filter },
          { name: yargsObj.updateValue }
        );
        console.log(await listActors());
      } else if (yargsObj.delete) {
        await deleteActor({ name: yargsObj.name });
        console.log(await listActors());
      } else {
        console.log("No such Actor command");
      }
    } else {
      console.log("Incorrect command");
    }
    await sequelize.close();
  } catch (error) {
    await sequelize.close();
    console.log(error);
  }
};

app(yargs.argv);
