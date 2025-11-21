import Header from './components/Header'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(99,102,241,0.12),transparent),radial-gradient(800px_500px_at_0%_10%,rgba(236,72,153,0.08),transparent)]" />

      <div className="relative">
        <Header />
        <Hero />
        <Logos />
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App
