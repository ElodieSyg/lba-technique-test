// DEPENDENCIES IMPORTATIONS
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config({
    path: "./config.env"
});
const mongoose = require("mongoose");
// MIDDLEWARES IMPORTATIONS
const debug = require("./middleware/debug");

// MONGODB CONNEXTION
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

// MIDDLEWARES
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    }));
app.use(express.json());
app.use(cookieParser());
app.use(debug);

// ROUTERS
app.use("/register", require("./router/Register"));
app.use("/login", require("./router/login"));

app.listen(process.env.PORT, () => {
    console.log("Server started, listening on PORT", process.env.PORT)
});