import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { ThemeProvider } from '../../context/ThemeContext';
import { SKILLS, SKILL_FILTERS, TOOLS } from '../../constants';

function renderSkills() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <SkillsSection />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    renderSkills();
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders all skill filter buttons', () => {
    renderSkills();
    SKILL_FILTERS.forEach(f => {
      expect(screen.getByText(f.label)).toBeInTheDocument();
    });
  });

  it('renders all skills by default (all filter)', () => {
    renderSkills();
    SKILLS.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('filters to mobile skills when Mobile is clicked', () => {
    renderSkills();
    fireEvent.click(screen.getByText('Mobile'));
    const mobileSkills = SKILLS.filter(s => s.category.includes('mobile' as any));
    mobileSkills.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('filters to frontend skills when Frontend is clicked', () => {
    renderSkills();
    fireEvent.click(screen.getByText('Frontend'));
    const frontendSkills = SKILLS.filter(s => s.category.includes('frontend' as any));
    frontendSkills.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('renders Tools & Ecosystem heading', () => {
    renderSkills();
    expect(screen.getByText('Tools & Ecosystem')).toBeInTheDocument();
  });

  it('renders all tools', () => {
    renderSkills();
    TOOLS.forEach(tool => {
      expect(screen.getByText(tool.label)).toBeInTheDocument();
    });
  });

  it('resets to all skills when All filter is clicked', () => {
    renderSkills();
    fireEvent.click(screen.getByText('Mobile'));
    fireEvent.click(screen.getByText('All'));
    SKILLS.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });
});
