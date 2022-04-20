// require yargs for command line arguements
const yargs = require("yargs");

// get db connection from db folder
const { sequelize } = require("./db/connection");

// get functions from movie folder to run based on user input
const { addMovie, listMovies, findMovie, updateMovie, deleteMovie } = require("./movie/movieFunctions");

// create asynchronous app function to take in data and use CRUD functions
const app = async (yargsObj) => {
  try {
      await sequelize.sync();
      if (yargsObj.add) {
        await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
        console.log(await listMovies());
      } else if (yargsObj.list) {
        console.log(await listMovies());
        // CRUD operation needed to be built by students
      } else if (yargsObj.find){
        console.log(await findMovie({[yargsObj.key]: yargsObj.title}));
      } else if (yargsObj.update){
        console.log(await updateMovie({ [yargsObj.key]: yargsObj.value }, {[yargsObj.key]: yargsObj.value }));
      } else if (yargsObj.delete){
        console.log(await deleteMovie({ [yargsObj.key]: yargsObj.value }));
      } else {
        console.log("Incorrect command, please type in valid command");
      } await sequelize.close();
      } catch (error) {
        await sequelize.close();
        console.log(error);
      }
    };
  
app(yargs.argv);


module.exports = app;
