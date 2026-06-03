import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Accueil',      href: '#accueil' },
  { label: 'Services',     href: '#services' },
  { label: 'Pourquoi nous',href: '#pourquoi-nous' },
  { label: 'Contact',      href: '#contact' },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#accueil" onClick={() => handleNav('#accueil')}>
            <Logo variant="dark" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-slate-200 hover:text-gold-400 font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA phone */}
          <a
            href="tel:+33600000000"
            className="hidden md:flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
          >
            <Phone size={16} />
            Appeler
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-slate-200 hover:text-gold-400 font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+33600000000"
              className="flex items-center gap-2 mt-4 bg-gold-500 text-white font-semibold px-4 py-3 rounded-lg justify-center"
            >
              <Phone size={16} />
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
