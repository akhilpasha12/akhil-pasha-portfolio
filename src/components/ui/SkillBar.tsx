import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils';

interface SkillBarProps {
  percentage: number;
  variant?: 'orange' | 'dark';
}

export function SkillBar({ percentage, variant = 'orange' }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex items-center gap-2.5 my-3">
      <div className="flex-1 h-[5px] bg-cream-dark dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,0.68,0,1)]',
            variant === 'orange' ? 'bg-brand-orange' : 'bg-brand-dark dark:bg-dm-text',
          )}
          style={{ width: inView ? `${percentage}%` : '0%' }}
        />
      </div>
      <span className="text-[13px] font-bold text-brand-dark dark:text-dm-text min-w-[32px] text-right">
        {percentage}%
      </span>
    </div>
  );
}
