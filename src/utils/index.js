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
  async update(collection, key, filter) {
    console.log(this);
    await collection.updateOne({ [key]: filter }, { $set: this });
  }
  async delete(collection) {
    await collection.deleteOne(this);
  }
}

module.exports = Movie;
