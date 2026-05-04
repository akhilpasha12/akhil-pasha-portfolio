import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { NAV_LINKS } from '../../constants';

function renderNavbar(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('Navbar', () => {
  it('renders the logo text', () => {
    renderNavbar();
    expect(screen.getByText(/Akhil Pasha/i)).toBeInTheDocument();
  });

  it('renders all nav links on desktop', () => {
    renderNavbar();
    NAV_LINKS.forEach(link => {
      // Each link appears at least once (desktop + mobile drawer)
      const els = screen.getAllByText(link.label);
      expect(els.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders the Hire Me button', () => {
    renderNavbar();
    const hireBtns = screen.getAllByText('Hire Me →');
    expect(hireBtns.length).toBeGreaterThanOrEqual(1);
  });

  it('renders a theme toggle button', () => {
    renderNavbar();
    const toggleBtns = screen.getAllByLabelText('Toggle theme');
    expect(toggleBtns.length).toBeGreaterThanOrEqual(1);
  });

  it('toggles mobile menu open and closed', () => {
    renderNavbar();
    const menuBtn = screen.getByLabelText('Toggle navigation menu');
    // Initially closed — drawer has max-h-0
    fireEvent.click(menuBtn);
    // After click — aria-expanded should be true
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu when a nav link is clicked', () => {
    renderNavbar();
    const menuBtn = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    // Click any mobile nav link (they have onClick that closes menu)
    const mobileLinks = screen.getAllByText('About');
    fireEvent.click(mobileLinks[mobileLinks.length - 1]);
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
  });
});
