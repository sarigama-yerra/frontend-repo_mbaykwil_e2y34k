import { motion } from 'framer-motion'
import { Rocket, Sparkles, Globe2, Video, Quote } from 'lucide-react'

export function Services({ services = [] }) {
  const icons = { rocket: Rocket, sparkles: Sparkles, 'globe-2': Globe2, video: Video }
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-5xl font-semibold">What we do</h2>
          <p className="text-white/60 max-w-sm">Data-backed strategy meets design and engineering excellence.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Rocket
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl transition-transform group-hover:scale-125" />
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center">
                  <Icon className="text-emerald-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.short}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Projects({ projects = [] }) {
  return (
    <section id="work" className="relative py-24 bg-black text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-5xl font-semibold">Selected work</h2>
          <p className="text-white/60">High-impact outcomes shipped fast.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link || '#'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  {p.tags?.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="text-white/70">{p.summary}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ testimonials = [] }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold">Loved by teams</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Quote className="text-emerald-300" />
              <p className="mt-3 text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">{t.author} • {t.role}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">Let’s build what’s next</h2>
            <p className="mt-3 text-white/70">Tell us about your goals. We’ll come back with a tailored plan.</p>
          </div>
          <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"/>
              <input required placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"/>
            </div>
            <input placeholder="Company" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10"/>
            <textarea required rows="5" placeholder="What are you looking to build?" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10"/>
            <button className="justify-self-start px-5 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-white/90">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
