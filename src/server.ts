import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import users_routes from "./handlers/user.handler";
import products_routes from "./handlers/product.handler";
import orders_routes from "./handlers/order.handler";

const app: Application = express();
const address = "0.0.0.0:3003";
const corsConfig = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsConfig));
app.use(bodyParser.json());
users_routes(app);
products_routes(app);
orders_routes(app);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World from port 3003");
});

app.listen(3003, function () {
  console.log(`Server started at http://localhost:${address}`);
});

export default app;
