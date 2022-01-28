class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  async add(collection) {
    await collection.insertOne(this);
  }
  async list(collection) {
    return await collection.find({}).toArray();
  }
}

module.exports = Movie;
