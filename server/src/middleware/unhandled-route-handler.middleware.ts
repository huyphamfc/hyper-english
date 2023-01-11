import { Request, Response, NextFunction } from 'express';

import { AppError } from '../utils';

const handleUnhandledRoute = (req: Request, res: Response, next: NextFunction): void => {
  next(new AppError(404, `Cannot find ${req.originalUrl} on the server.`));
};

export default handleUnhandledRoute;
