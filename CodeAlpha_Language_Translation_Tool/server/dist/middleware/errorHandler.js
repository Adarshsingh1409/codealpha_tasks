import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';
export function errorHandler(err, _req, res, _next) {
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
