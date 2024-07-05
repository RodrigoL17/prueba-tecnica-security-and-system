import { afterAll, beforeAll, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import IntersectionObserverMock from '../../__mocks__/intersectionObserver'
import Home from '../app/page'


beforeAll(() => {
  global.IntersectionObserver = IntersectionObserverMock
})


test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Sobre mí' })).toBeDefined()
})

afterAll(() => {
  delete global.IntersectionObserver
})