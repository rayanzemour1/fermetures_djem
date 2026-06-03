import { ArrowDown, Wrench } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-800" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px)',
        }}
      />

      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Fermetures{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Djem
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-4">
            Volets roulants · Rideaux métalliques · Fenêtres · Portails
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Garde-corps · Vérandas · Motorisations — Pose, réparation et dépannage
            par des professionnels certifiés.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary text-base px-8 py-4"
            >
              <Wrench size={18} />
              Demander un devis gratuit
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline text-base px-8 py-4"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown size={24} />
      </div>
    </section>
  )
}
