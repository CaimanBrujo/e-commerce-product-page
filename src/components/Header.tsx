import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import avatar from '../assets/images/image-avatar.png'
import iconCart from '../assets/images/icon-cart.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-close.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-grayish-blue">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img src={iconMenu} alt="Menu" className="w-5 h-5" />
          </button>

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-28" />

          {/* Desktop nav */}
          <nav className="hidden sm:flex gap-6 ml-8 text-dark-grayish-blue">
            <a href="#" className="hover:text-very-dark-blue">
              Collections
            </a>
            <a href="#" className="hover:text-very-dark-blue">
              Men
            </a>
            <a href="#" className="hover:text-very-dark-blue">
              Women
            </a>
            <a href="#" className="hover:text-very-dark-blue">
              About
            </a>
            <a href="#" className="hover:text-very-dark-blue">
              Contact
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <button className="relative">
            <img src={iconCart} alt="Cart" className="w-5 h-5" />
            {/* Example: Cart badge */}
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* Avatar */}
          <img
            src={avatar}
            alt="User avatar"
            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-primary cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black-overlay z-50">
          <div className="bg-white w-64 h-full p-6 fade-in">
            <button
              className="mb-8"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <img src={iconClose} alt="Close" className="w-5 h-5" />
            </button>
            <nav className="flex flex-col gap-4 text-very-dark-blue font-bold">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
