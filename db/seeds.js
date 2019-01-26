require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Project = require("../models/Project");
const SubCon = require("../models/SubCon");

const eCon1 = new SubCon({
  name: "Precise Electric",
  trade: "Electrical"
});

const fCon1 = new SubCon({
  name: "Quick Construction",
  trade: "Framing"
});

const project1 = new Project({
  name: "Tutti",
  subcon: [eCon1, fCon1]
});
const project2 = new Project({
  name: "Quick Mart",
  subcon: []
});

Project.remove({})
  .then(() => SubCon.insertMany([eCon1, fCon1]))
  .then(() => project1.save())
  .then(() => project2.save())
  .then(() => console.log("Donezo"))
  .then(() => mongoose.connection.close());
