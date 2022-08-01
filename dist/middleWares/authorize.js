"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorizeToken = (req, res, next) => {
    try {
        const authHead = req.headers.authorization;
        const token = authHead ? authHead.split(" ")[1] : "";
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        res.locals.userData = decoded;
        next();
    }
    catch (err) {
        // err.code = 401;
        next(err);
    }
};
exports.authorizeToken = authorizeToken;
