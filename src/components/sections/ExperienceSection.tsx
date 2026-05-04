import { motion } from 'framer-motion';
import {
  EXPERIENCE_ITEMS,
  CERTIFICATIONS,
  LANGUAGES,
  WORK_STYLE_TAGS,
} from '../../constants';
import { SectionHeader } from '../ui';
import { calculateExp, cn } from '../../utils';
import { useTheme } from '../../context/ThemeContext';

const dotVariantClass: Record<string, string> = {
  orange: 'bg-brand-orange',
  dark: 'bg-brand-dark dark:bg-dm-text',
  muted: 'bg-brand-muted-2',
};

export function ExperienceSection() {
  const { isDark } = useTheme();
  const myExp = calculateExp(); // Returns "3.6" (using your Sep 17 default)
  return (
    <div>
      <SectionHeader
        title="Work"
        accent="Experience"
        subtitle={`${myExp}+ years building great products`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
        {/* Timeline */}
        <div className="relative">
          <div
            className={`absolute left-5 top-7 bottom-0 w-0.5 ${isDark ? "bg-white/10" : "bg-cream-dark"}`}
          />

          {EXPERIENCE_ITEMS.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative pl-14 mb-9 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-[14px] top-1.5 w-3.5 h-3.5 rounded-full border-2",
                  isDark ? "border-dm-bg" : "border-cream",
                  dotVariantClass[exp.dotVariant],
                )}
              />

              <div
                className={cn(
                  "border rounded-2xl p-5 transition-all hover:border-brand-orange hover:translate-x-1",
                  isDark
                    ? "bg-dm-card border-white/10"
                    : "bg-white border-[rgba(34,34,34,0.1)]",
                )}
              >
                <h3
                  className={`font-syne text-[17px] font-bold mb-1 ${isDark ? "text-dm-text" : "text-brand-dark"}`}
                >
                  {exp.role}
                </h3>
                <p className="text-[14px] text-brand-orange font-semibold mb-1.5">
                  {exp.company}
                </p>

                <div className="flex items-center gap-2 text-[12px] text-brand-muted dark:text-dm-muted mb-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-medium ${isDark ? "bg-white/10" : "bg-cream-dark"}`}
                  >
                    {exp.period}
                  </span>
                  <span>· {exp.duration}</span>
                </div>

                <p className="text-[13px] text-brand-muted dark:text-dm-muted leading-[1.65] mb-2.5">
                  {exp.description}
                </p>

                <ul className="mb-3">
                  {exp.achievements.map((ach, idx) => (
                    <li
                      key={idx}
                      className="text-[13px] text-brand-muted dark:text-dm-muted pl-4 relative py-0.5"
                    >
                      <span className="absolute left-0 top-[5px] text-brand-orange text-[10px]">
                        ▸
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* FIXED: was `!exp?.tags` (inverted bug) — now correctly renders tags when they exist */}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`border rounded-full px-2.5 py-0.5 text-[11px] font-medium ${isDark ? "bg-white/5 border-white/10 text-dm-muted" : "bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar widgets */}
        <motion.div
          className="flex flex-col gap-3.5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Certifications */}
          <div
            className={`border rounded-2xl p-5 ${isDark ? "bg-dm-card border-white/10" : "bg-white border-[rgba(34,34,34,0.1)]"}`}
          >
            <h4
              className={`font-syne text-[14px] font-bold mb-3.5 ${isDark ? "text-dm-text" : "text-brand-dark"}`}
            >
              Certifications
            </h4>
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex gap-3 items-center mb-3 last:mb-0"
              >
                <div className="w-9 h-9 rounded-[10px] bg-[rgba(255,109,31,0.08)] flex items-center justify-center text-lg flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <p
                    className={`text-[13px] font-medium ${isDark ? "text-dm-text" : "text-brand-dark"}`}
                  >
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-brand-muted dark:text-dm-muted">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div
            className={`border rounded-2xl p-5 ${isDark ? "bg-dm-card border-white/10" : "bg-white border-[rgba(34,34,34,0.1)]"}`}
          >
            <h4
              className={`font-syne text-[14px] font-bold mb-3.5 ${isDark ? "text-dm-text" : "text-brand-dark"}`}
            >
              Languages
            </h4>
            {LANGUAGES.map((lang) => (
              <div
                key={lang.id}
                className="flex justify-between items-center mb-2.5 last:mb-0"
              >
                <span
                  className={`text-[13px] font-medium ${isDark ? "text-dm-text" : "text-brand-dark"}`}
                >
                  {lang.name}
                </span>
                <span
                  className={`text-[11px] rounded-full px-2.5 py-0.5 font-medium text-brand-muted dark:text-dm-muted ${isDark ? "bg-white/10" : "bg-cream-dark"}`}
                >
                  {lang.level}
                </span>
              </div>
            ))}
          </div>

          {/* Working style */}
          <div
            className={`border rounded-2xl p-5 ${isDark ? "bg-dm-card border-white/10" : "bg-white border-[rgba(34,34,34,0.1)]"}`}
          >
            <h4
              className={`font-syne text-[14px] font-bold mb-3.5 ${isDark ? "text-dm-text" : "text-brand-dark"}`}
            >
              Working Style
            </h4>
            <div className="flex flex-wrap gap-2">
              {WORK_STYLE_TAGS.map((tag) => (
                <span
                  key={tag.id}
                  className={`border rounded-full px-2.5 py-0.5 text-[11px] font-medium ${isDark ? "bg-white/5 border-white/10 text-dm-muted" : "bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted"}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
