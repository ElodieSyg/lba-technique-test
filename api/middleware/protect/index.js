const jwt = require("jsonwebtoken");

function protect(req, res, next) {
    console.log("inside protect middleware")
    try {
        const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        console.log("data", data)
        req.cookies.jwtData = data;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Your token is not valid",
        });
    };
};

module.exports = protect;