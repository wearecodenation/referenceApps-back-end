const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies } = require("./movie/movieFunctions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.create) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log("Before list")
      console.log(await listMovies());
    } else if (yargsObj.read) {
      console.log(await listMovies({ [yargsObj.column]: yargsObj.title }));
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
