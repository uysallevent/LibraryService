const mongoose = require('mongoose');
const schema = require('../Schemas/AuthorSchema');

module.exports = class AuthorDatabase {
  constructor() {
    return mongoose.model("authors", schema);
  }
}
