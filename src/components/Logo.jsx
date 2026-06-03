const barlow = "'Barlow Condensed', 'Arial Narrow', sans-serif"

export default function Logo({ variant = 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div className="flex items-center gap-3">
      <img src="/logo-icon.svg" alt="" className="h-11 w-auto" />
      <div className="leading-none select-none">
        <div
          style={{ fontFamily: barlow, letterSpacing: '0.25em' }}
          className={`text-sm font-semibold uppercase mb-0.5 ${isDark ? 'text-slate-200' : 'text-[#000957]'}`}
        >
          Fermetures
        </div>
        <div
          style={{ fontFamily: barlow, letterSpacing: '0.08em' }}
          className={`text-3xl font-black uppercase leading-none ${isDark ? 'text-[#FFB200]' : 'text-[#000957]'}`}
        >
          Djem
        </div>
      </div>
    </div>
  )
}
