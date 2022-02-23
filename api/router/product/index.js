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

            const newFormat = [];

            for (let i = 0; i < products.length; ++i) {
                let data = {
                    _id: products[i]._id,
                    name: products[i].name,
                    type: products[i].type,
                    price: products[i].price,
                    rating: products[i].rating,
                    warranty_years: products[i].warranty_years,
                    available: products[i].available,
                };
                newFormat.push(data);
            };

            return res.status(200).json({
                status: "Success",
                products,
                newFormat,
            });
        } catch (error) {
            return res.status(500).json({
                status: "Fail",
                error: "Internal Server Error",
            });
        };
    })
    .post(async (req, res) => {
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
    })

router.route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
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
        const id = req.params.id;
        const { name, type, price, rating, warranty_years, available } = req.body;

        try {
            await Product.findByIdAndUpdate({ _id: id }, { name, type, price, rating, warranty_years, available });
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
        const id = req.params.id;

        try {
            await Product.findByIdAndDelete({ _id: id });
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