const refereeModel = require("../model/refereeModel");
const matchModel = require("../model/matchModel");

var matches = [
    {
        id: 0,
        team1: "SİVASSPOR",
        logo1: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/1200px-Sivasspor_logo.svg.png",
        team2: "HATAYSPOR",
        logo2: "https://upload.wikimedia.org/wikipedia/tr/0/08/Hatayspor.png",
        date: "15.11.2022 20:00",
        referee: "Cüneyt Çakır",
        team1Goals: 1,
        team2Goals: 1,
        team1Coach: "Jorge Jesus",
        team2Coach: "Okan Buruk",
    },
    {
        id: 1,
        team1: "KONYASPOR",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
        team2: "ANKARAGÜCÜ",
        logo2: "https://ankaragucu.org.tr/wp-content/uploads/2018/06/MKE_Ankarag%C3%BCc%C3%BC_logo.png",
        date: "15.11.2022 17:00",
        referee: "",
        team1Goals: undefined,
        team2Goals: undefined,
        team1Coach: "İlhan palut",
        team2Coach: "Ömer Erdoğan",
    },
    {
        id: 2,
        team1: "TRABZONSPOR",
        logo1: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
        team2: "BEŞIKTAŞ",
        logo2: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
        date: "17.11.2022 21:00",
        referee: "Mete Kalkavan",
        team1Goals: 2,
        team2Goals: 3,
        team1Coach: "Abdullah Avcı",
        team2Coach: "Şenol Güneş",
    },
    {
        id: 3,
        team1: "FATIH KARAGÜMRÜK",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/9/90/Fatihkaragumruk.png",
        team2: "ANTALYASPOR",
        logo2: "https://upload.wikimedia.org/wikipedia/tr/b/b9/Antalyaspor_logo.png",
        date: "6.12.2022 19:00",
        referee: "Erkan Özdamar",
        team1Goals: 0,
        team2Goals: 2,
        team1Coach: "Andrea Pirlo",
        team2Coach: "Nuri Şahin",
    },
    {
        id: 4,
        team1: "KASIMPAŞA SPOR KULÜBÜ",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/6/68/Kasimpasa_2012.png",
        team2: "ALANYASPOR",
        logo2: "https://upload.wikimedia.org/wikipedia/tr/2/29/Alanyaspor_logo.png",
        date: "16.11.2022 18:00",
        referee: "",
        team1Goals: undefined,
        team2Goals: undefined,
        team1Coach: "Şenol Can",
        team2Coach: "Francesco Farioli",
    },
    {
        id: 5,
        team1: "ADANA DEMIRSPOR",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20111116185724",
        team2: "BAŞAKŞEHIR",
        logo2: "http://www.futbollogo.com/resimler/logolar/istanbulbasaksehir.png",
        date: "24.11.2022 20:00",
        referee: "",
        team1Goals: undefined,
        team2Goals: undefined,
        team1Coach: "Vincenzo Montella",
        team2Coach: "Emre Belözoğlu",
    },
    {
        id: 6,
        team1: "FENERBAHÇE",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211102193712",
        team2: "GALATASARAY",
        logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
        date: "3.11.2022 19:00",
        referee: "Cüneyt Çakır",
        team1Goals: 1,
        team2Goals: 1,
        team1Coach: "Jorge Jesus",
        team2Coach: "Okan Buruk",
    },
    {
        id: 7,
        team1: "GİRESUNSPOR",
        logo1: "https://upload.wikimedia.org/wikipedia/tr/c/c1/Giresunspor.png",
        team2: "İSTANBULSPOR",
        logo2: "https://upload.wikimedia.org/wikipedia/tr/e/ed/IstanbulsporAS.png",
        date: "9.11.2022 16:00",
        referee: "",
        team1Goals: undefined,
        team2Goals: undefined,
        team1Coach: "İlhan palut",
        team2Coach: "Ömer Erdoğan",
    },
    {
        id: 8,
        team1: "KAYSERİSPOR",
        logo1: "https://tmssl.akamaized.net/images/wappen/head/3205.png?lm=1520239955",
        team2: "ÜMRANİYESPOR",
        logo2: "https://upload.wikimedia.org/wikipedia/tr/7/75/%C3%9Cmraniyespor_Logosu.png",
        date: "17.11.2022 22:00",
        referee: "Mete Kalkavan",
        team1Goals: 2,
        team2Goals: 3,
        team1Coach: "Abdullah Avcı",
        team2Coach: "Şenol Güneş",
    },
];

module.exports = {
    login: () => {},
    list: (req, res) => {
        const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({
            matches: matches,
        });
    },
    getMatch: async (req, res) => {
        const { id } = req.params;
        //console.log(JSON.stringify(req.body, null, 2));
        const matchFound = await matchModel.findOne({ _id: id });
        return res.send({
            match: matchFound,
        });
    },
    getRefereeAndList: (req, res) => {
        const { id } = req.params;

        try {
            refereeModel.find({}).exec(function (err, data) {
                // console.log(refs);
                return res.send({
                    // referee: matches[id].referee,
                    list: data.map((d) => d.name),
                });
            });
        } catch (err) {
            console.error(err);
        }
    },
    updateReferee: async (req, res) => {
        // update this code for mongodb
        const { id } = req.params;
        const { referee } = req.body;
        try {
            if (typeof referee != "string") {
                return res.status(400).send("Bad referee parameter");
            }
            const result = await matchModel.updateOne(
                { _id: id },
                {
                    referee: referee,
                }
            );
            if (result.acknowledged === false) {
                return res.status(400).send("Referee could not be updated");
            }
            return res.send("Updated successfully");
        } catch (err) {
            return res.status(400).send("Referee could not be updated");
        }
    },
};

// matches: [
//     {
//         team1: "FENERBAHÇE",
//         logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211102193712",
//         team2: "GALATASARAY",
//         logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
//         date: "12.11.2022 20:00",
//         referee: "Ali Palabıyık",
//     },
//     {
//         team1: "BEŞİKTAŞ",
//         logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
//         team2: "TRABZONSPOR",
//         logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
//         date: "11.11.2022 20:00",
//         referee: "",
//     },
//     {
//         team1: "KONYASPOR",
//         logo1: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
//         team2: "ADANA DEMİRSPOR A.Ş.",
//         logo2: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20111116185724",
//         date: "13.11.2022 20:00",
//         referee: "",
//     },
//     {
//         team1: "FENERBAHÇE",
//         logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211102193712",
//         team2: "GALATASARAY",
//         logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
//         date: "12.11.2022 20:00",
//         referee: "Ali Palabıyık",
//     },
//     {
//         team1: "BEŞİKTAŞ",
//         logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
//         team2: "TRABZONSPOR",
//         logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
//         date: "11.11.2022 20:00",
//         referee: "",
//     },
//     {
//         team1: "FENERBAHÇE",
//         logo1: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211102193712",
//         team2: "GALATASARAY",
//         logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
//         date: "12.11.2022 20:00",
//         referee: "Ali Palabıyık",
//     },
//     {
//         team1: "BEŞİKTAŞ",
//         logo1: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
//         team2: "TRABZONSPOR",
//         logo2: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
//         date: "11.11.2022 20:00",
//         referee: "",
//     },
// ],
