const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
// MODELS IMPORTATIONS
const User = require("../model/User");

router.route("/")
    .post(async (req, res) => {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        try {
            const newUser = await User.create({ email, password: hashedPassword });
            res.status(201).json({
                status: "Success",
                message: "User succefully created",
                data: newUser,
            });
        } catch (error) {
            res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    });

module.exports = router;