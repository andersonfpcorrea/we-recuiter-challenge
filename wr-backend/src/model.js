const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
