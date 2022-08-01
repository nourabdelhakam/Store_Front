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
const user_model_1 = require("../user.model");
const user = new user_model_1.UserModel();
describe("User Model", () => {
    it("should create new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user.create_user({
            firstname: "noura",
            lastname: "mohamed",
            password: "passWord123",
        });
        expect(res.firstname).toEqual("noura");
    }));
    it("should get all users list", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user.all_users();
        console.log("res", res);
        expect(res === null || res === void 0 ? void 0 : res.length).toBeGreaterThan(0);
    }));
    it("should return a user by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user.show_user_by_id(75);
        expect(res.id).toBe(75);
    }));
    it("should delete a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user.delete_user(75);
        expect(res.id).toBe(75);
    }));
});
