const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
  title: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "authors" },
  price: { type: Number },
  isbn: { type: String },
  language: { type: String },
  numberOfPages: { type: Number },
  publisher: { type: String },
});
