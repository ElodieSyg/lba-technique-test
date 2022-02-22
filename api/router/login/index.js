const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
// MIDDLEWARES IMPORTATIONS
const Protect = require("../../middleware/protect");
// MODELS IMPORTATIONS
const User = require("../../model/User");

router.route("/")
    .post(Protect, async (req, res) => {
        const { email, password } = req.body;
        console.log("body", email, password);
        try {
            const user = await User.findOne({ email });
            console.log("user", user);
            if (!user) throw new Error("User not found");

            const isPasswordValid = await bcrypt.compare(password, user.password);
            console.log("is password valid", isPasswordValid);
            if (!isPasswordValid) throw new Error("Invalid credentials");

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
            console.log("token", token);
            res.cookie("jwt", token, { httpOnly: true, secure: false });
            console.log("res cookie", res.cookie);
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