var express = require("express");
const matchController = require("../controllers/matchController.js");
var router = express.Router();

/*
  GET
*/
router.get("/", matchController.getMatches);
router.get("/:week", matchController.getMatchesByWeek);
router.get("/referees", matchController.getMatchById);

/*
  POST
*/
router.post("/addmatch", matchController.addMatch);
router.post("/addcomment", matchController.addComment);
router.post("/vote", matchController.voteWinner);

module.exports = router;
