const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    surname: String,
    userType: String,
    age: Number,
});

const userModel = mongoose.model("leadership", userSchema);
export default userModel;
