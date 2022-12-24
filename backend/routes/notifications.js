var express = require("express");
var router = express.Router();
var notificationsController = require("../controllers/notificationsController.js");

/*
 * GET
 */
router.get("/list", notificationsController.list);

/*
 * POST
 */
//router.post("/signup", teamController.signup);
router.post("/notificationAdd", notificationsController.notificationAdd);

/*
 * DELETE
 */
router.delete("/:NotificationHeader", notificationsController.remove);

module.exports = router;