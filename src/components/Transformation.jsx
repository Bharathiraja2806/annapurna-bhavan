import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Img from './Img'
import { scenes } from '../data'
import { useReducedMotion } from '../hooks'
gsap.registerPlugin(ScrollTrigger)

function Static(){
 return <section id="signature" className="bg-leaf text-cream py-20 px-5 space-y-20">
  {scenes.map(s=><article key={s.key} className="mx-auto max-w-4xl grid md:grid-cols-2 gap-8 items-center">
   <Img src={s.img} alt={s.title} className="plate w-full max-w-sm mx-auto"/>
   <div><h2 className="font-display text-4xl font-bold">{s.title}</h2><p className="mt-4 text-cream/80">{s.desc}</p></div></article>)}
  <div className="text-center"><a href="#menu" className="bg-gold text-leaf px-8 py-4 rounded-full font-semibold">Explore the menu</a></div></section>}

export default function Transformation(){
 const reduced=useReducedMotion()
 const root=useRef(null)
 useLayoutEffect(()=>{
  if(reduced||!root.current)return
  const ctx=gsap.context(()=>{
   const q=gsap.utils.selector(root)
   const imgs=q('.t-img'),texts=q('.t-text'),dots=q('.t-dot'),parts=q('.t-part')
   const mobile=window.innerWidth<768
   gsap.set(imgs,{opacity:0,xPercent:60,scale:.4,rotate:12,filter:'blur(10px)'})
   gsap.set(texts,{opacity:0,y:40})
   gsap.set(imgs[0],{opacity:1,xPercent:0,scale:1,rotate:0,filter:'blur(0px)'})
   gsap.set(texts[0],{opacity:1,y:0})
   gsap.set(parts,{opacity:0})
   const tl=gsap.timeline({defaults:{ease:'power2.inOut'},scrollTrigger:{trigger:root.current,start:'top top',end:()=>'+='+window.innerHeight*(mobile?3:4),pin:true,scrub:1,anticipatePin:1,invalidateOnRefresh:true}})
   tl.addLabel('scene0').to({},{duration:.6})
   for(let i=1;i<scenes.length;i++){
    const L='scene'+i, s=scenes[i]
    tl.addLabel(L)
     .to(imgs[i-1],{xPercent:-70,scale:.45,rotate:-14,opacity:0,filter:'blur(10px)',duration:1},L)
     .to(texts[i-1],{opacity:0,y:-40,duration:.5},L)
     .to(root.current,{backgroundColor:s.bg,color:s.dark?'#10281d':'#f3ead8',duration:1},L)
     .to(parts.slice((i-1)*10,(i-1)*10+10),{opacity:1,x:()=>gsap.utils.random(-260,260),y:()=>gsap.utils.random(-220,220),scale:()=>gsap.utils.random(.6,1.6),duration:.5,stagger:.03},L)
     .to(parts.slice((i-1)*10,(i-1)*10+10),{opacity:0,duration:.5},L+'+=.55')
     .to(imgs[i],{xPercent:0,scale:1,rotate:0,opacity:1,filter:'blur(0px)',duration:1},L+'+=.2')
     .to(texts[i],{opacity:1,y:0,duration:.6},L+'+=.6')
     .to(dots,{opacity:(k)=>k===i?1:.3,scale:(k)=>k===i?1.4:1,duration:.3},L)
     .to({},{duration:.6})
   }
  },root)
  return()=>ctx.revert()
 },[reduced])
 if(reduced)return <Static/>
 return <section id="signature" ref={root} className="relative h-screen overflow-hidden bg-[#3a1d0e] text-cream" aria-label="Signature dishes">
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
   {Array.from({length:30}).map((_,i)=><span key={i} className="t-part absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-gold/80"/>)}</div>
  <div className="relative h-full mx-auto max-w-7xl px-5 grid md:grid-cols-2 items-center pt-16 gap-4">
   <div className="relative order-2 md:order-1 h-[32vh] md:h-[24rem]">
    {scenes.map(s=><div key={s.key} className="t-text absolute inset-0 flex flex-col justify-center">
     <h2 className="font-display font-extrabold leading-none text-[clamp(2.2rem,5.5vw,5rem)]">{s.title}</h2>
     <p className="mt-4 max-w-md opacity-85">{s.desc}</p>
     {s.key==='meals'&&<a href="#menu" className="mt-6 self-start bg-gold text-leaf px-7 py-3.5 rounded-full font-semibold">Explore the menu</a>}</div>)}</div>
   <div className="relative order-1 md:order-2 h-[42vh] md:h-[34rem] flex items-center justify-center">
    {scenes.map(s=><Img key={s.key} src={s.img} alt={s.title} className="t-img plate absolute max-h-full max-w-[85%] md:max-w-full object-contain will-change-transform"/>)}
    <span className="steam" style={{bottom:'45%',animationDelay:'0s'}}/><span className="steam" style={{bottom:'45%',marginLeft:'-40px',animationDelay:'1.6s'}}/><span className="steam" style={{bottom:'45%',marginLeft:'40px',animationDelay:'3.2s'}}/></div>
  </div>
  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3" aria-hidden="true">
   {scenes.map((s,i)=><span key={s.key} className="t-dot w-2 h-2 rounded-full bg-gold" style={{opacity:i?0.3:1}}/>)}</div>
 </section>}
