import { translationService } from '../services/translation.service.js';
export async function translate(req, res, next) {
    try {
        const result = await translationService.translate(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
