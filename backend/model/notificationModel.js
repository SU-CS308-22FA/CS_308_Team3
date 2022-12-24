const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = Schema({
  NotificationHeader: String,
  NotificationContent: String,
});

const notificationModel = mongoose.model("notifications", notificationSchema);
module.exports = notificationModel;