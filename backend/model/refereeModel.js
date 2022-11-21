const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refereeSchema = Schema({
    name: String,
    age: Number,
    experience: Number,
    license: String,
    hometown: String,
    gender: String,
    image: Object,
    last3Matches: Array,
    score: Number,
});

const refereeModel = mongoose.model("referees", refereeSchema);
module.exports = refereeModel;
