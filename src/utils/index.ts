import { clsx, type ClassValue } from 'clsx';
import React, { useMemo, FC } from 'react';
import emailjs from "emailjs-com";
import { ContactFormData } from '@/types';

/** Merge Tailwind class names safely */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Validate email address */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Simulate async form submission */

export const submitContactForm = async (data: ContactFormData) => {
  if (!data.email) {
    throw new Error("Email is required");
  }

  return await emailjs.send(
    process.env.REACT_APP_SERVICE_ID as string,
    process.env.REACT_APP_TEMPLATE_ID as string,
    {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      subject: data.subject,
      message: data.message,
    },
    process.env.REACT_APP_PUBLIC_KEY as string,
  );
};

/**
 * A flexible utility to calculate years of experience.
 * @param startDate - The date you joined (YYYY-MM-DD).
 * @param precision - Number of decimal places (default is 1).
 * @returns A string representing the years (e.g., "3.6").
 */
export const calculateExp = (
  startDate: string = "2022-09-17", 
  precision: number = 1
): string => {
  const start = new Date(startDate);
  const now = new Date();

  // Validate date to prevent NaN errors
  if (isNaN(start.getTime())) {
    console.error("Invalid date provided to calculateExp");
    return "0.0";
  }

  const yearsDiff = now.getFullYear() - start.getFullYear();
  const monthsDiff = now.getMonth() - start.getMonth();
  
  const totalMonths = (yearsDiff * 12) + monthsDiff;
  const totalYears = totalMonths / 12;

  // Ensures we don't return negative experience if date is in the future
  return Math.max(0, totalYears).toFixed(precision);
};