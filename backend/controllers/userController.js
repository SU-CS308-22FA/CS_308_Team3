module.exports = {
    login: () => {},
    signup: (req, res) => {
        console.log(JSON.stringify(req.body, null, 2));
        return res.send({ message: "succesful" });
    },
    logout: () => {},
    update: () => {},
    remove: () => {},
};
