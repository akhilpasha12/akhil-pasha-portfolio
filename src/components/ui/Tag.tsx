import { cn } from '../../utils';

interface TagProps {
  label: string;
  highlighted?: boolean;
  className?: string;
}

export function Tag({ label, highlighted = false, className }: TagProps) {
  return (
    <span
      className={cn(
        'rounded-full px-2.5 py-0.5 text-[11px] font-medium border transition-colors',
        highlighted
          ? 'border-[rgba(255,109,31,0.35)] text-brand-orange bg-[rgba(255,109,31,0.06)]'
          : 'bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted dark:bg-white/10 dark:border-white/10 dark:text-dm-muted',
        className,
      )}
    >
      {label}
    </span>
  );
}
