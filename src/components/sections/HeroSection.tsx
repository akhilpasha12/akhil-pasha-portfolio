import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HERO_PROFILE, HERO_STATS, TECH_BADGES, MINI_SKILLS } from '../../constants';
import { Button } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 0.68, 0, 1.1], delay },
});

export function HeroSection() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-14 items-center min-h-[calc(100vh-80px)] py-16">

        {/* Left column */}
        <div>
          {/* Availability badge */}
          <motion.div {...fadeUp(0)} className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 bg-green-500/10 border border-green-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </div>
            <span className="relative text-[12px] font-bold text-green-600 tracking-wide uppercase">
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-syne font-extrabold tracking-[-2.5px] leading-[1.05] mb-6 text-[clamp(40px,5.5vw,68px)] text-brand-dark dark:text-dm-text"
          >
            <span className="text-brand-orange">React Native &amp; React.js</span>
            <br />
            Developer
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-brand-muted dark:text-dm-muted text-base md:text-[17px] leading-[1.75] max-w-[600px] mb-8">
            {HERO_PROFILE.bio}
          </motion.p>

          {/* Tech badges */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mb-9">
            {TECH_BADGES.map(badge => (
              <span
                key={badge.id}
                className={
                  badge.highlighted
                    ? 'border border-[rgba(255,109,31,0.35)] text-brand-orange bg-[rgba(255,109,31,0.06)] rounded-lg px-3 py-1.5 text-[12px] font-medium font-mono transition-all hover:border-brand-orange'
                    : `rounded-lg px-3 py-1.5 text-[12px] font-medium font-mono transition-all hover:border-brand-orange hover:text-brand-orange border ${isDark ? 'bg-white/5 border-white/10 text-dm-muted' : 'bg-cream-dark border-[rgba(34,34,34,0.1)] text-brand-muted'}`
                }
              >
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-12">
            <Button onClick={() => navigate('/projects')} size="lg">View Projects →</Button>
            <Button variant="outline" onClick={() => navigate('/contact')} size="lg">Get In Touch</Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.id}
                className={`border rounded-2xl p-5 text-center transition-colors hover:border-brand-orange ${isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
              >
                <span className="font-syne text-[32px] font-extrabold text-brand-orange block">{stat.value}</span>
                <p className="text-[12px] text-brand-muted dark:text-dm-muted mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          className="flex flex-col gap-3.5"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.68, 0, 1.1] }}
        >
          {/* Avatar card */}
          <div className="relative group w-full max-w-[380px] mx-auto">
            <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-br from-brand-orange via-orange-500/20 to-transparent opacity-70 blur-lg group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-brand-dark/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 text-center overflow-hidden hover:scale-[1.04] transition-all duration-500">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-brand-orange/20 blur-[120px]" />
              </div>

              <div className="relative w-[130px] h-[130px] mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-brand-orange/30 blur-xl opacity-70 group-hover:opacity-100 transition" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-[3px] ring-brand-orange/50">
                  <img
                    src={HERO_PROFILE.avatarImage}
                    alt={HERO_PROFILE.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-full h-full bg-brand-orange flex items-center justify-center text-white text-[34px] font-extrabold"
                    style={{ display: 'none' }}
                  >
                    {HERO_PROFILE.avatarInitials}
                  </div>
                </div>
              </div>

              <h2 className="font-syne text-[24px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-1 tracking-tight">
                {HERO_PROFILE.name}
              </h2>
              <p className="text-[14px] text-brand-muted-2 mb-3">{HERO_PROFILE.role}</p>
              <p className="text-[12px] text-brand-muted-2 mb-6">📍 {HERO_PROFILE.location}</p>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-semibold tracking-wide">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for work
              </div>

              <div className="mt-6 h-[1px] w-20 mx-auto bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
            </div>
          </div>

          {/* Availability pill */}
          <div className="flex items-center gap-2.5 bg-[rgba(255,109,31,0.06)] border border-[rgba(255,109,31,0.2)] rounded-xl px-4 py-3.5">
            <span className="w-[7px] h-[7px] rounded-full bg-brand-orange animate-pulse_dot flex-shrink-0" />
            <div>
              <p className="text-[13px] font-semibold text-brand-orange">{HERO_PROFILE.availabilityText}</p>
              <p className="text-[11px] text-brand-muted dark:text-dm-muted mt-0.5">{HERO_PROFILE.availabilitySub}</p>
            </div>
          </div>

          {/* Mini skills */}
          <div className={`border rounded-2xl p-4 ${isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]'}`}>
            <p className="text-[11px] text-brand-muted dark:text-dm-muted font-bold uppercase tracking-[0.6px] mb-3">Core Skills</p>
            {MINI_SKILLS.map(skill => {
              const rating = skill.percentage / 20;
              const floorRating = Math.floor(rating);
              const fractionalPart = (rating % 1) * 100;
              return (
                <div key={skill.id} className="flex items-center justify-between mb-3 last:mb-0">
                  <span className="text-[13px] text-brand-dark dark:text-dm-text font-semibold min-w-[90px]">{skill.name}</span>
                  <div className="flex items-center gap-1">
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <linearGradient id={`grad-${skill.id}`}>
                          <stop offset={`${fractionalPart}%`} stopColor="#FF6D1F" />
                          <stop offset={`${fractionalPart}%`} stopColor="#E5E7EB" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {[...Array(5)].map((_, index) => {
                      const starNumber = index + 1;
                      let style: React.CSSProperties = { fill: '#E5E7EB' };
                      let extra = '';
                      if (starNumber <= floorRating) {
                        style = { fill: '#FF6D1F' };
                        extra = 'drop-shadow-[0_0_3px_rgba(255,109,31,0.4)]';
                      } else if (index === floorRating && fractionalPart > 0) {
                        style = { fill: `url(#grad-${skill.id})` };
                      }
                      return (
                        <svg key={index} viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${extra}`} style={style}>
                          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
