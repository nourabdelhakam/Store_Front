"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorizeToken = (req, res, next) => {
    try {
        const authHead = req.headers.authorization;
        if (!authHead) {
            throw new Error("authorization header is not available");
        }
        const token = authHead ? authHead.split(" ")[1] : "";
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (err) {
        res.status(401).json(err);
        next(err);
    }
};
exports.default = authorizeToken;
