import express, { Request, Response } from "express";
import { port } from "./configs/config";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
