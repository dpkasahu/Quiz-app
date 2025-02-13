const express = require('express');
const connect = require("./configs/db.js");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 3755;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Fix deprecated warning

// Import Controllers
const authController = require("./controller/auth.controller.js");
const quizAddController = require("./controller/quizAdd.controller.js");
const displayQuizController = require("./controller/displayQuiz.controller.js");
const userDataController = require("./controller/userData.controller.js");

// Routes
app.use("/", authController);
app.use("/admin", quizAddController);
app.use("/quiz", displayQuizController);
app.use("/user", authController);
app.use("/userResult", userDataController);

// Check if backend is running
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start Server
app.listen(Port, async function () {
    try {
        await connect();
        console.log(`Listening on ${Port}`);
    } catch (error) {
        console.log(error); // Fix variable name
    }
});
