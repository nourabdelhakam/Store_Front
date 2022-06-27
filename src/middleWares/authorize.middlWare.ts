import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    const header_auth: string | undefined = req.headers.authorization;
    const token: string = header_auth ? header_auth.split(" ")[1] : "";
    // jwt.verify(token as string, process.env.TOKEN_SECRET as string)
    jwt.verify(
      token as string,
      process.env.TOKEN_SECRET as string
    ) as JwtPayload;
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Error with authentication middleware" + err);
  }
};
