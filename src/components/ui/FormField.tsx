import { cn } from '../../utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
}

export function FormField({
  label, name, type = 'text', placeholder, value, error, onChange, textarea = false, rows = 4,
}: FormFieldProps) {
  const baseInputClass = cn(
    'w-full bg-white/[0.06] border rounded-[10px] px-3.5 py-2.5 text-cream font-jakarta text-sm outline-none transition-colors duration-200 placeholder:text-brand-muted-2/60',
    error
      ? 'border-red-400 focus:border-red-400'
      : 'border-white/10 focus:border-brand-orange',
  );

  return (
    <div className="mb-3.5">
      <label className="block text-[11px] text-brand-muted-2 font-bold uppercase tracking-[0.4px] mb-1.5">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={cn(baseInputClass, 'resize-vertical min-h-[96px]')}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputClass}
        />
      )}
      {error && <p className="mt-1 text-[11px] text-red-400">{error}</p>}
    </div>
  );
}
