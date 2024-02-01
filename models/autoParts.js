const { Schema, model } = require("monggose");
const { handleMongooseError } = require("../helpers/");

const JohnDeereSchema = new Schema();

JohnDeereSchema.post("save", handleMongooseError);

const AutoPart = model("autoPart", JohnDeereSchema);

module.exports = AutoPart;
