interface LanguageOption {
  code: string;
  label: string;
}

interface LanguageSelectProps {
  label: string;
  value: string;
  onChange: (code: string) => void;
  options: readonly LanguageOption[];
}

export function LanguageSelect({ label, value, onChange, options }: LanguageSelectProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        {options.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
