import axios, { isAxiosError } from 'axios';
import { env } from '../config/env.js';
import { AppError } from '../utils/AppError.js';
const GOOGLE_TRANSLATE_V2_URL = 'https://translation.googleapis.com/language/translate/v2';
/**
 * Low-level Google Cloud Translation API client (axios).
 * API key stays server-side; controllers never import this module.
 */
export const googleTranslateClient = {
    async translateText(text, sourceLang, targetLang) {
        if (!env.GOOGLE_TRANSLATE_API_KEY) {
            throw new AppError(503, 'Translation service is not configured', undefined, 'TRANSLATE_NOT_CONFIGURED');
        }
        const body = {
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text',
        };
        try {
            const { data } = await axios.post(GOOGLE_TRANSLATE_V2_URL, body, {
                params: { key: env.GOOGLE_TRANSLATE_API_KEY },
                headers: { 'Content-Type': 'application/json' },
                timeout: 15_000,
            });
            const translatedText = data.data?.translations?.[0]?.translatedText;
            if (!translatedText) {
                throw new AppError(502, 'Invalid response from translation provider', data, 'TRANSLATE_INVALID_RESPONSE');
            }
            return translatedText;
        }
        catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            if (isAxiosError(error)) {
                const apiMessage = error.response?.data?.error?.message;
                const status = error.response?.status ?? 502;
                const safeStatus = status >= 400 && status < 600 ? status : 502;
                throw new AppError(safeStatus, apiMessage ?? 'Translation request failed', error.response?.data, 'TRANSLATE_API_ERROR');
            }
            throw error;
        }
    },
};
