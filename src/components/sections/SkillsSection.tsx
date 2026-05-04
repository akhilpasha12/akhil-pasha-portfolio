import { motion } from 'framer-motion';
import { SKILLS, SKILL_FILTERS, TOOLS } from '../../constants';
import { SectionHeader, SkillBar, FilterBar, Tag } from '../ui';
import { useSkillFilter } from '../../hooks';
import { cn } from '../../utils';
import { useTheme } from '../../context/ThemeContext';

export function SkillsSection() {
  const { activeCategory, setFilter } = useSkillFilter();
  const { isDark } = useTheme();

  const visibleSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter(s => s.category.includes(activeCategory as any));

  return (
    <div>
      <SectionHeader title="Technical" accent="Skills" subtitle="What I bring to every project" />

      <FilterBar options={SKILL_FILTERS} active={activeCategory} onSelect={v => setFilter(v)} />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 mb-12"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      >
        {visibleSkills.map(skill => (
          <motion.div
            key={skill.id}
            layout
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className={cn(
              'border rounded-2xl p-5 transition-all duration-250 hover:border-brand-orange hover:-translate-y-1',
              isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]',
            )}
          >
            <div className="flex items-center gap-3.5 mb-3.5">
              <div
                className={cn(
                  'w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0',
                  skill.variant === 'orange'
                    ? 'bg-[rgba(255,109,31,0.1)]'
                    : isDark ? 'bg-white/10' : 'bg-[rgba(34,34,34,0.08)]',
                )}
              >
                {skill.icon}
              </div>
              <div>
                <p className={`font-syne text-[16px] font-bold ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>{skill.name}</p>
                <p className="text-[11px] text-brand-muted dark:text-dm-muted mt-0.5">{skill.level}</p>
              </div>
            </div>

            <SkillBar percentage={skill.percentage} variant={skill.variant} />

            <div className="flex flex-wrap gap-1.5">
              {skill.tags.map((tag, i) => (
                <Tag key={i} label={tag.label} highlighted={tag.highlighted} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={`font-syne text-[22px] font-bold mb-1.5 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>
          Tools &amp; Ecosystem
        </h3>
        <p className="text-[14px] text-brand-muted dark:text-dm-muted mb-4">Everything in my daily workflow</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-6 gap-2.5">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`border rounded-xl p-3.5 text-center text-[12px] font-medium transition-all hover:border-brand-orange hover:text-brand-orange cursor-default ${isDark ? 'bg-dm-card border-white/10 text-dm-muted' : 'bg-white border-[rgba(34,34,34,0.1)] text-brand-muted'}`}
            >
              <span className="block text-xl mb-1.5">{tool.icon}</span>
              {tool.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
