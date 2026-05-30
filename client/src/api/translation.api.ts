import type { TranslateRequest, TranslateResponse } from '@ai-translator/shared';
import { httpClient } from './httpClient';

export const translationApi = {
  translate(body: TranslateRequest): Promise<TranslateResponse> {
    return httpClient<TranslateResponse>('/translate', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
};
