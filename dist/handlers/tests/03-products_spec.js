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
describe("Product Routs", () => {
    it("create product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .post("/products")
            .send({
            name: "productOne",
            price: 100,
            category: "electronics",
        })
            .set("Authorization", `Bearer ${_01_users_spec_1.token}`);
        expect(res.status).toBe(200);
    }));
    it("get products list", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const res = yield request.get("/products");
        expect((_a = res.body) === null || _a === void 0 ? void 0 : _a.length).toBeGreaterThan(0);
    }));
    it("get product by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get("/products/1");
        expect(res.status).toBe(200);
    }));
    it("delets product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.delete("/products/29");
        expect(res.status).toBe(200);
    }));
});
