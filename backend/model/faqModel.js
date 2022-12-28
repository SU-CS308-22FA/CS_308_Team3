const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = Schema({
    question: String,
    answer: String,
});

const faqModel = mongoose.model("faq", faqSchema);
module.exports = faqModel;
