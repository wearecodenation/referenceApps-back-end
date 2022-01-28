const Movie = require("./movieTable");
const { listActors } = require("../actor/actorFunctions");

exports.addMovie = async (movieObj) => {
  try {
    const actor = await listActors({ name: movieObj.actor });
    movieObj.actor = actor.id;
    console.log(movieObj);
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (filterObj) => {
  try {
    if (filterObj) {
      if ("actor" in filterObj) {
        filterObj.actor = await listActors({ name: filterObj.actor }).id;
      }
      return await Movie.findOne({ where: filterObj });
    } else {
      return await Movie.findAll();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filterObj, updateObj) => {
  try {
    if ("name" in updateObj) {
      const actor = await listActors({ name: updateObj.name });
      updateObj.actor = actor.id;
      delete updateObj.name;
    }
    await Movie.update(updateObj, { where: filterObj });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (deleteObj) => {
  try {
    if ("name" in deleteObj) {
      const actor = await listActors({ name: deleteObj.name });
      deleteObj.actor = actor.id;
      delete updateObj.name;
    }
    await Movie.destroy({ where: deleteObj });
  } catch (error) {
    console.log(error);
  }
};
