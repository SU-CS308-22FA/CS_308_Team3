var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController.js");

/*
 * GET
 */
//router.get("/", userController.list);

/*
 * POST
 */
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

/*
 * PUT
 */
router.put("/:id", userController.update);

/*
 * DELETE
 */
router.delete("/:id", userController.remove);

module.exports = router;
