const express = require("express");
const router = express.Router();
// MODELS IMPORTATIONS
const Product = require("../../model/Product");

router.route("/")
    .get(async (_req, res) => {
        try {
            const products = await Product.find({});

            if (!products) {
                return res.status(404).json({
                    products: [],
                });
            };

            return res.status(200).json({
                status: "Success",
                products,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    })
    .post(async (req, res) => {
        console.log("post")
        const { name, type, price, rating, warranty_years, available } = req.body;
        try {
            const newProduct = await Product.create({ name, type, price, rating, warranty_years, available });
            return res.status(201).json({
                status: "Success",
                message: "Product succefully created",
                newProduct,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    });

router.route("/id")
    .get(async (req, res) => {
        const { id } = req.params;
        console.log("id", id);
        try {
            const product = await Product.findById({ _id: id });

            if (!product) throw new Error("Product not found");

            return res.status(200).json({
                status: "Success",
                product,
            });
        } catch (error) {
            if (error === "Product not found") {
                return res.status(404).json({
                    status: "Fail",
                    error,
                });
            };
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    })
    .patch(async (req, res) => {
        const { id } = req.params;
        const { name, type, price, rating, warranty_years, available } = req.body;
        console.log("id", id);
        console.log("body", name, type, price, rating, warranty_years, available);
        try {
            const product = await Product.findByIdAndUpdate({ _id: id }, { name, type, price, rating, warranty_years, available });
            console.log("product", product);
            return res.status(200).json({
                status: "Success",
                message: "Product succefully updated",
            });
        } catch (error) {
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        console.log("id", id);

        try {
            const product = await Product.findByIdAndDelete({ _id: id });
            console.log("product", product);
            return res.status(200).json({
                status: "Success",
                message: "Product succefully deleted",
            });
        } catch (error) {
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    });

module.exports = router;