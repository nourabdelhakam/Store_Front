"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorize = (req, res, next) => {
    try {
        const header_auth = req.headers.authorization;
        const token = header_auth ? header_auth.split(" ")[1] : "";
        // jwt.verify(token as string, process.env.TOKEN_SECRET as string)
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (err) {
        res.status(401);
        throw new Error("Error with authentication middleware" + err);
    }
};
exports.authorize = authorize;
