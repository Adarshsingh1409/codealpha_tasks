import type { Request, Response, NextFunction } from 'express';
import type { TranslateRequest } from '@ai-translator/shared';
import { translationService } from '../services/translation.service.js';

export async function translate(
  req: Request<object, object, TranslateRequest>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const result = await translationService.translate(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
