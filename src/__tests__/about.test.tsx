import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import About from '@/app/ui/about/about';

test('About renders correctly', () => {
  const { getByText } = render(<About />);

  const titleElement = getByText(/Sobre mí/i);
  expect(titleElement).toBeDefined();

  const paragraph1 = getByText(/Rodrigo Lezama/i);
  expect(paragraph1).toBeDefined();

  const paragraph2 = getByText(/Actualmente/i);
  expect(paragraph2).toBeDefined();

  const paragraph3 = getByText(/Me he desempeñado/i);
  expect(paragraph3).toBeDefined();
});

test('About renders with correct links', () => {
  const { getByText } = render(<About />);

  const externalLink = getByText('NoCountry');
  expect(externalLink.tagName).toBe('A');
  expect(externalLink.getAttribute('href')).toBe('https://www.nocountry.tech/');
});