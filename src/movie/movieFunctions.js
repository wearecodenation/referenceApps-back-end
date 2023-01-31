// get Movie schema with uppercase M
const { Movie } = require("./movieTable");

// create an add Movie function
exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

// create a list movies function
exports.listMovies = async () => {
  try {
    return await Movie.findAll();
  } catch (error) {
    console.log(error);
  }
};

// create a findOne function
exports.findMovie = async (movieObj) => {
  try {
    return await Movie.findOne({where: {title: movieObj.title}});
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async () => {
  try {
    return await Movie.update({ title: movieObj.newtitle}, {where: { title : movieObj.oldtitle}});
  } catch (error){
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    return await Movie.destroy({ where: {title: movieObj.title}});
  } catch (error) {
    console.log(error);
  }
};
