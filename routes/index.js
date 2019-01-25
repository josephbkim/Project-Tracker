const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/api/projects", projectController.index);
router.post("/api/projects", projectController.create);
router.get("/api/projects/:projectId", projectController.show);
router.put("/api/projects/:projectId", projectController.update);
router.delete("/api/projects/:projectId", projectController.delete);

module.exports = router;
