"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_handler_1 = __importDefault(require("./handlers/user.handler"));
const product_handler_1 = __importDefault(require("./handlers/product.handler"));
const order_handler_1 = __importDefault(require("./handlers/order.handler"));
const app = (0, express_1.default)();
const address = "0.0.0.0:3003";
const corsConfig = {
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsConfig));
app.use(body_parser_1.default.json());
(0, user_handler_1.default)(app);
(0, product_handler_1.default)(app);
(0, order_handler_1.default)(app);
app.get("/", function (req, res) {
    res.send("Hello World from port 3003");
});
app.listen(3003, function () {
    console.log(`Server started at http://localhost:${address}`);
});
exports.default = app;
