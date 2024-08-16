/* eslint-disable no-unused-vars */
import { NextFunction } from 'express';

type MiddlewareTypeExpress = (req: Request, res: Response, next: NextFunction) => void;

class Logger {
  public static init () {
  }
}

export default Logger;
