import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../app/ui/header/header';

test('Header renders correctly', () => {
  render(<Header />);

  const logo = screen.getByAltText('Profile image of Rodrigo Lezama');
  expect(logo).toBeDefined();

  const title = screen.getByText('Rodrigo Lezama');
  expect(title).toBeDefined();

  const aboutLink = screen.getByText('Sobre mi');
  expect(aboutLink).toBeDefined();

  const interestsLink = screen.getByText('Intereses');
  expect(interestsLink).toBeDefined();

  const contactLink = screen.getByText('Contacto');
  expect(contactLink).toBeDefined();
});

test('Header renders on mobile', () => {
  global.innerWidth = 500;
  render(<Header />);

  const menuBtn = screen.findByTestId('menu-btn');
  expect(menuBtn).toBeDefined();
 
});