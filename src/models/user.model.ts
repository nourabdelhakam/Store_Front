import Client from "../database";
import { User, Create_User } from "../types/user.type";
import bcrypt from "bcrypt";

const salt: string = process.env.SALT_ROUNDS as string;
const pepper: string = process.env.BCRYPT_PASSWORD as string;

export class UserModel {
  async all_users(): Promise<User[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get users ${err}`);
    }
  }

  async show_user_by_id(id: number): Promise<User> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with id: ${id}. Error: ${err}`);
    }
  }

  async create_user(user: Create_User): Promise<User> {
    try {
      const connection = await Client.connect();
      const sql =
        "INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *";
      const hashed_password: string = bcrypt.hashSync(
        user.password + pepper,
        parseInt(salt)
      );
      const result = await connection.query(sql, [
        user.firstname,
        user.lastname,
        hashed_password,
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not add new user. Error: ${err}`);
    }
  }

  async delete_user(id: number): Promise<User> {
    try {
      const connection = await Client.connect();
      const sql = "DELETE FROM users WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        ` Error: ${err}. Could not delete the user with the id: ${id}.`
      );
    }
  }
}
