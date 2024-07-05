import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Lusitana: () => ({ className: 'lusitana-mock' }),
}));

vi.mock('react-dom', () => ({
  useFormState: vi.fn(() => [{}, () => {}]),
}));
