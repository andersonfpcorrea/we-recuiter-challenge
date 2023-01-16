const Person = require("./model");
const controllerFactory = require("./factory");

exports.getPeople = controllerFactory(Person, "find");

exports.addPerson = controllerFactory(Person, "create", true);

exports.getPerson = controllerFactory(Person, "findById");

exports.editPerson = controllerFactory(Person, "findByIdAndUpdate", true);

exports.deletePerson = controllerFactory(Person, "findByIdAndDelete");
