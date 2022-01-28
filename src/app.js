const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  try {
    if (yargsObj.add) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      await movie.add(collection);
      console.log(await movie.list(collection));
    } else if (yargsObj.list) {
      console.log(
        await collection.findOne({ [yargsObj.key]: yargsObj.filter })
      );
    } else if (yargsObj.update) {
      const updateMovie = new Movie(yargsObj.title, yargsObj.actor);
      await updateMovie.update(collection, yargsObj.key, yargsObj.filter);
      console.log(await updateMovie.list(collection));
    } else if (yargsObj.delete) {
      const deleteMovie = new Movie(yargsObj.title, yargsObj.actor);
      await deleteMovie.delete(collection);
      console.log(await deleteMovie.list(collection));
    } else {
      console.log("Incorrect command");
    }
    await client.close();
  } catch (error) {
    await client.close();
    console.log(error);
  }
};

app(yargs.argv);
