const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const subController = require("../controllers/subController");

router.get("/api/projects", projectController.index);
router.post("/api/projects/addproject", projectController.create);
router.get("/api/projects/:projectId", projectController.show);
router.put("/api/projects/:projectId", projectController.update);
router.delete("/api/projects/:projectId", projectController.delete);

router.get("/api/projects/:projectId/subs", subController.index);
router.post("/api/projects/:projectId/subs", subController.create);
router.get("/api/projects/:projectId/subs/:subId", subController.show);
router.put("/api/projects/:projectId/subs/:subId", subController.update);
router.delete("/api/projects/:projectId/subs/:subId", subController.delete);

module.exports = router;
