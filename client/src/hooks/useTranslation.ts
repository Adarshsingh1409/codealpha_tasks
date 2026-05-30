import { useState, useCallback } from 'react';
import type { TranslateRequest, TranslateResponse } from '@ai-translator/shared';
import { translationApi } from '@/api/translation.api';

export function useTranslation() {
  const [data, setData] = useState<TranslateResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = useCallback(async (input: TranslateRequest) => {
    setLoading(true);
    setError(null);
    try {
      const result = await translationApi.translate(input);
      setData(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Translation failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
  }, []);

  return { data, loading, error, translate, reset };
}
