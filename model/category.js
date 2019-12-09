const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryScheme = new Schema({
    name: String,
    age: Number
});

exports.module = categoryScheme

