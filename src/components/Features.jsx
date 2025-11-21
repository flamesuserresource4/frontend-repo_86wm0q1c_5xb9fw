import { Sparkles, Shield, Gauge, Workflow } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Natural prosody',
    desc: 'Expressive, human-like delivery with precise breaks, emphasis, and intonation.'
  },
  {
    icon: Gauge,
    title: 'Ultra-low latency',
    desc: 'Turn-by-turn interaction with sub-200ms response for real conversations.'
  },
  {
    icon: Workflow,
    title: 'Programmable flows',
    desc: 'Design complex call flows, tools, and memory with a visual builder.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Audit logs, PII controls, and SOC2-ready infrastructure from day one.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_20%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need to ship voice agents</h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto">From first prototype to production scale, build end-to-end with the platform teams love.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon:Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <Icon className="h-6 w-6 text-white mb-3" />
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-sm text-white/70 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
