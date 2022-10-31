module.exports = {
    login: () => {},
    list: (req, res) => {
        const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({ teams: ["Fenerbahçe", "Galatasaray", "BJK"] });
    },
    logout: () => {},
    update: () => {},
    remove: () => {},
};
