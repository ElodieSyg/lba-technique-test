const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
// MODELS IMPORTATIONS
const User = require("../../model/User");

router.route("/")
    .post(async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });

            if (!user) throw new Error("User not found");

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) throw new Error("Invalid credentials");

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

            res.cookie("jwt", token, { httpOnly: true, secure: false });

            res.status(200).json({
                status: "Success",
                message: "Here is your cookie for subsequent requests",
                user,
            });
        } catch (error) {
            if (error === "User not found") {
                return res.status(404).json({
                    status: "Fail",
                    error,
                });
            };
            if (error === "Invalid email or password") {
                return res.status(401).json({
                    status: "Fail",
                    error,
                });
            };
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    });

module.exports = router;