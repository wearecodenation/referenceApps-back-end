const Movie = require("./utils");

console.log(process.argv);

const app = (argsArr) => {
  try {
    switch (argsArr[2]) {
      case "add":
        const movie = new Movie(argsArr[3], argsArr[4]);
        movie.add();
        console.log(movie.list());
        break;
      default:
        console.log("Incorrect command");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

app(process.argv);
