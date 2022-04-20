require("dotenv").config();
// require and install sequilize Object Relational Mapping tool
const { Sequelize } = require("sequelize");

// use exports syntax for db connection with enironment variable
exports.sequelize = new Sequelize(process.env.MYSQL_URI);
