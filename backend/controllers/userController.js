const userModel = require("../model/userModel");

module.exports = {
    login: function (req, res, next) {
        const { email, password } = req.body;

        userModel.authenticate(email, password, (err, user) => {
            console.log(user);
            if (err || !user) {
                // var err = new Error("Wrong username or password");
                // err.status = 401;
                // return next(err);
                return res.send({ message: "Login is unsuccesful" });
            }

            //req.session.userId = user._id;
            //res.redirect('/users/profile');
            return res.send({ user, message: "Login is succesful" });
        });
    },
    signup: (req, res) => {
        const { name, surname, email, password, teamSupported, age, gender } =
            req.body;
        console.log(JSON.stringify(req.body, null, 2));
        if (password.length < 8) {
            return res.send({ message: "Short password" });
        } else if (
            name === "" ||
            surname === "" ||
            email === "" ||
            age == null
        ) {
            return res.send({ message: "Empty fields" });
        }
        //req.session.userId = newUser._id;
        const newUser = new userModel({
            name: name,
            surname: surname,
            username: email.slice(0, email.indexOf("@")),
            email: email,
            password: password,
            teamSupported: teamSupported,
            age: age,
            gender: gender,
        });

        newUser.save((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Error when creating user",
                    error: err,
                });
            }

            return res
                .status(201)
                .send({ message: "Registration is succesful", user: user });
        });
        //return res.send({ message: "succesful" });
    },
    logout: function (req, res, next) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect("/");
                }
            });
        }
    },
    update: () => {},
    remove: () => {},
};
