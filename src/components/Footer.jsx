export default function Footer(){
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-sm">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400" />
          <span>© 2025 Super Voice, Inc.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
