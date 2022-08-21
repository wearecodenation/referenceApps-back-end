const Movie = require("./utils");

console.log(process.argv);

const app = (argsArr) => {
  try {
    switch (argsArr[2]) {
      case "add":
        // const movie = argsArr[3]
        // console.log(movie +' is stored')
        // -------------------- //

        //how are we going to store this in a array - remeber breif
        // const movie = [argsArr[3]]
        // console.log(movie) 

        //---------------------//

        // how can we store the optional information>?
        // const movie = [argsArr[3], argsArr[4]]
        // console.log(movie) 

        // --------------------- //

        //multiple words
        // node src/app.js add Superman David Smith 

        // -------------------- //

        //multiple words
        // node src/app.js add Superman "David Smith"

        // ----------------- // 
        
        //Remeber the brief - optional info
        // node src/app.js add Superman
        // we don't want unefinded

        // ------------------ //

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


// Strech goal for the rest of the morning
// Add more than one movie during runtime 


// Create Repo 
// Git add .
// ..adds all changed files from repo 
// Git commit
// Git push 

// Post repo 

// Questions 
