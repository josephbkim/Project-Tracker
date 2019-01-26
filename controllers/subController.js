const Project = require("../models/Project");
const SubCon = require("../models/SubCon");

const subController = {
  index: (req, res) => {
    let proId = req.params.projectId;
    Project.findById(proId)
      .populate("subcon")
      .then(project => {
        console.log();
        res.send(project.subcon);
      });
  }
};

module.exports = subController;
