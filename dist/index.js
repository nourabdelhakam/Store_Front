"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3003;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
    });
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
exports.default = app;
