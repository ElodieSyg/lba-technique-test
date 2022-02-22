const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env"
});
const mongoose = require("mongoose");

mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    })
    .catch(err => {
        console.log("Database connection failed");
        console.log(err);
        process.exit;
    });

app.listen(process.env.PORT, () => {
    console.log("Server started, listening on PORT", process.env.PORT)
});