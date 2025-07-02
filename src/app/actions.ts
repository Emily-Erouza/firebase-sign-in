"use server";

import { redirect } from 'next/navigation';
import {
  LoginSchema,
  SignUpSchema,
  type LoginInput,
  type SignUpInput,
} from '@/lib/schemas';

export async function signUp(values: SignUpInput) {
  const parsed = SignUpSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: 'Invalid form data.',
    };
  }

  // Simulate API call/database insertion
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, you would handle potential errors here (e.g., email already in use).

  redirect('/dashboard');
}

export async function logIn(values: LoginInput) {
  const parsed = LoginSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: 'Invalid form data.',
    };
  }

  // Simulate API call/database check
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, you would check credentials against the database.
  // For this example, we'll simulate a failure for a specific email.
  if (values.email === 'fail@example.com') {
    return {
      error: 'Invalid email or password.',
    };
  }

  redirect('/dashboard');
}
