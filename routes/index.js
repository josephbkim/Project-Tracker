const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/api/projects", projectController.index);

module.exports = router;
