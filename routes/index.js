const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/api/projects", projectController.index);
router.get("/api/projects/:projectId", projectController.show);

module.exports = router;
