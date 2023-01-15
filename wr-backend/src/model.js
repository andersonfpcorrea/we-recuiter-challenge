const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  gender: { type: String, require: true },
  address: { type: String, require: true },
  dob: { type: Date, require: true },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
