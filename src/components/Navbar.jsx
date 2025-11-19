import { useState, useEffect } from 'react'
import { Menu, X, Shield, Zap, ArrowRight } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-[15px] text-slate-200/80 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${
      scrolled ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <span className="relative grid place-items-center w-8 h-8 rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500">
            <Shield className="w-4 h-4 text-white drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
          </span>
          <span className="font-semibold tracking-tight text-white group-hover:opacity-100 opacity-90">Countershadow</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#capabilities">Capabilities</NavLink>
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#trust">Trust</NavLink>
          <NavLink href="#cta">Pricing</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="text-sm text-slate-200/80 hover:text-white">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-sm border border-white/10 transition-colors">
            <Zap className="w-4 h-4 text-amber-300" />
            Try the agent
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
            <NavLink href="#capabilities" onClick={() => setOpen(false)}>Capabilities</NavLink>
            <NavLink href="#how" onClick={() => setOpen(false)}>How it works</NavLink>
            <NavLink href="#trust" onClick={() => setOpen(false)}>Trust</NavLink>
            <NavLink href="#cta" onClick={() => setOpen(false)}>Pricing</NavLink>
          </div>
          <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 w-full justify-center px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-sm border border-white/10">
            Launch agent
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  )
}
