import express, { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { User, Create_User } from "../types/user.type";
import jwt from "jsonwebtoken";

const userHandler = new UserModel();
const token_secret: string = process.env.TOKEN_SECRET as string;

const indexAllUsers = async (_req: Request, res: Response) => {
  try {
    const users: User[] = await userHandler.all_users();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show_user_by_id = async (req: Request, res: Response) => {
  try {
    const user_by_id: User = await userHandler.show_user_by_id(
      req.params.id as unknown as number
    );
    res.json(user_by_id);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create_user = async (req: Request, res: Response) => {
  try {
    const user_obj: Create_User = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    };
    const new_user: User = await userHandler.create_user(user_obj);
    const token: string = jwt.sign({ user_obj: new_user }, token_secret);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};


const delete_user = async (req: Request, res: Response) => {
  try {
    const remove: User = await userHandler.delete_user(
      req.params.id as unknown as number
    );
    res.json(remove);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const users_routes = (app: express.Application) => {
  app.get("/users", indexAllUsers);
  app.get("/users/:id", show_user_by_id);
  app.post("/users", create_user);
  app.delete("/users/:id", delete_user);
};

export default users_routes;
