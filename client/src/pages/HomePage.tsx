import { TranslatorPanel } from '@/components/features/translator/TranslatorPanel';

export function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          AI Translator
        </h1>
        <p className="mt-2 text-slate-400">
          Translate text instantly with AI-powered accuracy.
        </p>
      </header>
      <TranslatorPanel />
    </section>
  );
}
