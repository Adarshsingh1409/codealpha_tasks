import { translationService } from '../src/services/translation.service.js';

const result = await translationService.translate({
  text: 'Hello',
  sourceLang: 'en',
  targetLang: 'hi',
});

console.log(JSON.stringify(result, null, 2));
