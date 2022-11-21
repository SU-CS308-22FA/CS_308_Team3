module.exports = {
    login: () => {},
    list: (req, res) => {
        const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({
            matches: [
                {
                    team1: "FENERBAHÇE",
                    logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
                    team2: "GALATASARAY",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "BEŞİKTAŞ",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
                    team2: "TRABZONSPOR",
                    logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
                    date: "11.11.2022 20:00",
                    referee: "",
                },
                {
                    team1: "KONYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20101106185724",
                    date: "13.11.2022 20:00",
                    referee: "",
                },
                {
                    team1: "FENERBAHÇE",
                    logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
                    team2: "GALATASARAY",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "BEŞİKTAŞ",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
                    team2: "TRABZONSPOR",
                    logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
                    date: "11.11.2022 20:00",
                    referee: "",
                },
                {
                    team1: "FENERBAHÇE",
                    logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
                    team2: "GALATASARAY",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "BEŞİKTAŞ",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
                    team2: "TRABZONSPOR",
                    logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
                    date: "11.11.2022 20:00",
                    referee: "",
                },
            ],
        });
    },
};
