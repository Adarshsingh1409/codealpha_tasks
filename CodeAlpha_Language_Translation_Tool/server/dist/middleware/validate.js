import { AppError } from '../utils/AppError.js';
export function validate(schema) {
    return (req, _res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            next(new AppError(400, 'Validation failed', {
                issues: result.error.flatten(),
            }));
            return;
        }
        req.body = result.data;
        next();
    };
}
