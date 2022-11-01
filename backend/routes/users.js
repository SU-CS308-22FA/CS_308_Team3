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
router.post("/logout", userController.logout);
router.post("/changePassword", userController.updatePassword);
router.post("/updateProfile", userController.updateProfile);
router.post("/deleteAccount", userController.delete);

/*
 * PUT
 */
//router.put("/:id", userController.update);

/*
 * DELETE
 */

module.exports = router;
