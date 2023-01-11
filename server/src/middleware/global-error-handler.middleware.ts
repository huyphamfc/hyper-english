import { Request, Response, NextFunction } from 'express';

import { NODE_ENV } from '../config';
import { AppError } from '../utils';

interface ProcessedError extends Error {
  statusCode: number;
  status: string;
  message: string;
  errors: object;
  value: string;
  keyValue: string;
}

const sendErrorDev = (err: ProcessedError, res: Response): void => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: ProcessedError, res: Response): void => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const handleDuplicatedFieldError = (err: ProcessedError) => {
  const value = Object.values(err.keyValue);
  return new AppError(400, `${value} already exists.`);
};

const handleJWTError = () => {
  return new AppError(401, 'Invalid Signature. Please login again.');
};

const handleTokenExpiredError = () => {
  return new AppError(401, 'Expired Permission. Please login again.');
};

const handleCastError = (err: ProcessedError) => {
  const message = `${err.value} is invalid.`;
  return new AppError(400, message);
};

const handleGlobalError = (err: object, req: Request, res: Response, next: NextFunction): void => {
  let processedError = Object.assign(err);
  processedError.statusCode = processedError.statusCode || 500;
  processedError.status = processedError.status || 'error';
  processedError.message = processedError.message || 'Something went wrong!';

  switch (NODE_ENV) {
    case 'development':
      sendErrorDev(processedError, res);
      break;
    case 'production':
      if (processedError.code === 11000) {
        processedError = handleDuplicatedFieldError(processedError);
      }

      if (processedError.name === 'JsonWebTokenError') {
        processedError = handleJWTError();
      }

      if (processedError.name === 'TokenExpiredError') {
        processedError = handleTokenExpiredError();
      }

      if (processedError.name === 'CastError') {
        processedError = handleCastError(processedError);
      }

      sendErrorProd(processedError, res);
      break;

    default:
  }

  next();
};

export default handleGlobalError;
