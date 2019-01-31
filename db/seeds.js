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
  proImg: "https://i.imgur.com/v92xzvt.png",
  startDate: "1/12/2018",
  subcon: [eCon1, fCon1]
});
const project2 = new Project({
  name: "Kwik-E-Mart",
  proImg: "https://nerdgeistdotcom.files.wordpress.com/2015/03/kwik-e-mart.png",
  startDate: "2/18/1990",
  subcon: []
});
const project3 = new Project({
  name: "Mango Six",
  proImg: "https://i.imgur.com/nSDM45Y.jpg",
  startDate: "5/23/2014",
  subcon: []
});
const project4 = new Project({
  name: "Fresh Point",
  proImg: "https://i.imgur.com/bLSpNtd.jpg",
  startDate: "6/16/2016",
  subcon: []
});
const project5 = new Project({
  name: "Green Olive",
  proImg: "https://i.imgur.com/0YVJ48n.jpg",
  startDate: "11/20/2017",
  subcon: []
});

Project.remove({})
  .then(() => SubCon.insertMany([eCon1, fCon1]))
  .then(() => project1.save())
  .then(() => project2.save())
  .then(() => project3.save())
  .then(() => project4.save())
  .then(() => project5.save())
  .then(() => console.log("Donezo"))
  .then(() => mongoose.connection.close());
