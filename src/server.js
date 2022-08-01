// npm i express mongoose dotenv
require("./db/connection"); 
// - run connection file straight away 
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(movieRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
