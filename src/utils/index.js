class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  async add(collection) {
    // CRUD
    await collection.insertOne(this);
  }
  async list(collection) {
    return await collection.find({}).toArray();
  }
  //Create the delete and update methods here
}

module.exports = Movie;
