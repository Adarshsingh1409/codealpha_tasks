import { googleTranslateClient } from './googleTranslate.client.js';
/** Orchestrates translation business logic; delegates to Google Cloud Translation API */
export const translationService = {
    async translate(input) {
        const translatedText = await googleTranslateClient.translateText(input.text, input.sourceLang, input.targetLang);
        return {
            translatedText,
            sourceLang: input.sourceLang,
            targetLang: input.targetLang,
        };
    },
};
