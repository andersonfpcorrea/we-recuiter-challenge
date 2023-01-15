const Person = require('./model');

const controllerFactory = (Model, action, useReqBody) => async (req, res) => {
  const personData = req.body;
  const { id } = req.params;
  const { data, status } = id
    ? useReqBody
      ? await Model[action](id, personData)
      : await Model[action](id)
    : await Model[action];
  res.status(status).json(data);
};

exports.getPeople = controllerFactory(Person, 'find');

exports.getPerson = controllerFactory(Person, 'findById');

exports.editPerson = controllerFactory(Person, 'findByIdAndUpdate', true);

exports.deletePerson = controllerFactory(Person, 'findByIdAndDelete');
