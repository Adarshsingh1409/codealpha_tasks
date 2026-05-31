import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const configDir = path.dirname(fileURLToPath(import.meta.url));
const serverRoot = path.resolve(configDir, '../..');
const monorepoRoot = path.resolve(configDir, '../../..');
function loadEnvFile(filePath, override = false) {
    if (!fs.existsSync(filePath)) {
        return;
    }
    const result = dotenv.config({ path: filePath, override });
    if (result.error) {
        console.warn(`[config] Could not load ${filePath}: ${result.error.message}`);
    }
}
/**
 * Load .env from monorepo root and server package (npm workspace cwd is often `server/`).
 * Later files override earlier ones so `server/.env` can override shared settings.
 */
export function loadEnv() {
    loadEnvFile(path.join(monorepoRoot, '.env'));
    loadEnvFile(path.join(serverRoot, '.env'), true);
    loadEnvFile(path.resolve(process.cwd(), '.env'), true);
}
loadEnv();
