export default function Logo({ variant = 'dark' }) {
  // variant: 'dark' = on dark bg (header/footer), 'light' = on white bg
  const isLight = variant === 'light'
  return (
    <div className="flex items-center gap-3">
      <img src="/logo-icon.svg" alt="" className="h-10 w-auto" />
      <div className="leading-none">
        <div className={`text-[11px] font-semibold tracking-[0.28em] uppercase mb-0.5 ${
          isLight ? 'text-dark-800' : 'text-slate-200'
        }`}>
          Fermetures
        </div>
        <div className={`text-[26px] font-black tracking-widest uppercase leading-none ${
          isLight ? 'text-dark-800' : 'text-gold-400'
        }`}>
          Djem
        </div>
      </div>
    </div>
  )
}
