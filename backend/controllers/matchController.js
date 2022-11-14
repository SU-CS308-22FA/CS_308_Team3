module.exports = {

  getMatchById: (req, res) => {
    const {} = req.body;

    return res.send({
      match: 
        {
          team1: "Fenerbahçe",
          logo1: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Fenerbah%C3%A7elogo.png",
          team2: "Galatasaray",
          logo2: "https://upload.wikimedia.org/wikipedia/commons/3/37/Galatasaray_Star_Logo.png",
          date: "6.11.2002 20:00",
          referee: "Mustafa Çulcu",
          team1Goals: 6,
          team2Goals: 0,
          team1Coach: "Werner Lorant",
          team2Coach: "Fatih Terim"
        },
      
    });
  },
}