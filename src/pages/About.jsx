import Layout from '../components/Layout'

export default function AboutPage(){
  return (
    <Layout>
      <section className="pt-32 pb-24 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-6xl font-semibold">About</h1>
        <p className="mt-4 text-white/70 max-w-2xl">We are a cross-functional team of strategists, designers, engineers, and makers. We value clarity, speed, and results.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 h-40"></div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
