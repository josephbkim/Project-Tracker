const Project = require("../models/Project");

const projectController = {
  index: (req, res) => {
    Project.find({}).then(projects => {
      res.send(projects);
    });
  },
  show: (req, res) => {
    Project.findById(req.params.projectId)
      .populate("subcon")
      .then(project => {
        res.send(project);
      });
  }
};

module.exports = projectController;
