import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    category: 'Volet Roulant',
    title: 'Villa résidentielle – Volets alu motorisés',
    desc: 'Installation de 8 volets roulants aluminium avec motorisation Somfy et application connectée.',
    gradient: 'from-blue-400 to-blue-600',
    pattern: 'horizontal',
  },
  {
    category: 'Rideau Métallique',
    title: 'Boulangerie – Rideau anti-effraction',
    desc: 'Pose d\'un rideau métallique à lames pleines avec motorisation et clé à l\'arrêt.',
    gradient: 'from-slate-400 to-slate-600',
    pattern: 'diagonal',
  },
  {
    category: 'Portail',
    title: 'Maison individuelle – Portail coulissant',
    desc: 'Portail aluminium coulissant motorisé avec interphone vidéo et badge de proximité.',
    gradient: 'from-amber-400 to-amber-600',
    pattern: 'grid',
  },
  {
    category: 'Véranda',
    title: 'Pavillon – Véranda bioclimatique',
    desc: 'Extension de 24 m² avec lames orientables, pergola intégrée et éclairage LED.',
    gradient: 'from-rose-400 to-rose-600',
    pattern: 'dots',
  },
  {
    category: 'Fenêtres',
    title: 'Appartement – Rénovation fenêtres PVC',
    desc: 'Remplacement de 6 fenêtres bois simple vitrage par du PVC double vitrage.',
    gradient: 'from-sky-400 to-sky-600',
    pattern: 'horizontal',
  },
  {
    category: 'Garde-Corps',
    title: 'Terrasse – Garde-corps inox & verre',
    desc: 'Garde-corps en inox brossé avec remplissage en verre feuilleté pour une terrasse panoramique.',
    gradient: 'from-emerald-400 to-emerald-600',
    pattern: 'diagonal',
  },
]

const patternStyles = {
  horizontal: {
    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 24px)',
  },
  diagonal: {
    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 16px)',
  },
  grid: {
    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)',
  },
  dots: {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
    backgroundSize: '18px 18px',
  },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`card group cursor-default transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Visual placeholder */}
      <div
        className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
      >
        <div className="absolute inset-0" style={patternStyles[project.pattern]} />
        <span className="relative text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">🏠</span>
        <div className="absolute top-3 left-3">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-dark-800 mb-2 group-hover:text-gold-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{project.desc}</p>
      </div>
    </div>
  )
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Notre savoir-faire
          </p>
          <h2 className="section-title">Quelques réalisations</h2>
          <p className="section-subtitle mx-auto text-center">
            Chaque chantier est une nouvelle fierté. Voici un aperçu de nos
            interventions chez des particuliers et professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Des centaines d'autres réalisations disponibles sur demande.{' '}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-gold-500 hover:underline font-medium"
          >
            Contactez-nous
          </a>
          .
        </p>
      </div>
    </section>
  )
}
