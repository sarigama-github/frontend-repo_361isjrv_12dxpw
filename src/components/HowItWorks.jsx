import { motion } from 'framer-motion'

const steps = [
  { k: 'Sense', d: 'Ingests logs, configs, and telemetry. Builds a real-time world model.' },
  { k: 'Reason', d: 'Runs hypothesis-driven analysis with chain-of-thought and tool use.' },
  { k: 'Act', d: 'Executes playbooks via approvals or autonomously with guardrails.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          How the agent operates
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="relative rounded-2xl border border-white/10 p-6 bg-white/[0.04]"
            >
              <div className="text-sm text-indigo-300/90">Step {i + 1}</div>
              <div className="mt-2 text-xl text-white font-medium">{s.k}</div>
              <p className="mt-3 text-slate-300/80 leading-relaxed">{s.d}</p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
