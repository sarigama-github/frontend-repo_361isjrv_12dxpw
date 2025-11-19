import { motion } from 'framer-motion'
import { Lock, FileCheck2, Building2 } from 'lucide-react'

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          Trust by design
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <Lock className="w-6 h-6 text-indigo-300" />
            <h3 className="mt-4 text-white font-medium">Data Boundary</h3>
            <p className="mt-2 text-slate-300/80">Isolated processing, zero training on your data, and KMS-backed secrets.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <FileCheck2 className="w-6 h-6 text-indigo-300" />
            <h3 className="mt-4 text-white font-medium">Compliance</h3>
            <p className="mt-2 text-slate-300/80">SOC 2 in progress. Audit trails and deterministic replays for every action.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <Building2 className="w-6 h-6 text-indigo-300" />
            <h3 className="mt-4 text-white font-medium">Enterprise Ready</h3>
            <p className="mt-2 text-slate-300/80">SSO/SAML, SCIM, granular RBAC, and private deployments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
