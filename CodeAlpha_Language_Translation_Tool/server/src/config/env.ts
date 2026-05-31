import './loadEnv.js';

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key]?.trim() ?? fallback;
  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function optionalEnv(key: string): string {
  return process.env[key]?.trim() ?? '';
}

export const env = {
  NODE_ENV: process.env.NODE_ENV?.trim() ?? 'development',
  PORT: Number(process.env.PORT ?? 5000),
  CLIENT_URL: requireEnv('CLIENT_URL', 'http://localhost:5173'),
  GOOGLE_TRANSLATE_API_KEY: optionalEnv('GOOGLE_TRANSLATE_API_KEY'),
  isProduction: process.env.NODE_ENV === 'production',
} as const;

export function assertTranslationConfigured(): void {
  if (!env.GOOGLE_TRANSLATE_API_KEY) {
    const hint =
      'Set GOOGLE_TRANSLATE_API_KEY in translation-app/.env or server/.env';
    if (env.isProduction) {
      throw new Error(`[config] ${hint}`);
    }
    console.warn(`[config] GOOGLE_TRANSLATE_API_KEY is missing — ${hint}`);
    return;
  }
  console.info('[config] Google Cloud Translation API key loaded');
}
