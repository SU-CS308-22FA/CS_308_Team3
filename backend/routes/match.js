var express = require("express");
const matchController = require("../controllers/matchController.js");
var router = express.Router();

/*
  GET
*/
router.get("/", matchController.getMatches);
router.get("/referees", matchController.getMatchById);

/*
  POST
*/
router.post("/addmatch", matchController.addMatch);

module.exports = router;
