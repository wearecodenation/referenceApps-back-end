// DataTypes is used within the Sequelize library
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

// Build Schema (template) to set up table and columns.
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

// Create table if one doesn't exist
const Movie = sequelize.define("Movie", movieSchema);

module.exports = { Movie, movieSchema };
