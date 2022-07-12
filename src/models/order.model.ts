import Client from "../database";
import { Order, Add_Order } from "../types/order.type";

export class OrderModel {
  async create_order(product: Order): Promise<Order> {
    try {
      const connection = await Client.connect();
      const sql =
        "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
      const result = await connection.query(sql, [
        product.user_id,
        product.status,
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `${err}. Could not add the product ${product} to the order . `
      );
    }
  }

  async all_orders(): Promise<Order[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM orders";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get orders ${err}`);
    }
  }

  async show_orders_by_user_id(user_id: number): Promise<Order[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM orders WHERE user_id=($1)";
      const result = await connection.query(sql, [user_id]);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find order with id: ${user_id}. Error: ${err}`
      );
    }
  }

  async show_user_orders_by_status(
    user_id: number,
    status: string
  ): Promise<Order[]> {
    try {
      const connection = await Client.connect();
      const sql =
        "SELECT * FROM orders WHERE user_id=($1) AND status=($2) RETURNING *";
      const result = await connection.query(sql, [user_id, status]);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find order belong to user with id : 
        ${user_id} with status: ${status}. Error: ${err}`
      );
    }
  }

  async show_orders_by_status(status: string): Promise<Order[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM orders WHERE status=($1)";
      const result = await connection.query(sql, [status]);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find order with status: ${status}. Error: ${err}`
      );
    }
  }

  async update_order_status(id: number, order: Order): Promise<Order> {
    try {
      const connection = await Client.connect();
      const sql = "UPDATE orders SET status=$1 WHERE id=$2 RETURNING *";
      const result = await connection.query(sql, [order.status, id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update the order. Error: ${err}`);
    }
  }

  async delete_order(id: number): Promise<Order> {
    try {
      const connection = await Client.connect();
      const sql = "DELETE FROM orders WHERE id=($1) RETURNING *";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        ` Error: ${err}. Could not delete the order with the id: ${id}.`
      );
    }
  }
}
