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
});

userSchema.statics.authenticate = function (email, password, callback) {
    userModel.findOne({ email }).exec(function (err, user) {
        console.log(user.email);
        if (err) {
            return callback(err);
        } else if (!user) {
            var err = new Error("User not found.");
            err.status = 401;
            return callback(err);
        }
        console.log(`${password}\n \n${user.password}`);
        bcrypt.compare(password, user.password, function (err, result) {
            if (result === true) {
                console.log("doru");
                return callback(null, user);
            } else {
                console.log("yanlis");
                return callback();
            }
        });
    });
};

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

// userModel.findOne({ email }).then((err, user) => {
//     if (!user) return callback(err);

//     //password comes from the user
//     //user.password comes from the database
//     bcrypt.compare(password, user.password, (err, data) => {
//         //if error than throw error
//         if (err) throw err;

//         //if both match than you can do anything
//         if (data) {
//             return callback(null, user);
//         } else {
//             return callback();
//         }
//     });
// });
