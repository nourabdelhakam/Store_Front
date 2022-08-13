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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const _01_users_spec_1 = require("./01-users_spec");
const request = (0, supertest_1.default)(server_1.default);
describe("Order Routs", () => {
    it("create order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post("/orders")
            .send({
            user_id: 44,
            status: "compeleted",
        })
            .set("Authorization", `Bearer ${_01_users_spec_1.token}`);
        expect(res.status).toBe(200);
    }));
    it("get orders list", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .get("/orders")
            .set("Authorization", "Bearer " + _01_users_spec_1.token);
        console.log("log", res.body);
        expect(res.body.length).toBeGreaterThan(0);
    }));
    it("show orders by user_id", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .get("/orders/latest/44")
            .set("Authorization", "Bearer " + _01_users_spec_1.token);
        console.log(_01_users_spec_1.token);
        expect(res.body[0].user_id).toEqual(44);
    }));
    it("update order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post("/orders/")
            .send({
            user_id: 44,
            status: "active",
        })
            .set("Authorization", "Bearer " + _01_users_spec_1.token);
        expect(res.status).toBe(200);
    }));
    it("delets order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .delete("/orders/113")
            .set("Authorization", "Bearer " + _01_users_spec_1.token);
        expect(res.status).toBe(200);
    }));
});
