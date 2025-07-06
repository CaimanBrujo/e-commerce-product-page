import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('light')
  })

  it('toggles the light class on html element when clicked', async () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()

    expect(document.documentElement.classList.contains('light')).toBe(false)

    await userEvent.click(button)
    expect(document.documentElement.classList.contains('light')).toBe(true)

    await userEvent.click(button)
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })
})
