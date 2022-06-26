import Client from "../database";
import { Product, Create_Product } from "../types/product.type";

export class ProductModel {
  async all_products(): Promise<Product[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FRPM products";
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }

  async show_product_by_id(id: number): Promise<Product> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product with id:  ${id}. Error: ${err}`);
    }
  }

  async show_product_by_category(category: string): Promise<Product[]> {
    try {
      const connection = await Client.connect();
      const sql = "SELECT * FROM products WHERE category=($1)";
      const result = await connection.query(sql, [category]);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        ` Error: ${err}. Could not find the products with the category: ${category}.`
      );
    }
  }

  async create_product(product: Create_Product): Promise<Product> {
    try {
      const connection = await Client.connect();
      const sql =
        "INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *";
      const result = await connection.query(sql, [
        product.name,
        product.price,
        product.category,
      ]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not add new product. Error: ${err}`);
    }
  }

  async delete_product(id: number): Promise<Product> {
    try {
      const connection = await Client.connect();
      const sql = "DELETE FROM products WHERE id=($1) RETURNING *";
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        ` Error: ${err}. Could not delete the product with the id: ${id}.`
      );
    }
  }
}
