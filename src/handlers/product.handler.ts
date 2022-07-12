import express, { Request, Response } from "express";
import { ProductModel } from "../models/product.model";
import { Product, Create_Product } from "../types/product.type";

const productHandler = new ProductModel();

const indexAllProducts = async (_req: Request, res: Response) => {
  try {
    const products: Product[] = await productHandler.all_products();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show_product_by_id = async (req: Request, res: Response) => {
  try {
    const product_by_id: Product = await productHandler.show_product_by_id(
      req.params.id as unknown as number
    );
    res.json(product_by_id);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
const create_product = async (req: Request, res: Response) => {
  try {
    const prod_obj: Create_Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const new_prod: Product = await productHandler.create_product(prod_obj);
    res.json(new_prod);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const delete_product = async (req: Request, res: Response) => {
  try {
    const remove: Product = await productHandler.delete_product(
      req.params.id as unknown as number
    );
    res.json(remove);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const products_routes = (app: express.Application) => {
  app.get("/products", indexAllProducts);
  app.get("/products/:id", show_product_by_id);
  app.post("/products", create_product);
  app.delete("/products/:id", delete_product);
};

export default products_routes;
