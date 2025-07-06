import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full h-20 text-muted py-6 px-6 border-t border-border flex items-center justify-center fade-in">
      <small className="text-sm text-center flex gap-2">
        © {new Date().getFullYear()} Template |
        <a
          href="https://github.com/CaimanBrujo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Caiman Brujo GitHub profile"
          className="inline-flex items-center gap-1 hover:text-title text-muted"
        >
          <Github className="w-4 h-4" />
          Caiman Brujo
        </a>{' '}
        | All rights reserved.
      </small>
    </footer>
  )
}
