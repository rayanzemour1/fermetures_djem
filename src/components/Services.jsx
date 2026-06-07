import { useEffect, useRef, useState } from 'react'
import { Blinds, Store, AppWindow, DoorOpen, Fence, Warehouse, Zap, Wrench } from 'lucide-react'

const services = [
  {
    icon: Blinds,
    title: 'Volets Roulants',
    desc: 'Installation, réparation et motorisation de volets roulants aluminium, PVC ou bois. Manuels ou électriques, adaptés à toutes les fenêtres.',
    tags: ['Aluminium', 'PVC', 'Motorisé', 'Sur mesure'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Store,
    title: 'Rideaux Métalliques',
    desc: 'Rideaux métalliques pour commerces, entrepôts et garages. Modèles coulissants ou enroulables, ignifugés sur demande.',
    tags: ['Commerce', 'Entrepôt', 'Anti-effraction', 'Ignifugé'],
    color: 'from-slate-500 to-slate-700',
  },
  {
    icon: AppWindow,
    title: 'Fenêtres & Baies',
    desc: 'Menuiseries PVC, aluminium ou bois double/triple vitrage. Amélioration thermique et acoustique pour un confort optimal.',
    tags: ['Double vitrage', 'Triple vitrage', 'Isolation', 'PVC / Alu'],
    color: 'from-sky-500 to-sky-700',
  },
  {
    icon: DoorOpen,
    title: 'Portails & Portes',
    desc: 'Portails battants ou coulissants, portes de garage sectionnelles ou basculantes. Automation complète avec télécommande ou smartphone.',
    tags: ['Battant', 'Coulissant', 'Sectionnelle', 'Automatique'],
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: Fence,
    title: 'Garde-Corps',
    desc: 'Garde-corps en aluminium, acier inoxydable ou verre pour balcons, terrasses et escaliers. Design contemporain et sécurité maximale.',
    tags: ['Inox', 'Verre', 'Balcon', 'Terrasse'],
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Warehouse,
    title: 'Fermetures Industrielles',
    desc: 'Barrières levantes, portails et portes à usage intensif pour sites industriels et commerciaux. Portes vitrées automatiques coulissantes pour accès commerces.',
    tags: ['Barrière levante', 'Usage intensif', 'Porte vitrée', 'Automatique'],
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: Zap,
    title: 'Motorisations',
    desc: 'Automatisation de tous vos équipements : volets, portails, rideaux. Intégration domotique, télécommande et application mobile.',
    tags: ['Domotique', 'Télécommande', 'App mobile', 'Tous supports'],
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: Wrench,
    title: 'Dépannage & SAV',
    desc: 'Intervention rapide pour tous vos dépannages. Remplacement de lames, moteurs, ressorts et systèmes de verrouillage.',
    tags: ['7j/7', 'Urgence', 'Toutes marques', 'Garantie'],
    color: 'from-orange-500 to-orange-700',
  },
]

function ServiceCard({ service, index }) {
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

  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`card group transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Top gradient band */}
      <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />

      <div className="p-6">
        <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
          <Icon size={26} className="text-gold-500" />
        </div>
        <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-gold-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Ce que nous faisons
          </p>
          <h2 className="section-title">Nos expertises</h2>
          <p className="section-subtitle mx-auto text-center">
            De l'installation à la motorisation, Fermetures Djem couvre tous vos
            besoins en fermeture, protection et aménagement extérieur.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            Obtenir un devis gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
