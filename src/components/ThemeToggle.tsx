import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      html.classList.add('light')
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('light')
    const isNowLight = html.classList.contains('light')
    localStorage.setItem('theme', isNowLight ? 'light' : 'dark')
    setIsLight(isNowLight)
  }

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme">
      {isLight ? (
        <Moon className="w-5 h-5 text-text hover:text-accent-soft transition-opacity duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-text hover:text-accent-soft transition-opacity duration-300" />
      )}
    </button>
  )
}
