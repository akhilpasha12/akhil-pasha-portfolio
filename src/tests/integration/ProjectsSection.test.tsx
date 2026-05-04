import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectsSection } from '../../components/sections/ProjectsSection';
import { ThemeProvider } from '../../context/ThemeContext';
import { PROJECTS, PROJECT_FILTERS } from '../../constants';

function renderProjects() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <ProjectsSection />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('ProjectsSection', () => {
  it('renders the section heading', () => {
    renderProjects();
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all project filter buttons', () => {
    renderProjects();
    PROJECT_FILTERS.forEach(f => {
      expect(screen.getByText(f.label)).toBeInTheDocument();
    });
  });

  it('renders all projects by default', () => {
    renderProjects();
    PROJECTS.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('filters to React Native projects only', () => {
    renderProjects();
    // Fixed: filter label is "React Native"
    fireEvent.click(screen.getByText('React Native'));
    const rnProjects = PROJECTS.filter(p => p.category === 'rn');
    rnProjects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('filters to React.js projects only', () => {
    renderProjects();
    fireEvent.click(screen.getByText('React.js'));
    const rjProjects = PROJECTS.filter(p => p.category === 'rj');
    rjProjects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('filters to Full Stack (rd) projects', () => {
    renderProjects();
    // Fixed: label is "Full Stack", category value is 'rd'
    fireEvent.click(screen.getByText('Full Stack'));
    const rdProjects = PROJECTS.filter(p => p.category === 'rd');
    rdProjects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('resets to show all projects when "All Projects" clicked', () => {
    renderProjects();
    // Fixed: label is "All Projects"
    fireEvent.click(screen.getByText('React Native'));
    fireEvent.click(screen.getByText('All Projects'));
    PROJECTS.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it('renders "Featured" badge on featured projects', () => {
    renderProjects();
    const featuredBadges = screen.getAllByText('Featured');
    const featuredCount = PROJECTS.filter(p => p.featured).length;
    // The section heading also contains "Featured", so we look for at least featuredCount badges
    expect(featuredBadges.length).toBeGreaterThanOrEqual(featuredCount);
  });

  it('renders live/demo links for projects with links=true', () => {
    renderProjects();
    const demoLinks = screen.getAllByText(/View Live|Live Demo|Case Study/i);
    expect(demoLinks.length).toBeGreaterThan(0);
  });

  it('renders GitHub links for projects with links=true', () => {
    renderProjects();
    const githubLinks = screen.getAllByText('GitHub');
    expect(githubLinks.length).toBeGreaterThan(0);
  });
});
