import Layout from '../components/Layout'

export default function WorkPage(){
  return (
    <Layout>
      <section className="pt-32 pb-24 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-6xl font-semibold">Work</h1>
        <p className="mt-4 text-white/70 max-w-2xl">Case studies that blend creative craft with measurable outcomes.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[...Array(4)].map((_,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 aspect-[16/10]"></div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
