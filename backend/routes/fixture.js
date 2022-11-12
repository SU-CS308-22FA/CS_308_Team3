var express = require("express");
const fixtureController = require("../controllers/fixtureController.js");
var router = express.Router();

/*
 * GET
 */
router.get("/list", fixtureController.list);

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
