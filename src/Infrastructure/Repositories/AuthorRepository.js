const { ObjectId } = require("mongodb");

module.exports = class AuthorRepository {
  constructor(database, bookDatabase) {
    this.database = database;
    this.bookDatabase = bookDatabase;
  }

  getByName(name) {
    return new Promise((resolve, reject) => {
      this.database.find({ name: name }).then((author) => {
        resolve(author[0]);
      });
    });
  }

  getById(Id) {
    return new Promise((resolve, reject) => {
      this.database.find({ _id: Id }).then((author) => {
        resolve(author[0]);
      });
    });
  }

  add(author) {
    return new Promise((resolve, reject) => {
      this.database.collection.insertOne(author, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(author);
        } else {
          reject(new Error("An error occurred while inserting the author"));
        }
      });
    });
  }

  update(id, author) {
    return new Promise((resolve, reject) => {
      this.database.collection.updateOne({ _id: ObjectId(id) }, { $set: author }, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(author);
        } else {
          reject(new Error("An error occurred while updating the author"));
        }
      });
    });
  }

  delete(author) {
    return new Promise((resolve, reject) => {
      this.database.collection.deleteOne({ _id: author._id }, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(true);
        } else {
          reject(new Error("An error occurred while removing the author"));
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      let author = this.database.find();
      resolve(author);
    });
  }
};
