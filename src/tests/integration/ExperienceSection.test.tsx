import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ExperienceSection } from '../../components/sections/ExperienceSection';
import { ThemeProvider } from '../../context/ThemeContext';
import { EXPERIENCE_ITEMS, CERTIFICATIONS, LANGUAGES, WORK_STYLE_TAGS } from '../../constants';

function renderExperience() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <ExperienceSection />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('ExperienceSection', () => {
  it('renders section heading', () => {
    renderExperience();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders all experience items roles and companies', () => {
    renderExperience();
    EXPERIENCE_ITEMS.forEach(exp => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it('renders achievements for first experience item', () => {
    renderExperience();
    EXPERIENCE_ITEMS[0].achievements.forEach(ach => {
      expect(screen.getByText(ach)).toBeInTheDocument();
    });
  });

  it('renders experience tags (fixed: was hidden due to inverted condition bug)', () => {
    renderExperience();
    // Fixed bug: tags were hidden because condition was `!exp?.tags` instead of `exp?.tags`
    EXPERIENCE_ITEMS[0].tags.forEach(tag => {
      const matches = screen.getAllByText(tag);
      expect(matches.length).toBeGreaterThan(0);
    });
  });

  it('renders period badges for each job', () => {
    renderExperience();
    EXPERIENCE_ITEMS.forEach(exp => {
      expect(screen.getByText(exp.period)).toBeInTheDocument();
    });
  });

  it('renders all certifications', () => {
    renderExperience();
    CERTIFICATIONS.forEach(cert => {
      expect(screen.getByText(cert.name)).toBeInTheDocument();
      expect(screen.getByText(cert.issuer)).toBeInTheDocument();
    });
  });

  it('renders all languages with levels', () => {
    renderExperience();
    LANGUAGES.forEach(lang => {
      expect(screen.getByText(lang.name)).toBeInTheDocument();
      expect(screen.getByText(lang.level)).toBeInTheDocument();
    });
  });

  it('renders working style tags', () => {
    renderExperience();
    WORK_STYLE_TAGS.forEach(tag => {
      expect(screen.getByText(tag.label)).toBeInTheDocument();
    });
  });
});
