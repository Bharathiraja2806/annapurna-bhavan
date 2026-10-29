import Img from './Img'
import { dishes } from '../data'
export default function Popular(){
 return <section id="menu" className="py-24 px-5 bg-[#ebe0c8]"><div className="mx-auto max-w-6xl">
  <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.8rem)]">Popular dishes</h2>
  <ul className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-8">
   {dishes.slice(0,6).map(d=><li key={d.name} className="flex gap-5 items-center border-b border-leaf/15 pb-6">
    <Img src={d.img} alt={d.name} className="w-24 h-24 object-contain rounded-full bg-leaf/10 shrink-0"/>
    <div className="flex-1"><div className="flex justify-between gap-3"><h3 className="font-display text-xl font-semibold">{d.name}</h3><span className="font-semibold text-clay">{d.price}</span></div>
    <p className="text-sm mt-1 text-leaf/75">{d.desc}</p></div></li>)}</ul></div></section>}
