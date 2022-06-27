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
const authorize_middlWare_1 = require("../middleWares/authorize.middlWare");
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
const show_order_by_user_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_by_user_id = yield orderHandler.show_order_by_id(req.params.user_id);
        res.json(order_by_user_id);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show_order_by_status = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_by_status = yield orderHandler.show_order_by_status(req.params.status);
        res.json(order_by_status);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create_order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_obj = {
            user_id: req.body.user_id,
            status: req.body.status,
        };
        const new_order = yield orderHandler.create_order(order_obj);
        res.json(new_order);
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
// const add_product = async (req: Request, res: Response) => {
//   try {
//     const prod_obj: Add_Product = {
//       quantity: req.body.quantity,
//       order_id: req.body.order_id,
//       product_id: req.body.product_id,
//     };
//     const new_prod = await orderHandler.add_new_product(prod_obj);
//     res.json(new_prod);
//   } catch (err) {
//     res.status(400);
//     res.json(err);
//   }
// };
const orders_routes = (app) => {
    app.get("/orders", authorize_middlWare_1.authorize, indexAllOrders);
    app.get("/orders/latest/:user_id", authorize_middlWare_1.authorize, show_order_by_user_id);
    app.get("/orders/:status", authorize_middlWare_1.authorize, show_order_by_status);
    app.post("/orders", create_order);
    app.delete("/orders/:id", delete_order);
};
exports.default = orders_routes;
