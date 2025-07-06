import logo from '../assets/images/logo.svg'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-grayish-blue mt-12">
      <div className="container mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-dark-grayish-blue">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Company Logo" className="w-28 mb-4" />
          <p className="text-sm">
            Sneakers Company — Bringing you the best and most comfortable
            sneakers for every occasion.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-very-dark-blue font-bold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-primary">
            Collections
          </a>
          <a href="#" className="hover:text-primary">
            Men
          </a>
          <a href="#" className="hover:text-primary">
            Women
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-2">
          <h3 className="text-very-dark-blue font-bold mb-2">Contact Us</h3>
          <p className="text-sm">support@sneakerscompany.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grayish-blue mt-6 pt-4 text-center text-grayish-blue text-xs">
        © {new Date().getFullYear()} Sneakers Company. All rights reserved.
      </div>
    </footer>
  )
}
