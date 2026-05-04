import { motion } from 'framer-motion';
import { ABOUT_BIO, PERSONAL_INFO, EDUCATION, INTERESTS } from '../../constants';
import { SectionHeader, Button } from '../ui';
import { useTheme } from '../../context/ThemeContext';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function AboutSection() {
  const { isDark } = useTheme();

  return (
    <div>
      <SectionHeader title="About" accent="Me" subtitle="The story behind the code" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* Left: bio + info */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          <div className="space-y-4 mb-6">
            {ABOUT_BIO.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeItem}
                className="text-[15px] text-brand-muted dark:text-dm-muted leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>

          <motion.div variants={stagger} className="flex flex-col gap-2 mb-6">
            {PERSONAL_INFO.map((info, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                className={`flex items-center gap-3.5 rounded-xl px-4 py-3 ${isDark ? 'bg-dm-card' : 'bg-cream-dark'}`}
              >
                <span className="text-[12px] text-brand-muted dark:text-dm-muted font-semibold min-w-[80px]">{info.label}</span>
                <span className={`text-[14px] font-medium ${info.accent ? 'text-brand-orange' : isDark ? 'text-dm-text' : 'text-brand-dark'}`}>
                  {info.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeItem}>
            <a href="/assets/resume.pdf" download="Akhil-Pasha-Mohammed.pdf">
              <Button>Download Resume ↓</Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: education + interests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className={`font-syne text-[20px] font-bold mb-4 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`border rounded-2xl p-5 transition-colors hover:border-brand-orange ${isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]'}`}
              >
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(255,109,31,0.1)] flex items-center justify-center text-lg mb-3">
                  {edu.icon}
                </div>
                <p className={`font-syne text-[14px] font-bold mb-1 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>{edu.degree}</p>
                <p className="text-[12px] text-brand-orange font-medium mb-1">{edu.school}</p>
                <p className="text-[11px] text-brand-muted dark:text-dm-muted">{edu.year}</p>
              </motion.div>
            ))}
          </div>

          <h3 className={`font-syne text-[20px] font-bold mb-3 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>Interests</h3>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {INTERESTS.map(interest => (
              <motion.span
                key={interest.id}
                variants={fadeItem}
                className={`border rounded-full px-4 py-1.5 text-[12px] font-medium transition-all hover:border-brand-orange hover:text-brand-orange cursor-default ${isDark ? 'bg-dm-card border-white/10 text-dm-muted' : 'bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted'}`}
              >
                {interest.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
