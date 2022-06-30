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
exports.token = void 0;
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
exports.token = "";
describe("User Routs", () => {
    it("create user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.post("/users").send({
            firstname: "noura",
            lastname: "mohamed",
            password: "passWord123",
        });
        exports.token = res.body;
        console.log(exports.token);
        expect(res.status).toBe(200);
    }));
    it("get users list", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .get("/users")
            .set("Authorization", "Bearer " + exports.token);
        expect(res.body[0].id).toEqual(2);
    }));
    it("get user by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .get("/users/2")
            .set("Authorization", "Bearer " + exports.token);
        expect(res.body.firstname).toEqual("noura");
    }));
    it("delets user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request
            .delete("/users/1")
            .set("Authorization", "Bearer " + exports.token);
        expect(res.status).toBe(200);
    }));
});
