import { cn } from '../../utils';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  active: string;
  onSelect: (value: string) => void;
  activeClass?: string;
}

export function FilterBar({ options, active, onSelect, activeClass }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-7">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={cn(
            'border-[1.5px] rounded-full px-4 py-1.5 text-[13px] font-medium font-jakarta transition-all duration-200',
            active === opt.value
              ? activeClass ?? 'bg-brand-orange border-brand-orange text-white'
              : 'bg-transparent border-[rgba(34,34,34,0.1)] text-brand-muted hover:border-brand-orange hover:text-brand-orange dark:border-white/10 dark:text-dm-muted dark:hover:border-brand-orange dark:hover:text-brand-orange',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
