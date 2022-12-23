const matchModel = require("../model/matchModel");
const teamModel = require("../model/teamModel");

module.exports = {
    getMatches: (req, res) => {
        matchModel.find({}).exec(function (err, data) {
            return res.send({
                matches: data,
            });
        });
    },
    getMatchById: (req, res) => {
        const {} = req.body;

        return res.send({
            match: {
                team1: "Fenerbahçe",
                logo1: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png",
                team2: "Galatasaray",
                logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                date: "6.11.2002 20:00",
                referee: "Mustafa Çulcu",
                team1Goals: 6,
                team2Goals: 0,
                team1Coach: "Werner Lorant",
                team2Coach: "Fatih Terim",
            },
        });
    },
    addMatch: async (req, res) => {
        const { match } = req.body;
        try {
            const team1Found = await teamModel.findOne({ name: match.team1 });
            const team2Found = await teamModel.findOne({ name: match.team2 });
            const matchToAdd = {
                ...match,
                logo1: team1Found.image,
                logo2: team2Found.image,
            };
            console.log(match);
            const newMatch = new matchModel(matchToAdd);
            newMatch.save((err, match) => {
                if (err) {
                    return res.send({
                        message: "Error when adding the match",
                    });
                }
                return res.status(201).send({
                    message: "MatchAdd is succesful",
                });
            });
        } catch (err) {
            console.error(err);
            return res.status(201).send({
                message: "Match could not be added",
            });
        }
    },
};
