import express, { Request, Response } from "express";
import { port } from "./configs/config";
import routes from "./routes";
import log from "./utils/logger";
import swaggerDocs from "./utils/swagger/";

const app = express();
app.use(express.json());

app.listen(port, () => {
  log.info(`The application is listening on port ${port}!`);
  routes(app);
  swaggerDocs(app, port!);
});
