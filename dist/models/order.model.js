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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const database_1 = __importDefault(require("../database"));
class OrderModel {
    all_orders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FRPM orders";
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get orders ${err}`);
            }
        });
    }
    show_order_by_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE id=($1)";
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not find order with id: ${id}. Error: ${err}`);
            }
        });
    }
    show_order_by_status(status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE status=($1)";
                const result = yield connection.query(sql, [status]);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not find order with status: ${status}. Error: ${err}`);
            }
        });
    }
    create_order(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
                const result = yield connection.query(sql, [order.user_id, order.status]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not add new order. Error: ${err}`);
            }
        });
    }
    delete_order(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "DELETE FROM orders WHERE id=($1) RETURNING *";
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(` Error: ${err}. Could not delete the order with the id: ${id}.`);
            }
        });
    }
    add_new_product(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "INSERT INTO product_order (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
                const result = yield connection.query(sql, [
                    product.quantity,
                    product.order_id,
                    product.product_id,
                ]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`${err}. Could not add the product ${product} to the order ${product.order_id}. `);
            }
        });
    }
}
exports.OrderModel = OrderModel;
