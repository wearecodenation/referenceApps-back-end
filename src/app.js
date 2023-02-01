// import moive class from utils folder - we don't need to add a filename as JavaScript will default to index.js 
const Movie = require("./utils");
// log for showing the command line arguments once file has been ran - NOT ESSENTIAL BUT USEFUL FOR SHOWING LEARNERS
console.log(process.argv);

//EXAMPLE COMMAND FOR ADDING MOVIE TO OUR ARRAY
// node src/app.js add Superman "David Smith"

//main app function all our cli actions will be contained in this function
//Pass the command line agruments into the function as a parameter
const app = (argsArr) => {
  //Try / Catch block to handle our errors where they happen 
  //expection also means errors
  //CHECK FOR LEARNER UNDERSTANDING OF TRY / CATCH. IF NOT SEE BELOW FOR QUICK DEMO * 
  try {
    // switch checks only for equality. A switch statement works much faster than an equivalent if-else ladder.
    // our command line arguments are stored in an array so we pass the second index of that array as the switch expresson then the 
    //value of the expression is compared with the values of each case.
    switch (argsArr[2]) {
      //if the expression equals add then exicute the block of code inside the add case
      case "add":
        // call our movie class and pass in the 3 and 4th index of our command line arguments array, which in this case is the movie name and optional information
        const movie = new Movie(argsArr[3], argsArr[4]);
        //call our add() method from our Moive class. This method adds the new movie to our movie array
        movie.add();
        //calls our list method inside a log so the list of movies displays in the console once the new movie has been added to the movie array
        console.log(movie.list());
        //must include a break statment to break out of the switch block once a condition is met
        break;
        // if the switch expression doesn't match anything, exicute the below block of code, which in this case is a log 
      case "addMulti":
        //if the expression equals addMulti then exicute the block of code inside the add case, 
        //which calls our movie class twice that creates two instances of our class object
        const movie1 = new Movie(argsArr[3], argsArr[4]);
        const movie2 = new Movie(argsArr[5], argsArr[6]);
        //call the add method twice
        movie1.add();
        movie2.add();
        //calls our list method inside a log so the list of movies displays in the console once the new movies have been added to the movie array
        console.log(movie1.list());
        break;
      default:
        console.log("Incorrect command");
        break;
    }
  // if any of our code throws an error or exceptions, exicute the below block of code
  } catch (error) {
    //logs the error in the console
    console.log(error);
  }
};

//call our App function and pass the command line arguments as an argument
app(process.argv);


//TRY / CATCH DEMO
// * 
// try {
//   // code that might throw an exception
// } catch (ExceptionType e) {
//   // code to handle exception
// } finally {
//   // code that will always execute
// }