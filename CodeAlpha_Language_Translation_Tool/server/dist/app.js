import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
export function createApp() {
    const app = express();
    app.use(helmet());
    app.use(cors({
        origin: env.CLIENT_URL,
        credentials: true,
    }));
    app.use(express.json({ limit: '1mb' }));
    app.use('/api', apiRouter);
    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
}
