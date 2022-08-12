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
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorize_1 = __importDefault(require("../middleWares/authorize"));
const userHandler = new user_model_1.UserModel();
const token_secret = process.env.TOKEN_SECRET;
const indexAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userHandler.all_users();
        res.json(users);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show_user_by_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_by_id = yield userHandler.show_user_by_id(req.params.id);
        res.json(user_by_id);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_obj = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
        };
        const new_user = yield userHandler.create_user(user_obj);
        const token = jsonwebtoken_1.default.sign({ user_obj: new_user }, token_secret);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const delete_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remove = yield userHandler.delete_user(req.params.id);
        res.json(remove);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const users_routes = (app) => {
    app.get("/users", authorize_1.default, indexAllUsers);
    app.get("/users/:id", authorize_1.default, show_user_by_id);
    app.post("/users", create_user);
    app.delete("/users/:id", delete_user);
};
exports.default = users_routes;
