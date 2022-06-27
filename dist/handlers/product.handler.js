"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
const authorize_middlWare_1 = require("../middleWares/authorize.middlWare");
const productHandler = new product_model_1.ProductModel();
const indexAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productHandler.all_products();
        res.json(products);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show_product_by_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_by_id = yield productHandler.show_product_by_id(req.params.id);
        res.json(product_by_id);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show_product_by_cat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_by_cat = yield productHandler.show_product_by_category(req.params.category);
        res.json(product_by_cat);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prod_obj = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        const new_prod = yield productHandler.create_product(prod_obj);
        res.json(new_prod);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const delete_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remove = yield productHandler.delete_product(req.params.id);
        res.json(remove);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const products_routes = (app) => {
    app.get("/products", indexAllProducts);
    app.get("/products/:id", show_product_by_id);
    app.get("/products/category/:category", show_product_by_cat);
    app.post("/products", authorize_middlWare_1.authorize, create_product);
    app.delete("/products/:id", delete_product);
};
exports.default = products_routes;
