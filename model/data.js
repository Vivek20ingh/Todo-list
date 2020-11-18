const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todo = new Schema({
    item:String
})
module.exports = mongoose.model("Todo",todo);