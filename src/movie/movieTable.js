const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const movieSchema = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
};

const Movie = sequelize.define("Movie", movieSchema);

module.exports = { Movie, movieSchema };
