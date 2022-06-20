import express, { Application, Request, Response } from "express";

const port = 3003;
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
