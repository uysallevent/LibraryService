const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
  name: { type: String },
  country: { type: String },
  birthDate: { type: Date }
});
