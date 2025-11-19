import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick, active }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-sm md:text-[15px] transition-colors ${
        active ? 'text-white' : 'text-slate-200/80 hover:text-white'
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[var(--brand-secondary,#22D3EE)] transition-all ${
          active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full'
        }`}
      />
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    const onSection = (e) => setActive(e.detail?.id || 'hero')
    window.addEventListener('sectionchange', onSection)
    // initialize from current hash
    const id = location.hash?.replace('#', '')
    if (id) setActive(id)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('sectionchange', onSection)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="inline-flex items-center gap-3 group">
          <span className="relative grid place-items-center w-8 h-8 rounded-md bg-[var(--brand-primary,#6EE7F9)]/20 border border-[var(--brand-primary,#6EE7F9)]/30">
            <img src="/favicon.svg" alt="Countershadow" className="w-5 h-5" />
          </span>
          <span className="font-semibold tracking-tight text-white group-hover:opacity-100 opacity-90">
            Countershadow
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#capabilities" active={active === 'capabilities'}>
            Capabilities
          </NavLink>
          <NavLink href="#how" active={active === 'how'}>
            How it works
          </NavLink>
          <NavLink href="#trust" active={active === 'trust'}>
            Trust
          </NavLink>
          <NavLink href="#cta" active={active === 'cta'}>
            Pricing
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="text-sm text-slate-200/80 hover:text-white">
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-white/10 transition-colors"
            style={{
              background:
                'linear-gradient(135deg,var(--brand-primary,#6EE7F9)/20,var(--brand-accent,#A78BFA)/10)',
            }}
          >
            <span className="text-slate-200">Try the agent</span>
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/10 bg-slate-900/80 backdrop-blur-lg">
          <div className="flex flex-col gap-3 pt-3">
            <NavLink href="#capabilities" onClick={() => setOpen(false)} active={active==='capabilities'}>
              Capabilities
            </NavLink>
            <NavLink href="#how" onClick={() => setOpen(false)} active={active==='how'}>
              How it works
            </NavLink>
            <NavLink href="#trust" onClick={() => setOpen(false)} active={active==='trust'}>
              Trust
            </NavLink>
            <NavLink href="#cta" onClick={() => setOpen(false)} active={active==='cta'}>
              Pricing
            </NavLink>
          </div>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 w-full justify-center px-3 py-2 rounded-md text-white text-sm border border-white/10"
            style={{
              background:
                'linear-gradient(135deg,var(--brand-primary,#6EE7F9)/20,var(--brand-accent,#A78BFA)/10)',
            }}
          >
            Launch agent
          </a>
        </div>
      )}
    </header>
  )
}
