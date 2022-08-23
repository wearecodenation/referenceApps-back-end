const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  try {
    if (yargsObj.create) {
      const movie = new Movie(yargsObj.title, yargsObj.actor);
      //where we call out CRUD operation
      await movie.add(collection);
      console.log(await movie.list(collection));
    } else if (yargs.read) {
      console.log(await movie.list(collection));
    //add other CRUD operations here
    // } else if (yargs.update ){
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
