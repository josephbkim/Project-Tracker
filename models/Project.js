const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Project = new Schema({
  name: String,
  proImg: String,
  startDate: Date,
  subcon: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubCon"
    }
  ]
});

module.exports = mongoose.model("Project", Project);
