import Layout from '../components/Layout'

export default function ServicesPage(){
  return (
    <Layout>
      <section className="pt-32 pb-24 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-6xl font-semibold">Services</h1>
        <p className="mt-4 text-white/70 max-w-2xl">Comprehensive capabilities across strategy, creative, engineering, and growth. Built to move fast.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 h-48"></div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
