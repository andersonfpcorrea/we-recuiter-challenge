function controllerFactory(Model, action, useReqBody = false) {
  return async (req, res) => {
    const personData = req.body;
    const { id } = req.params;
    const data = id
      ? useReqBody
        ? await Model[action](id, personData)
        : await Model[action](id)
      : await Model[action]();
    const stat = () => {
      if (
        action === "find" ||
        action === "findById" ||
        action === "findByIdAndUpdate"
      ) {
        return 200;
      }
      return 202;
    };
    return res.status(stat()).json(data);
  };
}

module.exports = controllerFactory;
