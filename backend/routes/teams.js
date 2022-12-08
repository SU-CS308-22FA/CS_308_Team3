var express = require("express");
var router = express.Router();
var teamController = require("../controllers/teamController.js");

/*
 * GET
 */
router.get("/list", teamController.list);
router.get("/teamsList", teamController.teamsList);
router.get("/:id", teamController.getTeam);

/*
 * POST
 */
router.post("/editTeam/:id", teamController.editTeam);
router.post("/addTeam", teamController.addTeam);
router.post("/removeTeam/:id", teamController.removeTeam);

/*
 * PUT
 */
// router.put("/:id", teamController.update);

/*
 * DELETE
 */
// router.delete("/:id", teamController.remove);

module.exports = router;
