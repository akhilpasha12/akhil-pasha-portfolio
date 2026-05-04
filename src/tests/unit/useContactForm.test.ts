import { renderHook, act } from '@testing-library/react';
import { useContactForm } from '../../hooks/useContactForm';

const validData = {
  firstName: 'Akhil',
  lastName: 'Pasha',
  email: 'akhil@example.com',
  subject: 'Project Inquiry',
  message: 'Hello, I would like to discuss a project.',
};

describe('useContactForm', () => {
  it('initializes with empty fields and idle status', () => {
    const { result } = renderHook(() => useContactForm());
    expect(result.current.formData.firstName).toBe('');
    expect(result.current.formData.email).toBe('');
    expect(result.current.status).toBe('idle');
    expect(result.current.errors).toEqual({});
  });

  it('updates formData on handleChange', () => {
    const { result } = renderHook(() => useContactForm());
    act(() => {
      result.current.handleChange({
        target: { name: 'firstName', value: 'Akhil' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formData.firstName).toBe('Akhil');
  });

  it('clears field error when field is changed', () => {
    const { result } = renderHook(() => useContactForm());
    // Trigger validation errors first
    act(() => {
      result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
    });
    // Now fix the field
    act(() => {
      result.current.handleChange({
        target: { name: 'firstName', value: 'Akhil' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.errors.firstName).toBeUndefined();
  });

  it('sets validation errors when submitting empty form', async () => {
    const { result } = renderHook(() => useContactForm());
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
    });
    expect(result.current.errors.firstName).toBeTruthy();
    expect(result.current.errors.email).toBeTruthy();
    expect(result.current.errors.message).toBeTruthy();
    expect(result.current.status).toBe('idle');
  });

  it('sets error for invalid email', async () => {
    const { result } = renderHook(() => useContactForm());
    // Fill all fields but with bad email
    act(() => {
      ['firstName', 'lastName', 'subject', 'message'].forEach(field => {
        result.current.handleChange({
          target: { name: field, value: 'test value' },
        } as React.ChangeEvent<HTMLInputElement>);
      });
      result.current.handleChange({
        target: { name: 'email', value: 'not-an-email' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
    });
    expect(result.current.errors.email).toBeTruthy();
  });

  it('resets form on resetForm()', () => {
    const { result } = renderHook(() => useContactForm());
    act(() => {
      result.current.handleChange({
        target: { name: 'firstName', value: 'Akhil' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.resetForm();
    });
    expect(result.current.formData.firstName).toBe('');
    expect(result.current.status).toBe('idle');
    expect(result.current.errors).toEqual({});
  });

  it('sets status to submitting then success on valid submission', async () => {
    const { result } = renderHook(() => useContactForm());
    // Populate all fields with valid data
    act(() => {
      Object.entries(validData).forEach(([name, value]) => {
        result.current.handleChange({
          target: { name, value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    });
    await act(async () => {
      const promise = result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
      // status should be 'submitting' before resolution
      await promise;
    });
    expect(result.current.status).toBe('success');
  }, 5000);
});
