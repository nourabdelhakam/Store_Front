import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authorizeToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHead: string | undefined = req.headers.authorization;
    if (!authHead) {
      throw new Error("authorization header is not available");
    }
    const token: string = authHead ? authHead.split(" ")[1] : "";
    jwt.verify(token, process.env.TOKEN_SECRET as string);

    next();
  } catch (err) {
    res.status(401).json(err);
    next(err);
  }
};

export default authorizeToken;
