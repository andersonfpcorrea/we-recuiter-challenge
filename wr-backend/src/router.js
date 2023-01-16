const router = require("express").Router();
const {
  getPeople,
  editPerson,
  deletePerson,
  addPerson,
} = require("./controller");
require("express-async-errors");

router.route("/").get(getPeople).post(addPerson);

router.route("/:id").put(editPerson).delete(deletePerson);

module.exports = router;
