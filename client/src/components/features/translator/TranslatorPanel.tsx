import { useState } from 'react';
import { SUPPORTED_LANGUAGES } from '@ai-translator/shared';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSelect } from './LanguageSelect';
import { TextArea } from '@/components/common/TextArea';
import { Button } from '@/components/common/Button';

export function TranslatorPanel() {
  const [text, setText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const { data, loading, error, translate } = useTranslation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    await translate({ text, sourceLang, targetLang });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <LanguageSelect
          label="From"
          value={sourceLang}
          onChange={setSourceLang}
          options={SUPPORTED_LANGUAGES}
        />
        <LanguageSelect
          label="To"
          value={targetLang}
          onChange={setTargetLang}
          options={SUPPORTED_LANGUAGES}
        />
      </div>

      <TextArea
        label="Source text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate…"
        rows={5}
      />

      <Button type="submit" loading={loading}>
        Translate
      </Button>

      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      {data && (
        <TextArea
          label="Translation"
          value={data.translatedText}
          readOnly
          rows={5}
        />
      )}
    </form>
  );
}
