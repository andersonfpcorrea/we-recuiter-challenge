const router = require("express").Router();
const {
  getPeople,
  editPerson,
  deletePerson,
  addPerson,
  deletePeople,
} = require("./controller");
require("express-async-errors");

router.route("/").get(getPeople).post(addPerson).delete(deletePeople);

router.route("/:id").put(editPerson).delete(deletePerson);

module.exports = router;
