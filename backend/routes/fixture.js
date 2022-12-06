var express = require("express");
const fixtureController = require("../controllers/fixtureController.js");
var router = express.Router();

/*
 * GET
 */
router.get("/list", fixtureController.list);
router.get("/that", fixtureController.getMatch);
router.get("/:id/referee", fixtureController.getRefereeAndList);
router.get("/:id", fixtureController.getMatch);

router.put("/:id/referee", fixtureController.updateReferee);

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
