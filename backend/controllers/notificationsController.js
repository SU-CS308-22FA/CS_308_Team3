const notificationModel = require("../model/notificationModel");

module.exports = {
  list: (req, res) => {
    const { } = req.body;
    notificationModel.find({}).exec(function (err, data) {
        // console.log(refs);
        return res.send({
            notifications: data,
        });
    });
  },
  notificationAdd: async (req, res) => {
    const { NotificationHeader, NotificationContent } = req.body;

    const newNotification = new notificationModel({
        NotificationHeader: NotificationHeader,
        NotificationContent: NotificationContent,
    });
    try {
        newNotification.save((err, user) => {
            if (err) {
                return res.send({
                    message: "Error when adding the notification",
                });
            }
            return res.status(201).send({
                message: "NotificationAdd is succesful",
                user: user,
            });
        });
    } catch (err) {
        console.log(err);
    }
},

}