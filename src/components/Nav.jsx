import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
const links=[['Home','#home'],['Our Story','#story'],['Menu','#menu'],['Gallery','#specialties'],['Contact','#visit']]
export default function Nav(){
 const [open,setOpen]=useState(false)
 return <header className="fixed top-0 inset-x-0 z-50 bg-leaf/80 backdrop-blur text-cream">
  <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 h-16" aria-label="Main">
   <a href="#home" className="font-display text-xl font-semibold tracking-tight">Annapurna Bhavan</a>
   <ul className="hidden md:flex gap-8 text-sm">{links.map(([l,h])=><li key={l}><a className="hover:text-gold transition-colors" href={h}>{l}</a></li>)}</ul>
   <a href="#visit" className="hidden md:inline-block bg-gold text-leaf px-5 py-2.5 rounded-full text-sm font-semibold">Reserve a table</a>
   <button className="md:hidden p-3 -mr-3" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </nav>
  <AnimatePresence>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="md:hidden overflow-hidden bg-leaf">
   <ul className="px-5 pb-6 space-y-1">{links.map(([l,h])=><li key={l}><a onClick={()=>setOpen(false)} className="block py-3 text-lg" href={h}>{l}</a></li>)}
   <li><a href="#visit" onClick={()=>setOpen(false)} className="mt-3 block text-center bg-gold text-leaf py-3 rounded-full font-semibold">Reserve a table</a></li></ul></motion.div>}</AnimatePresence>
 </header>}
