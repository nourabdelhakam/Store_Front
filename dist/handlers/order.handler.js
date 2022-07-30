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
const order_model_1 = require("../models/order.model");
const orderHandler = new order_model_1.OrderModel();
const indexAllOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderHandler.all_orders();
        res.json(orders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show_orders_by_user_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_by_user_id = yield orderHandler.show_orders_by_user_id(req.params.user_id);
        res.json(order_by_user_id);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const update_order_status = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_obj = {
            user_id: req.body.user_id,
            status: req.body.status,
        };
        const update = yield orderHandler.update_order_status(req.params.id, order_obj);
        res.json(update);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const delete_order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remove = yield orderHandler.delete_order(req.params.id);
        res.json(remove);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create_order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prod_obj = {
            user_id: req.body.user_id,
            status: req.body.status,
        };
        const new_prod = yield orderHandler.create_order(prod_obj);
        res.json(new_prod);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const orders_routes = (app) => {
    app.get("/orders", indexAllOrders);
    app.get("/orders/latest/:user_id", show_orders_by_user_id);
    app.get("/orders/:id", update_order_status);
    app.delete("/orders/:id", delete_order);
    app.post("/orders", create_order);
};
exports.default = orders_routes;
