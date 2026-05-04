import { cn } from '../../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const baseClasses =
  'inline-flex items-center justify-center font-jakarta font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-hover hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'bg-transparent border-[1.5px] border-[rgba(34,34,34,0.15)] text-brand-muted hover:border-brand-orange hover:text-brand-orange dark:border-white/20 dark:text-dm-muted dark:hover:border-brand-orange dark:hover:text-brand-orange',
  ghost:
    'bg-transparent text-brand-muted hover:bg-cream-dark hover:text-brand-dark dark:text-dm-muted dark:hover:bg-white/10 dark:hover:text-dm-text',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Sending…
        </span>
      ) : (
        children
      )}
    </button>
  );
}
