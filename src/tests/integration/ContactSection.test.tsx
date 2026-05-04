import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactSection } from '../../components/sections/ContactSection';
import { ThemeProvider } from '../../context/ThemeContext';
import { CONTACT_CARDS, AVAILABILITY_INFO } from '../../constants';

function renderContact() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <ContactSection />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe('ContactSection', () => {
  it('renders section heading', () => {
    renderContact();
    expect(screen.getByText("Let's")).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    renderContact();
    expect(screen.getByText('Send a Message')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@company.com')).toBeInTheDocument();
  });

  it('renders all contact cards', () => {
    renderContact();
    CONTACT_CARDS.forEach(card => {
      expect(screen.getByText(card.label)).toBeInTheDocument();
      expect(screen.getByText(card.value)).toBeInTheDocument();
    });
  });

  it('renders the availability banner', () => {
    renderContact();
    expect(screen.getByText(AVAILABILITY_INFO.heading)).toBeInTheDocument();
    expect(screen.getByText(AVAILABILITY_INFO.badge)).toBeInTheDocument();
  });

  it('shows validation errors when form submitted empty', async () => {
    renderContact();
    fireEvent.click(screen.getByText('Send Message →'));
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });

  it('shows invalid email error for bad email', async () => {
    renderContact();
    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { name: 'firstName', value: 'Akhil' } });
    fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { name: 'lastName', value: 'Pasha' } });
    fireEvent.change(screen.getByPlaceholderText('you@company.com'), { target: { name: 'email', value: 'notvalid' } });
    fireEvent.change(screen.getByPlaceholderText('Project Inquiry'), { target: { name: 'subject', value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Tell me about your project...'), { target: { name: 'message', value: 'Hello' } });
    fireEvent.click(screen.getByText('Send Message →'));
    await waitFor(() => {
      expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    });
  });

  it('clears error when user types in a field', async () => {
    renderContact();
    // Trigger errors first
    fireEvent.click(screen.getByText('Send Message →'));
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
    });
    // Now type in the field
    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { name: 'firstName', value: 'Akhil' } });
    await waitFor(() => {
      expect(screen.queryByText('First name is required')).not.toBeInTheDocument();
    });
  });
});
