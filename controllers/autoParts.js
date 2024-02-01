const AutoPart = require("../models/autoParts");
const { controllerWrapper, HttpError } = require("../helpers");

// отримання списку всіх запчастин
const getListAutoParts = async (req, res) => {
  const result = await AutoPart.find();
  res.json(result);
};

// отримання запчастини по id. В якості id буде зазначено каталожний номер запчастини
const getAutoPartsId = async (req, res) => {
  const { autoPartId } = req.params;
  const result = await AutoPart.findById(autoPartId);

  if (!result) {
    throw HttpError(404, "AutoPart not found");
  }
};

module.exports = {
  getListAutoParts: controllerWrapper(getListAutoParts),
  getAutoPartsId: controllerWrapper(getAutoPartsId),
};
