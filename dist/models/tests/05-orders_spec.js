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
const order_model_1 = require("../order.model");
const order = new order_model_1.OrderModel();
describe("Order Model", () => {
    it("should create new order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield order.create_order({
            user_id: 44,
            status: "compeleted",
        });
        expect(res.id).toBeTruthy();
    }));
    it("should get all orders list", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield order.all_orders();
        console.log("order res", res);
        expect(res === null || res === void 0 ? void 0 : res.length).toBeGreaterThan(0);
    }));
    it("should return a order by user id", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield order.show_orders_by_user_id(44);
        expect(res === null || res === void 0 ? void 0 : res.length).toBeGreaterThan(0);
    }));
    it("should delete a order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield order.delete_order(44);
        expect(res.id).toBe(44);
    }));
});
