import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import { Services, Projects, Testimonials, Contact } from './components/Sections'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [services, setServices] = useState([])
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const [s, p, t] = await Promise.all([
          fetch(`${API_BASE}/api/services`).then(r=>r.json()).catch(()=>[]),
          fetch(`${API_BASE}/api/projects`).then(r=>r.json()).catch(()=>[]),
          fetch(`${API_BASE}/api/testimonials`).then(r=>r.json()).catch(()=>[]),
        ])
        setServices(s)
        setProjects(p)
        setTestimonials(t)
      } catch {}
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <Marquee items={["Performance Marketing", "Brand Strategy", "Web Experiences", "Video Production", "Content", "SEO", "Paid Social", "Automation"]} />
        </div>
      </div>

      <Services services={services} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Contact />

      <footer className="py-10 text-center text-white/50 border-t border-white/10">© {new Date().getFullYear()} ServiceMedia+. All rights reserved.</footer>
    </div>
  )
}
