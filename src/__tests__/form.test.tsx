import { test, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../app/ui/contact/form';

test('Form component renders correctly', () => {
  render(<Form />);

  expect(screen.getByLabelText('Nombre')).toBeDefined();
  expect(screen.getByLabelText('E-mail')).toBeDefined();
  expect(screen.getByLabelText('Mensaje')).toBeDefined();

  expect(screen.getByRole('button', { name: 'Enviar' })).toBeDefined();
});

test('Form submission works correctly', async () => {
  render(<Form />);

  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hello, this is a test message.' } });

  fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

});