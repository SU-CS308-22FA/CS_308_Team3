const refereeModel = require("../model/refereeModel");

module.exports = {
    list: (req, res) => {
        const {} = req.body;
        refereeModel.find({}).exec(function (err, data) {
            // console.log(refs);
            return res.send({
                referees: data,
            });
        });
    },
    refereeDetails: async (req, res) => {
        const { name } = req.params;

        const refereeFound = await refereeModel.findOne({ name: name });

        if (refereeFound != null)
            res.send({ referee: refereeFound, message: "Found" });
        else res.send({ message: "Not found" });
    },
    update: () => {},
    remove: () => {},
    refereeAdd: async (req, res) => {
        const { name, age, experience, license, hometown, image } = req.body;

        const newReferee = new refereeModel({
            name: name,
            age: age,
            experience: experience,
            license: license,
            gender: "Male",
            score: 5,
            hometown: hometown,
            image: image,
            last3Matches: [
                {
                    team1: "FENERBAHÇE",
                    logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
                    team2: "GALATASARAY",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Cüneyt Çakır",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "TRABZONSPOR",
                    logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
                    date: "12.11.2022 20:00",
                    referee: "Bülent Yıldırım",
                },
                {
                    team1: "BEŞİKTAŞ",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20101106185724",
                    date: "12.11.2022 20:00",
                    referee: "Mete Kalkavan",
                },
            ],
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

    compareReferees:async (req,res) => {
        const {id1, id2} = req.params;

        // if (refereeFound != null)
        //     res.send({ referee: refereeFound, message: "Found" });
        // else res.send({ message: "Not found" });

        var referee1 = await refereeModel.findOne({name: id1});
        var referee2 = await refereeModel.findOne({name: id2});


        return res.send({
            referees: [referee1, referee2]
        });


    },
};
