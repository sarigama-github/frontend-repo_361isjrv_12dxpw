import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="[scrollbar-color:rgba(99,102,241,0.4)_transparent]">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <Trust />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-slate-400/80">
        © {new Date().getFullYear()} Countershadow. All rights reserved.
      </footer>
    </div>
  )
}

export default App
