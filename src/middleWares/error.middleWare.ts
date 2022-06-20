import { Request, Response, NextFunction } from "express";

const errorMidleware = (
  error: Error,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  console.log("Error");
};

export default errorMidleware;
