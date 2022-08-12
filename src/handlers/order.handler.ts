import express, { Request, Response } from "express";
import { OrderModel } from "../models/order.model";
import { Order } from "../types/order.type";

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

const show_orders_by_user_id = async (req: Request, res: Response) => {
  try {
    const order_by_user_id: Order[] = await orderHandler.show_orders_by_user_id(
      req.params.user_id as unknown as number
    );
    res.json(order_by_user_id);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const update_order_status = async (req: Request, res: Response) => {
  try {
    const order_obj: Order = {
      user_id: req.body.user_id,
      status: req.body.status,
    };
    const update: Order = await orderHandler.update_order_status(
      req.params.id as unknown as number,
      order_obj
    );
    res.json(update);
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

const create_order = async (req: Request, res: Response) => {
  try {
    const prod_obj: Order = {
      user_id: req.body.user_id,
      status: req.body.status,
    };
    const new_prod = await orderHandler.create_order(prod_obj);
    res.json(new_prod);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const orders_routes = (app: express.Application) => {
  app.get("/orders", indexAllOrders);
  app.get("/orders/latest/:user_id", show_orders_by_user_id);
  app.get("/orders/:id", update_order_status);
  app.delete("/orders/:id", delete_order);
  app.post("/orders", create_order);
};

export default orders_routes;
