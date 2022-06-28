import client from "../database";
import { Order, Add_Product } from "../types/order.type";

export class OrderModel {
  async all_orders(): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = "SELECT * FRPM orders";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get orders ${err}`);
    }
  }

  async show_order_by_id(id: number): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order with id: ${id}. Error: ${err}`);
    }
  }

  async show_order_by_status(status: string): Promise<Order[]> {
    try {
      const connection = await client.connect();
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

  async create_order(order: Order): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql =
        "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
      const result = await connection.query(sql, [order.user_id, order.status]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }

  async delete_order(id: number): Promise<Order> {
    try {
      const connection = await client.connect();
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

  async add_new_product(product: Add_Product): Promise<Add_Product> {
    try {
      const connection = await client.connect();
      const sql =
        "INSERT INTO product_order (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
      const result = await connection.query(sql, [
        product.quantity,
        product.order_id,
        product.product_id,
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `${err}. Could not add the product ${product} to the order ${product.order_id}. `
      );
    }
  }
}
