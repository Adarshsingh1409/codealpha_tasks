import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
      ...(err.details && !env.isProduction ? { details: err.details } : {}),
    });
    return;
  }

  console.error('[error]', err);
  res.status(500).json({ message: 'Internal server error' });
}
