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
exports.UserModel = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const salt = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
class UserModel {
    all_users() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM users";
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`cannot get users ${err}`);
            }
        });
    }
    show_user_by_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "SELECT * FROM users WHERE id=($1)";
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not find user with id: ${id}. Error: ${err}`);
            }
        });
    }
    create_user(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *";
                const hashed_password = bcrypt_1.default.hashSync(user.password + pepper, parseInt(salt));
                const result = yield connection.query(sql, [
                    user.firstname,
                    user.lastname,
                    hashed_password,
                ]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not add new user. Error: ${err}`);
            }
        });
    }
    delete_user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = "DELETE FROM users WHERE id=($1) RETURNING *";
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(` Error: ${err}. Could not delete the user with the id: ${id}.`);
            }
        });
    }
}
exports.UserModel = UserModel;
