import type { Request, Response } from 'express';
import type { HealthResponse } from '../types/health.types.js';

export function getHealth(_req: Request, res: Response): void {
  const payload: HealthResponse = { status: 'ok' };
  res.json(payload);
}
