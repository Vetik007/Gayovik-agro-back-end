const AutoPart = require("../models/autoParts");
const { controllerWrapper } = require("../helpers");

const getListAutoParts = async (req, res) => {
  const result = await AutoPart.find();
  res.json(result);
};

module.exports = {
  getListAutoParts: controllerWrapper(getListAutoParts),
};
