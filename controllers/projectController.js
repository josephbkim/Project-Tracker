const Project = require("../models/Project");

const projectController = {
  index: (req, res) => {
    Project.find({}).then(projects => {
      res.send(projects);
    });
  }
};

module.exports = projectController;
