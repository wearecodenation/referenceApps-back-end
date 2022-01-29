const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    await Movie.updateOne(
      { title: req.body.title },
      { $push: { actors: req.body.actor } }
    );
    res.status(200).send({ message: "Successfully updated movie" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.deleteOne({ title: req.params.title });
    res.status(200).send({ message: "Successfully deleted movie" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
