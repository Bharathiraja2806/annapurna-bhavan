import Img from './Img'
import { IMG } from '../data'
export default function Story(){
 return <section id="story" className="py-24 px-5"><div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
  <Img src={IMG.interior} alt="Copper vessels and a clay stove in the Annapurna Bhavan kitchen" className="rounded-[2rem] w-full aspect-[4/5] object-cover bg-leaf2"/>
  <div><h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.8rem)] leading-tight">Three generations, one tawa.</h2>
   <p className="mt-6 max-w-prose leading-relaxed">Our founder started with a single stall near Tiruppur bus stand, selling dosa to mill workers on the early shift. The batter recipe has not changed: stone-ground rice and urad, fermented overnight, never rushed.</p>
   <p className="mt-4 max-w-prose leading-relaxed">Today we still grind spices in-house, temper in cold-pressed sesame oil and serve on banana leaf. Come hungry; the refills are generous.</p></div></div></section>}
