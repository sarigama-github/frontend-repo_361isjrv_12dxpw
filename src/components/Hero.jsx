import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[13px] text-slate-200/85 backdrop-blur-md mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Autonomous security analyst
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Spot, simulate, and neutralize threats — instantly.
          </h1>
          <p className="text-slate-300/90 mt-5 text-lg md:text-xl max-w-2xl">
            An agentic system that audits, reasons, and acts across your stack. From configuration drift to exploit simulation — it finds, explains, and fixes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
              Launch live demo
            </a>
            <a href="#capabilities" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium transition-colors">
              Explore capabilities
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#capabilities" className="group inline-flex flex-col items-center text-slate-300/70 hover:text-white">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <span className="mt-2 h-8 w-[1px] bg-gradient-to-b from-slate-300/60 to-transparent group-hover:from-white"></span>
        </a>
      </div>
    </section>
  )
}
