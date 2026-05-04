import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Tag } from '../../components/ui/Tag';
import { FilterBar } from '../../components/ui/FilterBar';
import { SectionHeader } from '../../components/ui/SectionHeader';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading=true', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('Sending…')).toBeInTheDocument();
  });

  it('is disabled when disabled=true', () => {
    render(<Button disabled>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders primary variant by default', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-brand-orange');
  });
});

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>React Native</Badge>);
    expect(screen.getByText('React Native')).toBeInTheDocument();
  });

  it('applies orange variant classes', () => {
    render(<Badge variant="orange">Orange</Badge>);
    expect(screen.getByText('Orange')).toHaveClass('text-brand-orange');
  });

  it('applies muted variant by default', () => {
    render(<Badge>Default</Badge>);
    const el = screen.getByText('Default');
    expect(el).toBeInTheDocument();
  });
});

describe('Tag', () => {
  it('renders label', () => {
    render(<Tag label="TypeScript" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('applies highlighted styles when highlighted=true', () => {
    render(<Tag label="Highlighted" highlighted />);
    expect(screen.getByText('Highlighted')).toHaveClass('text-brand-orange');
  });

  it('applies muted styles when not highlighted', () => {
    render(<Tag label="Muted" />);
    expect(screen.getByText('Muted')).toHaveClass('text-brand-muted');
  });
});

describe('FilterBar', () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'web', label: 'Web' },
  ];

  it('renders all filter options', () => {
    render(<FilterBar options={options} active="all" onSelect={jest.fn()} />);
    options.forEach(opt => {
      expect(screen.getByText(opt.label)).toBeInTheDocument();
    });
  });

  it('calls onSelect with correct value on click', () => {
    const onSelect = jest.fn();
    render(<FilterBar options={options} active="all" onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Mobile'));
    expect(onSelect).toHaveBeenCalledWith('mobile');
  });

  it('applies active class to the active option', () => {
    render(<FilterBar options={options} active="mobile" onSelect={jest.fn()} />);
    expect(screen.getByText('Mobile')).toHaveClass('bg-brand-orange');
  });
});

describe('SectionHeader', () => {
  it('renders title and accent', () => {
    render(
      <MemoryRouter>
        <SectionHeader title="Technical" accent="Skills" subtitle="What I bring" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(
      <MemoryRouter>
        <SectionHeader title="Let's" accent="Connect" subtitle="Open to opportunities" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Open to opportunities')).toBeInTheDocument();
  });

  it('accent text has orange color class', () => {
    render(
      <MemoryRouter>
        <SectionHeader title="Work" accent="Experience" subtitle="subtitle" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Experience')).toHaveClass('text-brand-orange');
  });
});
