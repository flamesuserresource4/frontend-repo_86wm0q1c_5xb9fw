import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = (
    <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
      <a href="#product" className="hover:text-white transition">Product</a>
      <a href="#features" className="hover:text-white transition">Features</a>
      <a href="#pricing" className="hover:text-white transition">Pricing</a>
      <a href="#faq" className="hover:text-white transition">FAQ</a>
    </nav>
  )

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30" />
          <span className="text-white font-semibold tracking-tight">Super Voice</span>
        </a>

        {nav}

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white text-sm px-4 py-2 border border-white/15 hover:bg-white/15 transition">Get started</a>
        </div>

        <button className="md:hidden text-white" aria-label="Menu" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-md md:hidden">
          <div className="absolute top-4 right-4">
            <button className="text-white" onClick={() => setOpen(false)} aria-label="Close">
              <X size={28} />
            </button>
          </div>
          <div className="p-6 pt-20 space-y-6">
            <a href="#product" className="block text-lg text-white/90">Product</a>
            <a href="#features" className="block text-lg text-white/90">Features</a>
            <a href="#pricing" className="block text-lg text-white/90">Pricing</a>
            <a href="#faq" className="block text-lg text-white/90">FAQ</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white text-sm px-4 py-2 border border-white/15">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}
