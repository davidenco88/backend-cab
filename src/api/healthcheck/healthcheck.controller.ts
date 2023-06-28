import { Request, Response } from 'express';

export function healthCheckHandler(req: Request, res: Response) {
  res.status(200).json({
    uptime: process.uptime(),
    message: 'OK',
  });
}
