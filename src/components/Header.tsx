import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import avatar from '../assets/images/image-avatar.png'
import iconCart from '../assets/images/icon-cart.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-close.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-light-grayish-blue">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 h-20 md:h-24">
        {/* Left section */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <img src={iconMenu} alt="Menu" className="w-5 h-5" />
          </button>

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-32 md:w-36" />

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8 text-dark-grayish-blue text-base font-medium">
            {['Collections', 'Men', 'Women', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="relative group hover:text-very-dark-blue transition-colors"
              >
                {link}
                <span className="absolute bottom-[-1.2rem] left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Cart */}
          <button className="relative group" aria-label="View cart">
            <img
              src={iconCart}
              alt="Cart"
              className="w-6 h-6 group-hover:opacity-70 transition"
            />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full px-1.5">
              3
            </span>
          </button>

          {/* Avatar */}
          <img
            src={avatar}
            alt="User avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-transparent hover:border-primary cursor-pointer transition"
          />
        </div>
      </div>

      {/* Mobile navigation */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black-overlay transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-50 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } z-40`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sliding menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          className="m-6"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <img src={iconClose} alt="Close" className="w-5 h-5" />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-very-dark-blue font-bold text-lg px-6">
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-primary block transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
