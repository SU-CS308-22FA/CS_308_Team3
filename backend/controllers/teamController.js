module.exports = {
    login: () => {},
    list: (req, res) => {
        const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({
            teams: [
                "Fenerbahçe",
                "Galatasaray",
                "Beşiktaş",
                "Adana Demirspor",
                "Trabzonspor",
                "Başakşehir",
                "Konyaspor",
                "Kayserispor",
                "Ümraniyespor",
                "İstanbulspor",
                "Giresunspor",
                "Hatayspor",
                "Sivasspor",
                "Ankaragücü",
                "Fatih Karagümrük",
                "Antalyaspor",
                "Kasımpaşa",
                "Gaziantep Futbol Kulübü",
                "Alanyaspor",
            ],
        });
    },
    teamsList: (req, res) => {
        return res.send({
            teams: [
                {
                    name: "Fenerbahçe",
                    coach: "Jorge Jesus",
                    numPlayers: 22,
                    anthem: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    alt: "asd",
                },
                {
                    name: "Fenerbahçe",
                    coach: "Jorge Jesus",
                    numPlayers: 22,
                    anthem: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    alt: "asd",
                },
                {
                    name: "Fenerbahçe",
                    coach: "Jorge Jesus",
                    numPlayers: 22,
                    anthem: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    alt: "asd",
                },
                {
                    name: "Fenerbahçe",
                    coach: "Jorge Jesus",
                    numPlayers: 22,
                    anthem: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    alt: "asd",
                },
            ],
        });
    },
    update: () => {},
    remove: () => {},
};
