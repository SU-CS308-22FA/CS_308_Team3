var express = require("express");
var router = express.Router();
var refereeController = require("../controllers/refereeController.js");

/*
 * GET
 */
router.get("/list", refereeController.list);

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
