import { motion } from 'framer-motion';
import { PROJECTS, PROJECT_FILTERS } from '../../constants';
import { SectionHeader, FilterBar, Badge } from '../ui';
import { useProjectFilter } from '../../hooks';
import { useTheme } from '../../context/ThemeContext';

export function ProjectsSection() {
  const { activeCategory, setFilter } = useProjectFilter();
  const { isDark } = useTheme();

  const visibleProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div>
      <SectionHeader
        title="Featured"
        accent="Projects"
        subtitle="Real-world products shipped and in production"
      />

      <FilterBar
        options={PROJECT_FILTERS}
        active={activeCategory}
        onSelect={(v) => setFilter(v)}
        activeClass="bg-brand-dark border-brand-dark text-cream"
      />

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <>
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={`border rounded-[20px] overflow-hidden transition-all duration-300 hover:border-brand-orange hover:-translate-y-1 group ${isDark ? "bg-dm-card border-white/10" : "bg-white border-[rgba(34,34,34,0.1)]"}`}
            >
              {/* Card top */}
              <div
                className="h-[130px] flex items-center justify-center relative"
                style={{ backgroundColor: project.bgColor }}
              >
                <span className="text-[50px] relative z-10">
                  {project.emoji}
                </span>
                {project.featured && (
                  <span className="absolute top-2.5 right-2.5 bg-brand-orange text-white rounded-full px-2.5 py-0.5 text-[10px] font-bold z-10">
                    Featured
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-5">
                <Badge
                  variant={project.catVariant as "orange" | "dark" | "muted"}
                  className="mb-2.5"
                >
                  {project.catLabel}
                </Badge>

                <h3
                  className={`font-syne text-[18px] font-bold mb-2 ${isDark ? "text-dm-text" : "text-brand-dark"}`}
                >
                  {project.title}
                </h3>
                <p className="text-[13px] text-brand-muted dark:text-dm-muted leading-[1.6] mb-3.5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`border rounded-md px-2 py-0.5 text-[11px] font-mono ${isDark ? "bg-white/5 border-white/10 text-dm-muted" : "bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border-[1.5px] border-brand-dark bg-brand-dark text-cream rounded-lg py-1.5 text-[12px] font-semibold font-jakarta transition-all hover:bg-brand-orange hover:border-brand-orange"
                      >
                        {project.demoLabel}
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border-[1.5px] rounded-lg px-4 py-1.5 text-[12px] font-semibold font-jakarta transition-all hover:border-brand-orange hover:text-brand-orange ${
                          isDark
                            ? "border-white/20 text-dm-muted"
                            : "border-[rgba(34,34,34,0.1)] text-brand-muted"
                        }`}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </>
      </motion.div>
    </div>
  );
}
