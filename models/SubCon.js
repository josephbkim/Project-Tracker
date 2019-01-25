const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const SubCon = new Schema({
  name: String,
  trade: String
});

module.exports = mongoose.model("SubCon", SubCon);
