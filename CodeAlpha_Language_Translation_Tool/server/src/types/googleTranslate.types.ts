/** Google Cloud Translation API v2 — REST response shapes */

export interface GoogleTranslateApiResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

export interface GoogleTranslateApiErrorBody {
  error?: {
    code?: number;
    message?: string;
    status?: string;
    errors?: Array<{ message?: string; domain?: string; reason?: string }>;
  };
}

export interface GoogleTranslateRequestBody {
  q: string;
  source: string;
  target: string;
  format: 'text';
}
