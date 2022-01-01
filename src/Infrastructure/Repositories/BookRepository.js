const { ObjectId } = require("mongodb");

module.exports = class BookRepository {
  constructor(database) {
    this.database = database;
  }

  getByTitle(title) {
    return new Promise((resolve, reject) => {
      this.database.find({ title: title }).then((book) => {
        resolve(book[0]);
      });
    });
  }

  getById(Id) {
    return new Promise((resolve, reject) => {
      this.database.find({ _id: Id }).then((book) => {
        resolve(book[0]);
      });
    });
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this.database.collection.insertOne(book, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(book);
        } else {
          reject(new Error("An error occurred while inserting the book"));
        }
      });
    });
  }

  update(id, book) {
    return new Promise((resolve, reject) => {
      this.database.collection.updateOne({ _id: ObjectId(id) }, { $set: book }, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(book);
        } else {
          reject(new Error("An error occurred while updating the book"));
        }
      });
    });
  }

  delete(book) {  
    return new Promise((resolve, reject) => {
      this.database.collection.deleteOne({ _id: book._id }, function (err, doc) {
        if (doc && doc.acknowledged) {
          resolve(true);
        } else {
          reject(new Error("An error occurred while removing the book"));
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      let books = this.database.find().populate({ path: "author", select: "name" });
      resolve(books);
    });
  }
};

