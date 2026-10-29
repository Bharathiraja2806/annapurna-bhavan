import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Img from './Img'
import { dishes } from '../data'
import { useReducedMotion } from '../hooks'
gsap.registerPlugin(ScrollTrigger)
const Card=({d})=><article className="h-card shrink-0 w-[78vw] sm:w-[46vw] lg:w-[30vw] relative">
 <div className="aspect-[4/5] rounded-[2rem] bg-leaf2 overflow-hidden flex items-center justify-center">
  <Img src={d.img} alt={d.name} className="h-img plate w-4/5 object-contain"/></div>
 <div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="font-display text-2xl font-semibold">{d.name}</h3><span className="text-gold font-semibold">{d.price}</span></div>
 <p className="mt-1 text-cream/75 text-sm max-w-xs">{d.desc}</p></article>
export default function HorizontalGallery(){
 const reduced=useReducedMotion(),root=useRef(null),track=useRef(null)
 useLayoutEffect(()=>{
  if(reduced)return
  const ctx=gsap.context(()=>{
   const dist=()=>track.current.scrollWidth-window.innerWidth
   const tween=gsap.to(track.current,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:root.current,start:'top top',end:()=>'+='+dist(),pin:true,scrub:1,anticipatePin:1,invalidateOnRefresh:true}})
   gsap.utils.toArray('.h-card').forEach(c=>{
    gsap.fromTo(c.querySelector('.h-img'),{xPercent:-12,scale:.85},{xPercent:12,scale:1.05,ease:'none',scrollTrigger:{trigger:c,containerAnimation:tween,start:'left right',end:'right left',scrub:true}})
    gsap.fromTo(c,{opacity:.35},{opacity:1,ease:'none',scrollTrigger:{trigger:c,containerAnimation:tween,start:'left 95%',end:'left 55%',scrub:true}})})
  },root)
  return()=>ctx.revert()
 },[reduced])
 return <section id="specialties" ref={root} className={`bg-leaf text-cream ${reduced?'py-20':'h-screen overflow-hidden flex flex-col justify-center'}`}>
  <div className="px-5 mx-auto max-w-7xl w-full mb-8"><h2 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)]">Our specialties</h2>
   <p className="text-cream/75 mt-2">Keep scrolling. Seven dishes the kitchen is known for.</p></div>
  <div ref={track} className={`flex gap-6 px-5 items-start ${reduced?'overflow-x-auto snap-x':'w-max'}`}>
   {dishes.map(d=><Card key={d.name} d={d}/>)}
   <div className="shrink-0 w-[70vw] sm:w-[40vw] lg:w-[26vw] self-center"><a href="#menu" className="inline-block bg-gold text-leaf px-8 py-4 rounded-full font-semibold">Explore our full menu</a></div></div>
 </section>}
