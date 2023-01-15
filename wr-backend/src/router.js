const router = require('express').Router();
const { getPeople, editPerson, deletePerson } = require('./controller');

router.route('/').get(getPeople);

router.route('/:id').put(editPerson).delete(deletePerson);

module.exports = router;
