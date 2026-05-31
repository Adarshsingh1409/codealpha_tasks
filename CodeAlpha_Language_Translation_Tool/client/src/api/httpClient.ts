import { env } from '@/config/env';
import type { ApiErrorResponse } from '@ai-translator/shared';

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export async function httpClient<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${env.apiBaseUrl}${path}`;
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as ApiErrorResponse;
    throw new HttpError(response.status, body.message ?? response.statusText);
  }

  return response.json() as Promise<T>;
}
