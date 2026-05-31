/** Contract shared between client and server for translation API */
export interface TranslateRequest {
    text: string;
    sourceLang: string;
    targetLang: string;
}
export interface TranslateResponse {
    translatedText: string;
    sourceLang: string;
    targetLang: string;
}
export interface ApiErrorResponse {
    message: string;
    code?: string;
}
//# sourceMappingURL=translation.d.ts.map