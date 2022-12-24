var express = require("express");
var router = express.Router();
var scoresController = require("../controllers/scoresController.js");

/*
 * GET
 */
router.get("/list", scoresController.list);

/*
 * POST
 */
//router.post("/signup", teamController.signup);

/*
 * DELETE
 */

module.exports = router;