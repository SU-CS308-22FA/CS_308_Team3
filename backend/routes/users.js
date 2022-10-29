var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController.js");

/*
 * GET
 */
router.get("/", userController.list);
router.get("/teams", userController.profile);
router.get("/referees", userController.logout);

/*
 * POST
 */
router.post("/signup", userController.signup);
router.post("/login", userController.login);

/*
 * PUT
 */
router.put("/teams:id", userController.update);
router.put("/referees:id", userController.update);

/*
 * DELETE
 */
router.delete("/:id", userController.remove);

module.exports = router;
