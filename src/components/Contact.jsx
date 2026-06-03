import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const infos = [
  { icon: Phone,  label: 'Téléphone',          value: '01 23 45 67 89',               href: 'tel:+33123456789' },
  { icon: Mail,   label: 'Email',               value: 'contact@fermetures-djem.fr',    href: 'mailto:contact@fermetures-djem.fr' },
  { icon: MapPin, label: "Zone d'intervention", value: 'Île-de-France & grande couronne', href: null },
  { icon: Clock,  label: 'Horaires',            value: 'Lun–Sam : 8h–19h · Urgences 7j/7', href: null },
]

const services = [
  'Volet Roulant',
  'Rideau Métallique',
  'Fenêtre / Baie vitrée',
  'Portail / Porte de garage',
  'Garde-Corps',
  'Véranda / Pergola',
  'Motorisation',
  'Dépannage / SAV',
]

const emptyForm = { name: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(emptyForm)
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors]   = useState({})
  const [sendError, setSendError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Champ obligatoire'
    if (!form.phone.trim())   e.phone   = 'Champ obligatoire'
    if (!form.email.trim())   e.email   = 'Champ obligatoire'
    if (!form.service)        e.service = 'Veuillez choisir un service'
    if (!form.message.trim()) e.message = 'Champ obligatoire'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSendError('')
    setSending(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          service_type: form.service,
          message:      form.message,
        },
        PUBLIC_KEY
      )
      setSent(true)
    } catch {
      setSendError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.")
    } finally {
      setSending(false)
    }
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Contactez-nous
          </p>
          <h2 className="section-title">Demandez votre devis gratuit</h2>
          <p className="section-subtitle mx-auto text-center">
            Réponse garantie sous 24h. Devis sur site offert et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Infos */}
          <div className="lg:col-span-2 space-y-6">
            {infos.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="text-dark-800 font-medium hover:text-gold-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-dark-800 font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-6 rounded-2xl overflow-hidden bg-slate-100 h-52 flex items-center justify-center border border-slate-200">
              <div className="text-center text-slate-400">
                <MapPin size={32} className="mx-auto mb-2 text-gold-400" />
                <p className="text-sm font-medium">Île-de-France</p>
                <p className="text-xs">Intervention dans un rayon de 80 km</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={56} className="text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-dark-800 mb-2">Demande envoyée !</h3>
                <p className="text-slate-500">
                  Merci pour votre demande. Nous vous recontactons dans les 24 heures.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(emptyForm) }}
                  className="mt-6 text-gold-500 hover:underline text-sm font-medium"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nom complet *" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange('name')}
                      className={inputClass(errors.name)}
                    />
                  </Field>
                  <Field label="Téléphone *" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className={inputClass(errors.phone)}
                    />
                  </Field>
                </div>

                <Field label="Adresse email *" error={errors.email}>
                  <input
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={inputClass(errors.email)}
                  />
                </Field>

                <Field label="Service souhaité *" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={handleChange('service')}
                    className={inputClass(errors.service)}
                  >
                    <option value="">-- Choisissez un service --</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Votre message *" error={errors.message}>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet ou votre problème..."
                    value={form.message}
                    onChange={handleChange('message')}
                    className={inputClass(errors.message) + ' resize-none'}
                  />
                </Field>

                {sendError && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {sendError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <><Loader2 size={18} className="animate-spin" /> Envoi en cours…</>
                  ) : (
                    <><Send size={18} /> Envoyer ma demande</>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées
                  uniquement pour répondre à votre demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function inputClass(error) {
  return `w-full rounded-xl border px-4 py-3 text-dark-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-gold-400 ${
    error ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-gold-400 focus:bg-white'
  }`
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
