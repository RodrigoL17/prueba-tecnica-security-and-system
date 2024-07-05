import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../app/ui/contact/contact';

test('Contact component renders correctly', () => {
  render(<Contact />);

  // Ensure the section title is rendered
  expect(screen.getByText('Contactame')).toBeDefined();

  // Ensure the form component is rendered
  expect(screen.getByRole('form')).toBeDefined();
});