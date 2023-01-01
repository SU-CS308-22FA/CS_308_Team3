const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = Schema({
    team1: String,
    logo1: String,
    team2: String,
    logo2: String,
    referee: String,
    date: String,
    time: String,
    week: Number,
    stadium: String,
    comments: Array,
    team1Win: Number,
    team2Win: Number,
    drawNumber: Number,
});

const teamModel = mongoose.model("matches", matchSchema);
module.exports = teamModel;
