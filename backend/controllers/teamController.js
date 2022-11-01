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
    logout: () => {},
    update: () => {},
    remove: () => {},
};
