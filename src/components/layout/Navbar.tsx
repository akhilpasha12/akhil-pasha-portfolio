import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../../utils';
import { NAV_LINKS } from '../../constants';
import { useTheme } from '../../context/ThemeContext';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "font-jakarta text-[13.5px] font-medium px-4 py-2 rounded-full transition-all duration-200",
      isActive
        ? "text-brand-orange bg-[rgba(255,109,31,0.1)] font-semibold bg-[rgba(250,243,225,0.75)] backdrop-blur-xl border border-[rgba(34,34,34,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
        : isDark
          ? "text-dm-muted hover:text-dm-text hover:bg-white/10"
          : "text-brand-muted hover:text-brand-dark hover:bg-cream-dark",
    );

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'block w-full text-left font-jakarta text-[15px] font-medium px-4 py-3 rounded-xl transition-all duration-200',
      isActive
        ? 'text-brand-orange bg-[rgba(255,109,31,0.1)] font-semibold'
        : isDark
        ? 'text-dm-muted hover:text-dm-text hover:bg-white/10'
        : 'text-brand-muted hover:text-brand-dark hover:bg-cream-dark',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300',
        isDark
          ? 'bg-dm-bg/90 border-white/10'
          : 'bg-[rgba(250,243,225,0.92)] border-[rgba(34,34,34,0.1)]',
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[66px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { navigate('/'); setMenuOpen(false); }}
          className={cn(
            'font-syne font-extrabold text-[22px] tracking-tight transition-colors',
            isDark ? 'text-dm-text' : 'text-brand-dark',
          )}
        >
          Akhil Pasha<em className="not-italic text-brand-orange">.</em>dev
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(link => (
            <NavLink key={link.id} to={link.path} end={link.path === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200',
              isDark
                ? 'text-dm-muted hover:text-brand-orange hover:bg-white/10'
                : 'text-brand-muted hover:text-brand-orange hover:bg-cream-dark',
            )}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="font-jakarta text-[13px] font-semibold bg-brand-dark text-cream px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-brand-orange hover:-translate-y-0.5 dark:bg-brand-orange dark:text-white dark:hover:bg-brand-orange-hover"
          >
            Hire Me →
          </button>
        </div>

        {/* Mobile right actions */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200',
              isDark ? 'text-dm-muted hover:text-brand-orange' : 'text-brand-muted hover:text-brand-orange',
            )}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            className={cn(
              'flex flex-col gap-[5px] p-2 rounded-xl transition-colors',
              isDark ? 'hover:bg-white/10' : 'hover:bg-cream-dark',
            )}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={cn('block h-[2px] w-6 rounded-full transition-all duration-300', isDark ? 'bg-dm-text' : 'bg-brand-dark', menuOpen && 'translate-y-[7px] rotate-45')} />
            <span className={cn('block h-[2px] w-6 rounded-full transition-all duration-300', isDark ? 'bg-dm-text' : 'bg-brand-dark', menuOpen && 'opacity-0 scale-x-0')} />
            <span className={cn('block h-[2px] w-6 rounded-full transition-all duration-300', isDark ? 'bg-dm-text' : 'bg-brand-dark', menuOpen && '-translate-y-[7px] -rotate-45')} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn('md:hidden overflow-hidden transition-all duration-300', menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0')}>
        <nav className={cn('px-5 pb-5 pt-2 flex flex-col gap-1 border-t', isDark ? 'border-white/10' : 'border-[rgba(34,34,34,0.08)]')}>
          {NAV_LINKS.map(link => (
            <NavLink key={link.id} to={link.path} end={link.path === '/'} className={mobileLinkClass} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/contact'); setMenuOpen(false); }}
            className="mt-2 w-full font-jakarta font-semibold text-sm bg-brand-dark text-cream px-4 py-3 rounded-full hover:bg-brand-orange transition-colors duration-200 dark:bg-brand-orange dark:hover:bg-brand-orange-hover"
          >
            Hire Me →
          </button>
        </nav>
      </div>
    </header>
  );
}
