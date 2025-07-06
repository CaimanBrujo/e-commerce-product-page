import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header
      role="banner"
      className="w-full h-20 px-4 sm:px-6 border-b border-border flex items-center justify-center relative fade-in"
    >
      <h1 className="text-xl font-semibold">React + Vite + Tailwind CSS</h1>

      <div className="absolute right-4 sm:right-6">
        <ThemeToggle />
      </div>
    </header>
  )
}
