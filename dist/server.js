"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// const port = config.port || 3003;
var app = (0, express_1["default"])();
var address = "0.0.0.0:3003";
app.use(body_parser_1["default"].json());
// products_routes(app);
// orders_routes(app);
// users_routes(app);
app.get("/", function (req, res) {
    res.send("Hello World from port 3003");
});
app.listen(3003, function () {
    console.log("Server started at http://localhost:".concat(address));
});
exports["default"] = app;
