var express = require("express");
var router = express.Router();
var faqController = require("../controllers/faqController.js");

/*
 * GET
 */
router.get("/list", faqController.list)

/*
 * POST
 */
router.post("/faqAdd", faqController.faqAdd);
router.post("/faqDelete/:id", faqController.faqDelete);

/*
 * PUT
 */



module.exports = router;
