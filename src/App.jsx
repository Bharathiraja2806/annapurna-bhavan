import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Transformation from './components/Transformation'
import HorizontalGallery from './components/HorizontalGallery'
import Story from './components/Story'
import Popular from './components/Popular'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger)
export default function App(){
 useEffect(()=>{
  const r=()=>ScrollTrigger.refresh()
  window.addEventListener('load',r); document.fonts?.ready.then(r)
  return()=>window.removeEventListener('load',r)},[])
 return <><Nav/><main><Hero/><Transformation/><HorizontalGallery/><Story/><Popular/><Experience/><Reviews/><Visit/></main><Footer/></>}
