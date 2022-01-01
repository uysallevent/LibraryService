const mongoose = require('mongoose');
const schema = require('../Schemas/BookSchema');

module.exports = class BookDatabase {
  constructor() {
    return mongoose.model("books", schema);
  }
}
