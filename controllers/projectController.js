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
        res.send(project.subcon);
      });
  },
  create: (req, res) => {
    Project.create(req.body).then(project => {
      res.send(project);
    });
  },
  update: (req, res) => {
    Project.findByIdAndUpdate(req.params.projectId, req.body).then(project => {
      project.save();
      res.send(project);
    });
  },
  delete: (req, res) => {
    Project.findByIdAndDelete(req.params.projectId).then(project => {
      res.send(200);
    });
  }
};

module.exports = projectController;
