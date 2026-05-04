import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutSection } from '../../components/sections/AboutSection';
import { ThemeProvider } from '../../context/ThemeContext';
import { PERSONAL_INFO, EDUCATION, INTERESTS } from '../../constants';

function renderAbout() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <AboutSection />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('AboutSection', () => {
  it('renders the section heading', () => {
    renderAbout();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Me')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    renderAbout();
    expect(screen.getByText('The story behind the code')).toBeInTheDocument();
  });

  it('renders all personal info labels', () => {
    renderAbout();
    PERSONAL_INFO.forEach(info => {
      expect(screen.getByText(info.label)).toBeInTheDocument();
    });
  });

  it('renders all personal info values', () => {
    renderAbout();
    PERSONAL_INFO.forEach(info => {
      expect(screen.getByText(info.value)).toBeInTheDocument();
    });
  });

  it('renders the Education heading', () => {
    renderAbout();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders all education entries', () => {
    renderAbout();
    EDUCATION.forEach(edu => {
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
    });
  });

  it('renders all interest tags', () => {
    renderAbout();
    INTERESTS.forEach(interest => {
      expect(screen.getByText(interest.label)).toBeInTheDocument();
    });
  });

  it('renders a download resume link', () => {
    renderAbout();
    expect(screen.getByText('Download Resume ↓')).toBeInTheDocument();
  });
});
