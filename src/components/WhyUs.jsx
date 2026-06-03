import { useEffect, useRef, useState } from 'react'
import {
  ShieldCheck, Clock, Award, Wrench, HeartHandshake, Zap,
} from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Expertise reconnue',
    desc: 'Plus de 15 ans d\'expérience dans le secteur de la fermeture. Nos techniciens sont certifiés et formés aux dernières technologies.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie & qualité',
    desc: 'Tous nos travaux sont garantis. Nous utilisons uniquement des matériaux et composants de première qualité, issus de fournisseurs certifiés.',
  },
  {
    icon: Clock,
    title: 'Réactivité 7j/7',
    desc: 'Service d\'urgence disponible sept jours sur sept. En cas de panne ou de sinistre, nous intervenons dans les plus brefs délais.',
  },
  {
    icon: Wrench,
    title: 'Toutes marques',
    desc: 'Nous intervenons sur toutes les marques du marché : Somfy, Bubendorff, Zurflüh, Reflection, Simu et bien d\'autres.',
  },
  {
    icon: HeartHandshake,
    title: 'Devis gratuit & transparent',
    desc: 'Devis détaillé et gratuit sans engagement. Nos prix sont affichés clairement sans mauvaise surprise à la livraison.',
  },
  {
    icon: Zap,
    title: 'Solutions connectées',
    desc: 'Intégration domotique pour piloter vos fermetures depuis votre smartphone ou assistant vocal (Alexa, Google Home).',
  },
]

function Card({ reason, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const Icon = reason.icon

  return (
    <div
      ref={ref}
      className={`flex gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="shrink-0 w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center">
        <Icon size={22} className="text-gold-500" />
      </div>
      <div>
        <h3 className="font-bold text-dark-800 mb-1">{reason.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Pourquoi nous choisir
            </p>
            <h2 className="section-title mb-6">
              L'excellence au service<br />de votre habitat
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Chez Fermetures Djem, chaque intervention est réalisée avec rigueur et
              passion. Notre équipe de techniciens qualifiés s'engage à vous fournir
              des solutions durables, esthétiques et performantes pour sécuriser et
              embellir votre maison ou votre commerce.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              De la simple réparation au chantier complet, nous adaptons notre
              approche à vos besoins et à votre budget, avec un interlocuteur unique
              du premier contact jusqu'à la réception des travaux.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              Prendre contact
            </a>
          </div>

          {/* Right – cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <Card key={r.title} reason={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
