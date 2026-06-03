import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Accueil',       href: '#accueil' },
  { label: 'Services',      href: '#services' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Contact',       href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo exact */}
          <a href="#accueil" onClick={() => handleNav('#accueil')}>
            <img src="/logo.png" alt="Fermetures Djem" className="h-14 w-auto" />
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[#000957] hover:text-[#FFB200] font-semibold transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bouton appel */}
          <a
            href="tel:+33600000000"
            className="hidden md:flex items-center gap-2 bg-[#000957] hover:bg-[#000740] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm"
          >
            <Phone size={16} />
            Appeler
          </a>

          {/* Burger mobile */}
          <button
            className="md:hidden text-[#000957] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-[#000957] hover:text-[#FFB200] font-semibold py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+33600000000"
              className="flex items-center gap-2 mt-4 bg-[#000957] text-white font-semibold px-4 py-3 rounded-lg justify-center"
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
