import { motion } from 'framer-motion'
import { ShieldCheck, Bug, Radar, KeySquare, TerminalSquare, GlobeLock } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Continuous Audit',
    desc: '24/7 drift detection across cloud, network, and application surfaces.'
  },
  {
    icon: Radar,
    title: 'Autonomous Recon',
    desc: 'Maps your attack surface and prioritizes exposure by blast radius.'
  },
  {
    icon: Bug,
    title: 'Exploit Simulation',
    desc: 'Runs safe, synthetic exploits to measure real-world impact.'
  },
  {
    icon: KeySquare,
    title: 'Secrets Hygiene',
    desc: 'CI/CD and runtime scanning, least-privilege recommendations.'
  },
  {
    icon: TerminalSquare,
    title: 'Agentic Remediation',
    desc: 'Proposes, tests, and applies fixes via GitOps and tickets.'
  },
  {
    icon: GlobeLock,
    title: 'Unified Policy',
    desc: 'Codified controls enforced across environments and vendors.'
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          Built to think, designed to act
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(0,0,0,0.8)] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-white/10 border border-white/10">
                  <Icon className="w-5 h-5 text-indigo-300" />
                </div>
                <h3 className="text-white font-medium text-lg">{title}</h3>
              </div>
              <p className="text-slate-300/80 mt-3 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
