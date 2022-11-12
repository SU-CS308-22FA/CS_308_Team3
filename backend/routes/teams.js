var express = require("express");
var router = express.Router();
var teamController = require("../controllers/teamController.js");

/*
 * GET
 */
router.get("/list", teamController.list);
router.get("/teamsList", teamController.teamsList);

/*
 * POST
 */
//router.post("/signup", teamController.signup);

/*
 * PUT
 */
// router.put("/:id", teamController.update);

/*
 * DELETE
 */
// router.delete("/:id", teamController.remove);

module.exports = router;
