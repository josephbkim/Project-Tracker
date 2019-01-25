const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Project = new Schema({
  name: String,
  subcon: [
    {
      name: String,
      trade: String
    }
  ]
});

module.exports = mongoose.model("Project", Project);
