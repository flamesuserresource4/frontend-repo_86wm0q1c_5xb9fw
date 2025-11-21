import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-20%,rgba(168,85,247,0.25),transparent),radial-gradient(500px_300px_at_10%_20%,rgba(99,102,241,0.2),transparent),radial-gradient(600px_400px_at_90%_20%,rgba(34,211,238,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_60%,rgba(255,115,179,0.08),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Voice Agent Platform
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Build AI voice agents that feel superhuman
            </h1>
            <p className="mt-6 text-white/70 max-w-xl">
              Design, deploy, and scale realtime voice agents with ultra-fast latency, natural prosody, and enterprise-grade tooling.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-medium px-5 py-3 hover:bg-white/90 transition" href="#pricing">Start free</a>
              <a className="inline-flex items-center justify-center rounded-full bg-transparent text-white text-sm font-medium px-5 py-3 border border-white/20 hover:bg-white/10 transition" href="#features">See features</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/60">
              <div className="flex -space-x-3">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white/10 border border-white/15" />
                ))}
              </div>
              <p className="text-sm">Trusted by startups and enterprises</p>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[560px]">
            <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-white/5">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/40" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
