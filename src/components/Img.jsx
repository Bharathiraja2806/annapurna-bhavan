import { ScrollTrigger } from 'gsap/ScrollTrigger'
let t
const refresh=()=>{clearTimeout(t);t=setTimeout(()=>ScrollTrigger.refresh(),150)}
const ph="data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><defs><radialGradient id='g' cx='.4' cy='.35'><stop offset='0' stop-color='#e8c27a'/><stop offset='1' stop-color='#8a4a1f'/></radialGradient></defs><circle cx='200' cy='200' r='190' fill='#2c5a3f'/><circle cx='200' cy='200' r='150' fill='url(#g)'/><circle cx='200' cy='200' r='95' fill='none' stroke='#f3ead8' stroke-opacity='.35' stroke-width='3'/></svg>`)
export default function Img({src,alt,className='',eager=false,...p}){
 return <img src={src} alt={alt} className={className} loading={eager?'eager':'lazy'} decoding="async"
  onLoad={refresh} onError={e=>{if(e.currentTarget.dataset.f)return;e.currentTarget.dataset.f=1;e.currentTarget.src=ph}} {...p}/>}
