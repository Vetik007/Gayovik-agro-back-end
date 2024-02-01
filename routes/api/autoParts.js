const express = require("express");
const router = express.Router();

const autoPartsController = require("../../controllers/autoParts");

router.get("/", autoPartsController.getListAutoParts);

router.get("/:autoPartId", autoPartsController.getAutoPartsId);

module.exports = router;
