import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import products_routes from './handlers/store';
// import orders_routes from './handlers/orders';
// import users_routes from './handlers/users';

const app: Application = express();
const address = "0.0.0.0:3003";
const corsConfig = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsConfig));
app.use(bodyParser.json());
// products_routes(app);
// orders_routes(app);
// users_routes(app);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World from port 3003");
});

app.listen(3003, function () {
  console.log(`Server started at http://localhost:${address}`);
});

export default app;
