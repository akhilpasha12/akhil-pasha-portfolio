import { cn } from '../../utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'dark' | 'muted';
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  orange: 'bg-[rgba(255,109,31,0.1)] text-brand-orange border border-[rgba(255,109,31,0.35)]',
  dark: 'bg-[rgba(34,34,34,0.08)] text-brand-dark border border-[rgba(34,34,34,0.12)] dark:bg-white/10 dark:text-dm-text dark:border-white/20',
  muted: 'bg-cream-dark text-brand-muted border border-[rgba(34,34,34,0.1)] dark:bg-white/10 dark:text-dm-muted dark:border-white/10',
};

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-0.5 text-[11px] font-bold tracking-wide',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
