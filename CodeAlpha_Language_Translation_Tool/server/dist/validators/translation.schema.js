import { z } from 'zod';
export const translateRequestSchema = z.object({
    text: z.string().min(1).max(10_000),
    sourceLang: z.string().min(2).max(10),
    targetLang: z.string().min(2).max(10),
});
