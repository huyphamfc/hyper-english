import { Response } from 'express';
import { Model } from 'mongoose';

import AppError from './AppError';

const sendData = async <T>(res: Response, model: Model<T>): Promise<void> => {
  const data: Model<T>[] = await model.find({});

  const results = data.length;
  if (results === 0) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    results,
    data,
  });
};

export default sendData;
