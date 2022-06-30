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
const request = (0, supertest_1.default)(server_1.default);
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX29iaiI6eyJpZCI6MzYsImZpcnN0bmFtZSI6Im5vdXJhIiwibGFzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkbzA2cld3bGRCTTRJRzhWYTFUSlBwZTNJY2Rra2RqdVJwZ2cuUDZPTFVocVFDZ3cwRkd0NHUifSwiaWF0IjoxNjU2NTU1MTk1fQ.YTnJjz6UbjtolSC_GfiDqIV169BmT1c1n_Ha_1xJ_uY';
describe("Order Routs", () => {
    it("create order", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.post("/orders").send({
            quantity: 1,
        });
        expect(res.status).toBe(200);
    }));
});
