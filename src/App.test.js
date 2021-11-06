import { render, screen } from '@testing-library/react'
import App from './App'

test('renders tic-tac-toe@2021 footer text', () => {
  render(<App />)
  const linkElement = screen.getByText(/tic-tac-toe@2021/i)
  expect(linkElement).toBeInTheDocument()
})
