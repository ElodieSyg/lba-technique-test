const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    rating: { type: Number },
    warranty_years: { type: Number },
    available: { type: Boolean },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
