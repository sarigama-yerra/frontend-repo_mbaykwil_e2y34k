import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Interactive • Tech • Futuristic • Minimal
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl leading-tight font-semibold tracking-tight text-white">
            Full-stack growth for modern brands
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Strategy, creative, and engineering fused into one velocity team. We build performant websites, brands, and campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-white/90">
              Start a project
            </a>
            <a href="#work" className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
