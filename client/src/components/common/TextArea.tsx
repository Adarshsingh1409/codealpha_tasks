interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-400">{label}</span>
      <textarea
        className={`w-full resize-y rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${className}`}
        {...props}
      />
    </label>
  );
}
