require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  try {
    //the client giveds us access to the the mongoDb methods
    await client.connect();
    //declair the database inside my cluster
    //cluster for mongodb that contains db

    //what we want to call the db
    const db = client.db("Movies");
    return db.collection("Movie"); 
    //creates the indivual collections inside our database
    //get the collection we use the return to perform CRUD operations on our database
  } catch (error) {
    console.log(error);
  }
};

//returning two different items so we use object syntax ;
module.exports = { client, connection };

//any file we can access the client and connection function
//learning curve has increased since yesterday
