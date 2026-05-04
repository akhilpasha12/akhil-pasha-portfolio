import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  accent: string;
  subtitle: string;
}

export function SectionHeader({ title, accent, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-9"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="font-syne text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight mb-1.5 text-brand-dark dark:text-dm-text">
        {title}{' '}
        <em className="not-italic text-brand-orange">{accent}</em>
      </h2>
      <p className="text-brand-muted dark:text-dm-muted text-[15px]">{subtitle}</p>
    </motion.div>
  );
}
