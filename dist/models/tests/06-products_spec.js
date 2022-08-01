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
const product_model_1 = require("../product.model");
const product = new product_model_1.ProductModel();
describe("Product Modal", () => {
    it("should create a new product", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield product.create_product({
            name: "productTwo",
            price: 200,
            category: "electronics2",
        });
        expect(res.id).toBeTruthy();
    }));
    it("should get all products list", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield product.all_products();
        expect(res === null || res === void 0 ? void 0 : res.length).toBeGreaterThan(0);
    }));
});
