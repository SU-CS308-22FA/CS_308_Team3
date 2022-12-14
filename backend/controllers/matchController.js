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
    getMatchesByWeek: (req, res) => {
        const { week } = req.params;
        try {
            matchModel.find({}).exec(function (err, data) {
                return res.send({
                    matches: data.filter((match) => match.week == week),
                });
            });
        } catch (err) {
            console.error(err);
        }
    },
    getMatchById: (req, res) => {
        const { } = req.body;

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
                comments: [],
                team1Win: 0,
                team2Win: 0,
                drawNumber: 0,
            };
            // console.log(match);
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
    addComment: async (req, res) => {
        const { _id, username, comment } = req.body;

        try {
            const matchFound = await matchModel.findOne({ _id: _id });
            const newComments = matchFound.comments;
            newComments.push({ username, comment });
            console.log(newComments);
            const result = await matchModel.updateOne(
                { _id },
                {
                    comments: newComments,
                }
            );
            if (result.acknowledged === false) {
                return res.status(400).send("Comment could not be added");
            }
            return res.send({ message: "Comment is added" });
        } catch (err) {
            console.error(err);
            res.send({ message: "Comment could not be added" });
        }
    },
    voteWinner: async (req, res) => {
        const { user, team1Win, team2Win, drawNumber, id } = req.body;
        try {
            // console.log(team1Win, team2Win, drawNumber)
            const matchFound = await matchModel.findOne({ _id: id });
            let homewinCount = matchFound.team1Win + team1Win;
            let awaywinCount = matchFound.team2Win + team2Win;
            let drawCount = matchFound.drawNumber + drawNumber;
            const result = await matchModel.updateOne(
                { _id: id },
                {
                    team1Win: homewinCount,
                    team2Win: awaywinCount,
                    drawNumber: drawCount
                }
            );
            if (result.acknowledged === false) {
                return res.status(400).send("Vote could not be given");
            }
            return res.send({ message: "Vote is given" });
        } catch (err) {
            console.error(err);
            res.send({ message: "Vote could not be given" });
        }

    },
};
