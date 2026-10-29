import { Star } from 'lucide-react'
const r=[['Meera K.','The idly is the softest I have had outside my grandmother’s kitchen. Sambar was perfect.'],['Arjun S.','Dum biryani opened at the table, and the aroma alone was worth the visit.'],['Fatima R.','Unlimited meals, warm service, and the filter coffee at the end sealed it.']]
export default function Reviews(){
 return <section className="py-24 px-5"><div className="mx-auto max-w-6xl"><h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.8rem)]">What guests say</h2>
  <div className="mt-12 grid md:grid-cols-3 gap-8">{r.map(([n,t])=><figure key={n}>
   <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">{[...Array(5)].map((_,i)=><Star key={i} size={18} fill="currentColor"/>)}</div>
   <blockquote className="mt-4 text-lg leading-relaxed">“{t}”</blockquote><figcaption className="mt-4 font-semibold">{n}</figcaption></figure>)}</div></div></section>}
