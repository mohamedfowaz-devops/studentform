const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  tamil: Number,
  english: Number,
  maths: Number,
  science: Number,
  social: Number
});

module.exports = mongoose.model("Student", studentSchema);