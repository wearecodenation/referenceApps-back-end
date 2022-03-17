const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies } = require("./movie/movieFunctions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      return await listMovies();
    } else if (yargsObj.list) {
      return await listMovies({ [yargsObj.key]: yargsObj.value });
    } else {
      return "Incorrect command";
    }
  } catch (error) {
    await sequelize.close();
    return error;
  }
};

console.log(app(yargs.argv));

module.exports = app;
