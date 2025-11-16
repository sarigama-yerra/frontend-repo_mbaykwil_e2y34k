import Layout from '../components/Layout'

export default function ContactPage(){
  return (
    <Layout>
      <section className="pt-32 pb-24 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-6xl font-semibold">Contact</h1>
        <p className="mt-4 text-white/70 max-w-2xl">Tell us about your goals. We’ll come back with a tailored plan.</p>
        <form className="mt-10 grid gap-4 max-w-2xl" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"/>
            <input required placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"/>
          </div>
          <input placeholder="Company" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10"/>
          <textarea required rows="6" placeholder="What are you looking to build?" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10"/>
          <button className="justify-self-start px-5 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-white/90">Send</button>
        </form>
      </section>
    </Layout>
  )
}
