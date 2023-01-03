const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    teamSupported: String,
    userType: String,
    age: Number,
    gender: String,
    favourite: String,
});

userSchema.statics.authenticate = function (email, password, callback) {
    userModel.findOne({ email }).exec(function (err, user) {
        if (err) {
            //console.log("There is an error for login");
            return callback(err);
        } else if (!user) {
            //console.log("User not found");
            var err = new Error("User not found.");
            err.status = 401;
            return callback(err);
        }
        console.log(`${password}\n \n${user.password}`);
        bcrypt.compare(password, user.password, function (err, result) {
            if (result === true) {
                console.log("true password");
                return callback(null, user);
            } else {
                console.log("wrong password");
                return callback();
            }
        });
    });
};

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
