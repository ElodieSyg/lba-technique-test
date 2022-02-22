const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true},
    rating: { type: Number, required: true },
    warranty_years: { type: Number, required: true },
    available: { type: Boolean, requierd: true },
    userId: { type: mongoose.Types.ObjectId, ref: "user"},
});

module.export =
    mongoose.models.Products ||
    mongoose.model("Products", ProductSchema);
    