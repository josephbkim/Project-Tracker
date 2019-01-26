const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const subController = require("../controllers/subController");

router.get("/api/projects", projectController.index);
router.post("/api/projects", projectController.create);
router.get("/api/projects/:projectId", projectController.show);
router.put("/api/projects/:projectId", projectController.update);
router.delete("/api/projects/:projectId", projectController.delete);

router.get("/api/projects/:projectId/subcontractors", subController.index);

module.exports = router;
