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
  },
  show: (req, res) => {
    let subId = req.params.subId;
    SubCon.findById(subId).then(sub => {
      res.send(sub);
    });
  },
  create: (req, res) => {
    let proId = req.params.projectId;
    Project.findById(proId).then(project => {
      SubCon.create(req.body).then(newSub => {
        project.subcon.push(newSub);
        project.save();
        res.send(newSub);
      });
    });
  },
  update: (req, res) => {
    let subId = req.params.subId;
    SubCon.findByIdAndUpdate(subId, req.body, { new: true }).then(
      updatedSub => {
        updatedSub.save();
        res.send(updatedSub);
      }
    );
  }
};

module.exports = subController;
