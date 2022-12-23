var express = require("express");
var router = express.Router();
var refereeController = require("../controllers/refereeController.js");

/*
 * GET
 */
router.get("/list", refereeController.list);
router.get("/namelist", refereeController.nameList);
router.get("/:name", refereeController.refereeDetails);
router.get("/:id1/:id2", refereeController.compareReferees);

/*
 * POST
 */
router.post("/refereeAdd", refereeController.refereeAdd);
router.post("/refereeVote", refereeController.refereeVote);

/*
 * PUT
 */

router.put("/update", refereeController.update);

/*
 * DELETE
 */
router.delete("/:name", refereeController.remove);

module.exports = router;
