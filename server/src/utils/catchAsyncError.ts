import { Request, Response, NextFunction } from 'express';

interface TryBlockFn {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const catchAsyncError = function (tryBlock: TryBlockFn) {
  return async function middlewareFn(req: Request, res: Response, next: NextFunction) {
    try {
      await tryBlock(req, res, next);
    } catch (err: unknown) {
      next(err);
    }
  };
};

export default catchAsyncError;
