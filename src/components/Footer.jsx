import { Instagram, Facebook, Youtube } from 'lucide-react'
export default function Footer(){
 return <footer className="bg-leaf text-cream px-5 py-14"><div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-10">
  <div><p className="font-display text-2xl font-semibold">Annapurna Bhavan</p><p className="mt-2 text-cream/70 text-sm">Pure South Indian cooking since 1987.</p></div>
  <nav aria-label="Footer"><ul className="space-y-2 text-sm">{['Home|#home','Our Story|#story','Menu|#menu','Contact|#visit'].map(x=>{const[l,h]=x.split('|');return <li key={l}><a className="hover:text-gold" href={h}>{l}</a></li>})}</ul></nav>
  <div><p className="text-sm">hello@annapurnabhavan.example</p><div className="mt-4 flex gap-4">
   <a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="YouTube"><Youtube/></a></div></div></div></footer>}
