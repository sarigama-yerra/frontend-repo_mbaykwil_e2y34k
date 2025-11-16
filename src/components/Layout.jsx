import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {children}
      <footer className="py-10 text-center text-white/50 border-t border-white/10">© {new Date().getFullYear()} ServiceMedia+. All rights reserved.</footer>
    </div>
  )
}
