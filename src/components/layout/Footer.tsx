import { useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

export function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/5 py-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
            <button
              onClick={() => navigate('/')}
              className="font-syne font-extrabold text-[20px] tracking-tight text-cream hover:opacity-80 transition"
            >
              Akhil<em className="not-italic text-brand-orange">.</em>Pasha
            </button>
            <p className="text-[12px] text-brand-muted-2 max-w-xs">
              React Native Developer specializing in offline-first & device-integrated applications
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-3">
            <nav className="flex items-center gap-5">
              {NAV_LINKS.filter(l => ['home', 'projects', 'contact'].includes(l.id)).map(link => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.path)}
                  className="text-[12px] font-medium text-brand-muted-2 hover:text-brand-orange hover:underline underline-offset-4 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-4 text-[12px]">
              <a href="https://www.linkedin.com/in/akhil-pasha-mohammed-8b1b93201" target="_blank" rel="noopener noreferrer" className="text-brand-muted-2 hover:text-brand-orange transition">
                LinkedIn
              </a>
              <a href="https://github.com/akhilpasha12" target="_blank" rel="noopener noreferrer" className="text-brand-muted-2 hover:text-brand-orange transition">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-[11px] text-brand-muted-2 text-center">
          <p>📧 mohammedakhilpasha12@gmail.com</p>
          <p>© {year} Akhil Pasha — Building scalable mobile & web applications</p>
        </div>
      </div>
    </footer>
  );
}
