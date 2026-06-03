import { Phone, Mail, MapPin } from 'lucide-react'

const links = {
  Services: [
    'Volets Roulants',
    'Rideaux Métalliques',
    'Fenêtres & Baies',
    'Portails & Portes',
    'Garde-Corps',
    'Vérandas & Pergolas',
    'Motorisations',
    'Dépannage & SAV',
  ],
  'Informations': [
    'À propos',
    'Réalisations',
    'Devis gratuit',
    'Urgences 7j/7',
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-slate-300">
      {/* Top band */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg px-4 py-2 inline-flex mb-4">
                <img src="/logo.png" alt="Fermetures Djem" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Votre partenaire de confiance pour tous vos projets de fermeture,
                protection et motorisation depuis 2008.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <Phone size={14} className="text-gold-500" />
                  01 23 45 67 89
                </a>
                <a href="mailto:contact@fermetures-djem.fr" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <Mail size={14} className="text-gold-500" />
                  contact@fermetures-djem.fr
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-gold-500 shrink-0" />
                  Île-de-France & grande couronne
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA block */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Urgence ?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Problème urgent ? Notre équipe intervient 7j/7 pour vous dépanner rapidement.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors w-full justify-center"
              >
                <Phone size={15} />
                Appeler maintenant
              </a>
              <div className="mt-4 p-3 bg-white/5 rounded-lg text-xs text-slate-400 text-center">
                Lun–Sam : 8h00 – 19h00<br />
                Urgences : 7j/7 · 24h/24
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {year} Fermetures Djem. Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">
            Mentions légales
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-400 transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
