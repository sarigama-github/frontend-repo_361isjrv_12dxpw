import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent p-10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Ready to put an agent on the front line?</h2>
          <p className="mt-4 text-slate-200/85 max-w-2xl mx-auto">Run a simulated incident, watch the agent investigate end‑to‑end, and see the remediation plan before deploying.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">
              Book a walkthrough
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium transition-colors">
              Explore docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
