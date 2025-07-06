import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the header title', () => {
    render(<Header />)

    // Verifica que el texto del header aparezca
    const title = screen.getByText(/React \+ Vite \+ Tailwind CSS/i)
    expect(title).toBeInTheDocument()
  })
})
