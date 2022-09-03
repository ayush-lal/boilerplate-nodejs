import { NextFunction, Request, Response } from "express";

export function getExampleHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.sendStatus(200);
}
