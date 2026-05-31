import { createApp } from './app.js';
import { assertTranslationConfigured, env } from './config/env.js';
assertTranslationConfigured();
const app = createApp();
const server = app.listen(env.PORT, () => {
    console.log(`[server] listening on http://localhost:${env.PORT}`);
    console.log(`[server] health  GET  http://localhost:${env.PORT}/api/health`);
    console.log(`[server] translate POST http://localhost:${env.PORT}/api/translate`);
});
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`[server] Port ${env.PORT} is already in use. Stop the other process and restart.`);
        process.exit(1);
    }
    throw err;
});
