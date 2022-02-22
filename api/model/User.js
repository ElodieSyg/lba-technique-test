const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    productsArray: { type: Array },
});

module.exports =
    mongoose.models.Users ||
    mongoose.model("Users", UserSchema);
    