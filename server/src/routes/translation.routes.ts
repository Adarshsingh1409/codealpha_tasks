import { Router } from 'express';
import { translate } from '../controllers/translation.controller.js';
import { validate } from '../middleware/validate.js';
import { translateRequestSchema } from '../validators/translation.schema.js';

export const translationRouter = Router();

translationRouter.post('/', validate(translateRequestSchema), translate);
