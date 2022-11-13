module.exports = {
    login: () => {},
    list: (req, res) => {
        const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({
            matches: [
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 20:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "11.11.2022 20:00",
                    referee: "",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "13.11.2022 20:00",
                    referee: "",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "14.11.2022 20:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "11.11.2022 19:00",
                    referee: "",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "11.11.2022 16:00",
                    referee: "",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "12.11.2022 18:00",
                    referee: "Ali Palabıyık",
                },
                {
                    team1: "CORENDON ALANYASPOR",
                    logo1: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    team2: "ADANA DEMİRSPOR A.Ş.",
                    logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
                    date: "16.10.2022 18:00",
                    referee: "Ali Palabıyık",
                },
            ],
        });
    },
};
