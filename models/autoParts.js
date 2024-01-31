const { Schema, model } = require("monggose");
const { handleMongooseError } = require("../helpers/");

const JohnDeereSchema = new Schema();

JohnDeereSchema.post("save", handleMongooseError);

const AutoPart = model("äutoPart", JohnDeereSchema);

module.exports = AutoPart;
