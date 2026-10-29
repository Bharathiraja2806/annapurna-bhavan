import { motion } from 'framer-motion'
import Img from './Img'
import { IMG } from '../data'
const words='Tamil kitchen, lit slow.'.split(' ')
export default function Hero(){
 return <section id="home" className="relative min-h-screen flex items-end bg-leaf text-cream overflow-hidden">
  <Img src={IMG.hero} alt="Banana-leaf meals with sambar, rasam and curries at Annapurna Bhavan" eager className="absolute inset-0 w-full h-full object-cover opacity-60"/>
  <div className="absolute inset-0 bg-gradient-to-t from-leaf via-leaf/40 to-transparent"/>
  <div className="relative mx-auto max-w-7xl w-full px-5 pb-16 pt-32">
   <h1 className="font-display font-extrabold leading-[.95] text-[clamp(3rem,10vw,9rem)] max-w-4xl">
    {words.map((w,i)=><motion.span key={i} className="inline-block mr-[.25em]" initial={{y:'60%',opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.2+i*.15,duration:.9,ease:[.2,.7,.2,1]}}>{w}</motion.span>)}</h1>
   <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="mt-6 max-w-md text-lg text-cream/85">Dosa, idly, pongal, biryani and banana-leaf meals, cooked the way we have since 1987.</motion.p>
   <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="mt-8 flex gap-4 flex-wrap">
    <a href="#menu" className="bg-gold text-leaf px-7 py-3.5 rounded-full font-semibold">See the menu</a>
    <a href="#visit" className="border border-cream/60 px-7 py-3.5 rounded-full">Reserve a table</a></motion.div>
  </div></section>}
