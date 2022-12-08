var express = require("express");
const matchController = require("../controllers/matchController.js")
var router = express.Router();

/*
  GET
*/
router.get("/get", matchController.getMatchById)
router.get("/referees", matchController.getMatchById)

module.exports = router;