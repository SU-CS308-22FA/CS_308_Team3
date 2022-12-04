const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = Schema({
    name: String,
    manager: String,
    trophies: Number,
    players: Array,
    anthem: String,
    alt: String,
});

const teamModel = mongoose.model("teams", teamSchema);
module.exports = teamModel;
