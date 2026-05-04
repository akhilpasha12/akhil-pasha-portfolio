import { useState, useCallback } from 'react';
import type { ContactFormData, FormStatus } from '../types';
import { isValidEmail, submitContactForm } from '../utils';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: FormErrors;
  status: FormStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  return errors;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

const handleSubmit = useCallback(
  async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 2. Prevent multiple submissions
    if (status === "submitting") return;

    // 3. Start submitting
    setStatus("submitting");

    try {
      // 4. Call EmailJS service
      await submitContactForm(formData);

      // 5. Success state
      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    } catch (error) {
      console.error("Submit error:", error);

      // 6. Error state
      setStatus("error");
    }
  },
  [formData, status],
);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setStatus('idle');
  }, []);

  return { formData, errors, status, handleChange, handleSubmit, resetForm };
}
