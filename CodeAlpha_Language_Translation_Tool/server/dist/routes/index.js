import { Router } from 'express';
import { healthRouter } from './health.routes.js';
import { translationRouter } from './translation.routes.js';
export const apiRouter = Router();
apiRouter.use('/health', healthRouter);
apiRouter.use('/translate', translationRouter);
