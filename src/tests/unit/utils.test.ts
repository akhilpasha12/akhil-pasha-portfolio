import { cn, clamp, isValidEmail, submitContactForm } from '../../utils';

describe('cn()', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('handles undefined and null values', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('returns empty string for no inputs', () => {
    expect(cn()).toBe('');
  });
});

describe('clamp()', () => {
  it('returns the value when within range', () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  it('clamps to min when below range', () => {
    expect(clamp(-5, 0, 100)).toBe(0);
  });

  it('clamps to max when above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it('handles equal min and max', () => {
    expect(clamp(50, 42, 42)).toBe(42);
  });
});

describe('isValidEmail()', () => {
  it('accepts a valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('accepts email with subdomain', () => {
    expect(isValidEmail('user@mail.example.co.uk')).toBe(true);
  });

  it('rejects email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('rejects email without domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('rejects string with spaces', () => {
    expect(isValidEmail('us er@example.com')).toBe(false);
  });
});

// describe('submitContactForm()', () => {
//   it('resolves successfully with valid email', async () => {
//     const data = { email: 'test@example.com', name: 'Test' };
//     await expect(submitContactForm(data)).resolves.toBeUndefined();
//   }, 5000);

//   it('rejects with invalid email', async () => {
//     const data = { email: 'not-an-email' };
//     await expect(submitContactForm(data)).rejects.toThrow('Invalid email');
//   }, 5000);

//   it('rejects with missing email field', async () => {
//     const data = { name: 'Test' };
//     await expect(submitContactForm(data)).rejects.toThrow();
//   }, 5000);
// });
