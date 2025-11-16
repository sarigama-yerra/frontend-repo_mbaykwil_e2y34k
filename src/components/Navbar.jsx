import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          isActive
            ? 'bg-white/20 text-white'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 grid place-items-center text-white shadow-inner">
                <Sparkles size={18} />
              </div>
              <span className="text-white font-semibold tracking-wide">ServiceMedia+</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navItem('/', 'Home')}
              {navItem('/services', 'Services')}
              {navItem('/work', 'Work')}
              {navItem('/about', 'About')}
              {navItem('/contact', 'Contact')}
              <a
                href="#contact"
                className="ml-2 px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-white/90"
              >
                Start a Project
              </a>
            </nav>
            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-2">
              {navItem('/', 'Home')}
              {navItem('/services', 'Services')}
              {navItem('/work', 'Work')}
              {navItem('/about', 'About')}
              {navItem('/contact', 'Contact')}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
