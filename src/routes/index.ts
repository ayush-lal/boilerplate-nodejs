import { Express, NextFunction, Request, Response } from "express";
import { getExampleHandler } from "../controllers/example.controller";

function routes(app: Express) {
  /**
   * @openapi
   * /example:
   *  get:
   *   tags:
   *   - Example
   *   description: Responds if the app is running
   *   responses:
   *    200:
   *     description: A successful response
   */
  app.get("/example", getExampleHandler);

  /**
   * @openapi
   * components:
   *  schemas:
   *   Example:
   *    type: object
   *    required:
   *     - name
   *     - email
   *    properties:
   *     name:
   *      type: string
   *      default: John Doe
   *     email:
   *      type: string
   *      default: john.doe@example.com
   */
  /**
   * @openapi
   * /example:
   *  post:
   *   tags:
   *   - Example
   *   description: example post request
   *   requestBody:
   *    required: true
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/components/schemas/Example'
   */
  app.post("/example", (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    return res.sendStatus(200);
  });
}

export default routes;
