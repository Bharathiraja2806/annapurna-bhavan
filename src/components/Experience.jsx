const items=[['The room','Teak pillars, brass lamps and a open kitchen where you can watch the dosa tawa.'],['The service','Staff who know regulars by name and refill your leaf before you ask.'],['The evenings','Live nadaswaram on Sundays and a quiet courtyard for family tables.']]
export default function Experience(){
 return <section className="py-24 px-5 bg-leaf text-cream"><div className="mx-auto max-w-6xl">
  <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.8rem)] max-w-2xl">Eat the way the house eats.</h2>
  <div className="mt-12 grid md:grid-cols-3 gap-10">{items.map(([t,d])=><div key={t}><h3 className="font-display text-2xl text-gold">{t}</h3><p className="mt-3 text-cream/80 leading-relaxed">{d}</p></div>)}</div></div></section>}
