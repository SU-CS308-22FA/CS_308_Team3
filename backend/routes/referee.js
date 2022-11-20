var express = require("express");
var router = express.Router();
var refereeController = require("../controllers/refereeController.js");

/*
 * GET
 */
router.get("/list", refereeController.list);
router.get("/:name", refereeController.refereeDetails);

/*
 * POST
 */
//router.post("/signup", teamController.signup);
router.post("/refereeAdd", refereeController.refereeAdd);

/*
 * PUT
 */

/*
 * DELETE
 */
// router.delete("/:id", teamController.remove);

module.exports = router;
