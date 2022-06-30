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
                const sql = "SELECT * FROM orders";
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get orders ${err}`);
            }
        });
    }
    show_orders_by_user_id(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE user_id=($1)";
                const result = yield connection.query(sql, [user_id]);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not find order with id: ${user_id}. Error: ${err}`);
            }
        });
    }
    show_user_orders_by_status(user_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM orders WHERE user_id=($1) AND status=($2) RETURNING *";
                const result = yield connection.query(sql, [user_id, status]);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not find order belong to user with id : 
        ${user_id} with status: ${status}. Error: ${err}`);
            }
        });
    }
    show_orders_by_status(status) {
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
    update_order_status(id, order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "UPDATE orders SET status=$1 WHERE id=$2 RETURNING *";
                const result = yield connection.query(sql, [order.status, id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not update the order. Error: ${err}`);
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
    //   async create_order(product: Add_Order): Promise<Add_Order> {
    //     try {
    //       const connection = await Client.connect();
    //       const sql =
    //         "INSERT INTO product_order (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
    //       const result = await connection.query(sql, [
    //         product.quantity,
    //         product.order_id,
    //         product.product_id,
    //       ]);
    //       connection.release();
    //       return result.rows[0];
    //     } catch (err) {
    //       throw new Error(
    //         `${err}. Could not add the product ${product} to the order ${product.order_id}. `
    //       );
    //     }
    //   }
    // }
    create_order(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
                const result = yield connection.query(sql, [
                    product.user_id,
                    product.status,
                ]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`${err}. Could not add the product ${product} to the order . `);
            }
        });
    }
}
exports.OrderModel = OrderModel;
