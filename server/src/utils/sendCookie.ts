import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_PRIVATE_KEY, JWT_EXPIRATION, COOKIE_EXPIRATION } from '../config';
import { User } from '../models';

const sendCookie = (user: User, req: Request, res: Response) => {
  const token = jwt.sign({ id: user._id }, JWT_PRIVATE_KEY, {
    expiresIn: JWT_EXPIRATION,
  });

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + Number(COOKIE_EXPIRATION) * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  res.status(200).json({
    status: 'success',
    username: user.username,
    email: user.email,
  });
};

export default sendCookie;
