const faqModel = require("../model/faqModel");

module.exports = {
    list: (req, res) => {
        faqModel.find({}).exec(function (err, data) {
            return res.send({
                faq: data,
            });
        });
    },
    remove: async (req, res) => {
        const { question } = req.params;
        const result = await faqModel.deleteOne({ faq });
        console.log(faq);
        if (result.deletedCount === 0) {
            return res.status(400).send("Delete operation failed.");
        }
    
        return res.send("Delete operation succeeded.");
    },
    faqAdd: async (req, res) => {
        const { question, answer } =
            req.body;

        const newfaq = new faqModel({
            question: question,
            answer: answer
        });
        newfaq.save((err, user) => {
            if (err) {
                return res.send({
                    message: "Error when adding the FAQ",
                });
            }
            return res.send({
                message: "FAQ add is succesful",
                user: user,
            });
        });
    },
    faqDelete: (req, res) => {
        const { id } = req.params;
        const { user } = req.body;
        if (user.userType === "TFF") {
            faqModel
                .deleteOne({ name: id })
                .then(({ deletedCount }) => {
                    console.log(deletedCount);
                    if (deletedCount === 1)
                        return res.send({ message: "FAQ is removed" });
                    else return res.send({ message: "Error on FAQ delete" });
                })
                .catch((err) => console.log(err));
        } 
         else {
            return res.send({ message: "Team delete is not successful" });
        }
    }
    
}