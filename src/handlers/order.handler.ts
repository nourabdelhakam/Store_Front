import express, { Request, Response } from "express";
import { OrderModel } from "../models/order.model";
import { Order, Add_Product } from "../types/order.type";

const orderHandler = new OrderModel();

const indexAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders: Order[] = await orderHandler.all_orders();
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show_order_by_user_id = async (req: Request, res: Response) => {
  try {
    const order_by_user_id: Order = await orderHandler.show_order_by_id(
      req.params.user_id as unknown as number
    );
    res.json(order_by_user_id);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show_order_by_status = async (req: Request, res: Response) => {
  try {
    const order_by_status: Order[] = await orderHandler.show_order_by_status(
      req.params.status as unknown as string
    );
    res.json(order_by_status);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create_order = async (req: Request, res: Response) => {
  try {
    const order_obj: Order = {
      user_id: req.body.user_id,
      status: req.body.status,
    };
    const new_order: Order = await orderHandler.create_order(order_obj);
    res.json(new_order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const delete_order = async (req: Request, res: Response) => {
  try {
    const remove: Order = await orderHandler.delete_order(
      req.params.id as unknown as number
    );
    res.json(remove);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const add_product = async (req: Request, res: Response) => {
  try {
    const prod_obj: Add_Product = {
      quantity: req.body.quantity,
      order_id: req.body.order_id,
      product_id: req.body.product_id,
    };
    const new_prod = await orderHandler.add_new_product(prod_obj);
    res.json(new_prod);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orders_routes = (app: express.Application) => {
  app.get("/orders", indexAllOrders);
  app.get("/orders/latest/:user_id", show_order_by_user_id);
  app.get("/orders/:status", show_order_by_status);
  app.post("/orders", create_order);
  app.delete("/orders/:id", delete_order);
};

export default orders_routes;
