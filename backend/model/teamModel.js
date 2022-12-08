const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = Schema({
    name: String,
    shortName: String,
    manager: String,
    trophies: String,
    fans: String,
    yearEst: String,
    image: String,
    players: Array,
});

const teamModel = mongoose.model("teams", teamSchema);
module.exports = teamModel;
