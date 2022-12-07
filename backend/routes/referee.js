var express = require("express");
var router = express.Router();
var refereeController = require("../controllers/refereeController.js");

/*
 * GET
 */
router.get("/list", refereeController.list);
router.get("/:name", refereeController.refereeDetails);
router.get("/:id1/:id2", refereeController.compareReferees);

/*
 * POST
 */
//router.post("/signup", teamController.signup);
router.post("/refereeAdd", refereeController.refereeAdd);

/*
 * PUT
 */

router.put("/update", refereeController.update);


/*
 * DELETE
 */
router.delete("/:name", refereeController.remove);

module.exports = router;
