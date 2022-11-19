const refereeModel = require("../model/refereeModel");

module.exports = {
    list: (req, res) => {
        const {} = req.body;
        const refs = [
            {
                name: "Cüneyt Çakır",
                age: 45,
                exp: 12,
                licence: "FIFA",
                hometown: "İstanbul",
                score: 7.5,
                image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
                last3Matches: [
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                ],
            },
            {
                name: "Cüneyt Çakır2",
                age: 45,
                exp: 12,
                licence: "FIFA",
                hometown: "İstanbul",
                score: 7.5,
                image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
                last3Matches: [
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                ],
            },
            {
                name: "Cüneyt Çakır3",
                age: 45,
                exp: 12,
                licence: "FIFA",
                hometown: "İstanbul",
                score: 7.5,
                image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
                last3Matches: [
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                ],
            },
            {
                name: "Cüneyt Çakır4",
                age: 45,
                exp: 12,
                licence: "FIFA",
                hometown: "İstanbul",
                score: 7.5,
                image: "https://img.a.transfermarkt.technology/portrait/header/351-1526478925.jpg?lm=1",
                last3Matches: [
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                    {
                        team1: "CORENDON ALANYASPOR",
                        logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        team2: "ADANA DEMİRSPOR A.Ş.",
                        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                        date: "12.11.2022 20:00",
                        referee: "Cüneyt Çakır",
                    },
                ],
            },
        ];
        refereeModel.find({}).exec(function (err, data) {
            // console.log(data);
            refs.push(...data);
            // console.log(refs);
            console.log(refs);
            return res.send({
                referees: refs,
            });
        });
    },
    teamsList: (req, res) => {
        return res.send({
            referees: [],
        });
    },
    update: () => {},
    remove: () => {},
    refereeAdd: async (req, res) => {
        const { name, age, experience, licence, hometown, image } = req.body;

        //req.session.userId = newUser._id;
        const newReferee = new refereeModel({
            name: name,
            age: age,
            experience: experience,
            licence: licence,
            gender: "Male",
            hometown: hometown,
            image: image,
            last3Matches: null,
        });
        try {
            // Check if the user already exists
            const refereeFound = await refereeModel.findOne({ name: name });

            if (refereeFound != null) {
                return res.send({
                    message: "The referee is already added",
                });
            }
            // Email is not taken
            newReferee.save((err, user) => {
                if (err) {
                    return res.send({
                        message: "Error when adding the referee",
                    });
                }
                return res.status(201).send({
                    message: "RefereAdd is succesful",
                    user: user,
                });
            });
        } catch (err) {
            console.log(err);
        }
    },
};
