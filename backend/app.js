var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var teamsRouter = require("./routes/teams");
var fixtureRouter = require("./routes/fixture");
var refereeRouter = require("./routes/referee");
var matchRouter = require("./routes/match");
var notificationsRouter = require("./routes/notifications");
var scoresRouter = require("./routes/scores");
var faqRouter = require("./routes/faq")

var app = express();

var cors = require("cors");
// var allowedOrigins = [
//     "http://localhost:3000",
//     "http://localhost:3001",
//     "*",
//     "https://refereeassigmentsystem.vercel.app",
//     "https://referee-assignment-system-backend.vercel.app",
// ];
app.use(
    cors({
        credentials: true,
        origin: "*",

        // origin: function (origin, callback) {
        //     // Allow requests with no origin (mobile apps, curl)
        //     if (!origin) return callback(null, true);
        //     if (allowedOrigins.indexOf(origin) === -1) {
        //         var msg =
        //             "The CORS policy does not allow access from the specified Origin.";
        //         return callback(new Error(msg), false);
        //     }
        //     return callback(null, true);
        // },
    })
);

// MongoDB connection
var mongoose = require("mongoose");
var mongoDB =
    "mongodb+srv://admin:sabanci308@referee-assignment.y0lge4p.mongodb.net/db?retryWrites=true&w=majority";

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on(
    "error",
    console.error.bind(console, "Error while connectiong to the database")
);

//app functions
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/teams", teamsRouter);
app.use("/fixture", fixtureRouter);
app.use("/referees", refereeRouter);
app.use("/match", matchRouter);
app.use("/notifications", notificationsRouter);
app.use("/scores", scoresRouter);
app.use("/faq", faqRouter)

module.exports = db;
module.exports = app;
