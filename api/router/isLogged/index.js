const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
// Import middleware
const protect = require("../../middleware/protect");

router.route("/")
    .get(protect, (req, res) => {
        console.log("inside is logged")
        try {
            const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

            res.json({
                status: "Success",
                isLoggedIn: true,
                data,
            });
        } catch (err) {
            console.log((err));
            res.status(400).json({
                status: "Fail",
                message: "An error happened",
            });
        };
    });

module.exports = router;