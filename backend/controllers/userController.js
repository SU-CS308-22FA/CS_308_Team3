//const { db } = require("../model/userModel");
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

const TFF_emailList = [
    { email: "tff1@gmail.com" },
    { email: "tff2@gmail.com" },
    { email: "tff3@gmail.com" },
    { email: "tff4@gmail.com" },
    { email: "tff5@gmail.com" },
    { email: "tff6@gmail.com" },
];

module.exports = {
    login: function (req, res, next) {
        const { email, password } = req.body;

        userModel.authenticate(email, password, (err, user) => {
            console.log(user);
            if (err || !user) {
                return res.send({ message: "Login is unsuccesful" });
            }

            //req.session.userId = user._id;
            //res.redirect('/users/profile');
            return res.send({ user, message: "Login is succesful" });
        });
    },
    signup: async (req, res) => {
        const { name, surname, email, password, teamSupported, age, gender } =
            req.body;
        //console.log(JSON.stringify(req.body, null, 2));
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
            userType: "Fan",
        });

        TFF_emailList.some((TFFuser) => {
            if (TFFuser.email === newUser.email) {
                newUser.userType = "TFF";
                return true;
            }
        });

        try {
            // Check if the user already exists
            const userFound = await userModel.findOne({ email: email });

            if (userFound != null) {
                return res.send({
                    message: "The email is taken",
                });
            }
            // Email is not taken
            newUser.save((err, user) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error when creating user",
                        error: err,
                    });
                }
                return res.status(201).send({
                    message: "Registration is succesful",
                    user: user,
                });
            });
        } catch (err) {
            console.log(err);
        }
    },
    logout: function (req, res, next) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.send({ message: "Log out is successful" });
                }
            });
        }
        return res.send({ message: "Log out is successful" });
    },
    updatePassword: (req, res, next) => {
        const { user, oldPassword, newPassword } = req.body;
        //console.log(req.body);
        const { email } = user;
        console.log(email);
        const newUser = { ...user, password: newPassword };
        try {
            userModel.findOneAndUpdate(
                { email },
                newUser,
                { upsert: true },
                function (err, userFound) {
                    if (err) {
                        //console.log(err);
                        return res.send({ message: "There is an error" });
                    } else if (!userFound) {
                        //console.log("User not found");
                        return res.send({ message: "There is an error" });
                    }
                    // User is found
                    console.log(userFound);

                    // Compare the old password given to authorize
                    bcrypt.compare(
                        oldPassword,
                        userFound.password,
                        function (err, result) {
                            if (result === true) {
                                return res.send({
                                    message: "Password has been changed",
                                });
                            } else {
                                return res.send({
                                    message: "Password is wrong",
                                });
                            }
                        }
                    );
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    updateProfile: (req, res, next) => {
        const { _id, newProfile } = req.body;
        userModel.findByIdAndUpdate(
            _id,
            newProfile,
            { upsert: true },
            function (err, userFound) {
                if (err) {
                    console.log(err);
                    return res.send({ message: "There is an error" });
                } else if (!userFound) {
                    console.log("User not found");

                    return res.send({ message: "There is an error" });
                }
                // User is found
                //console.log({ userFound });
                return res.send({ message: "Update is successful" });
            }
        );
    },
    delete: (req, res, next) => {
        const { _id } = req.body;
        console.log(_id);
        userModel
            .deleteOne({ _id })
            .then(({ deletedCount }) => {
                console.log({ _id: [_id] });
                console.log({ _id: _id });
                console.log(deletedCount);
                if (deletedCount === 1)
                    res.send({ message: "Account is deleted" });
                else res.send({ message: "Error on account delete" });
            })
            .catch((err) => console.log(err));
    },
};
