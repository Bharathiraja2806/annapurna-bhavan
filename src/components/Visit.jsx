import { MapPin, Clock, Phone } from 'lucide-react'
export default function Visit(){
 return <section id="visit" className="py-24 px-5 bg-[#ebe0c8]"><div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
  <div><h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.8rem)]">Visit us</h2>
   <ul className="mt-8 space-y-5">
    <li className="flex gap-3"><MapPin className="text-clay shrink-0"/><span>42 Kumaran Road, Tiruppur, Tamil Nadu 641601</span></li>
    <li className="flex gap-3"><Clock className="text-clay shrink-0"/><span>Daily 7:00 am – 10:30 pm<br/>Meals served 12:00 – 3:30 pm</span></li>
    <li className="flex gap-3"><Phone className="text-clay shrink-0"/><a href="tel:+910000000000">+91 00000 00000</a></li></ul>
   <a href="tel:+910000000000" className="mt-8 inline-block bg-leaf text-cream px-7 py-3.5 rounded-full font-semibold">Call to reserve</a></div>
  <div className="min-h-[18rem] rounded-[2rem] bg-leaf/10 border border-leaf/20 flex items-center justify-center text-leaf/60" role="img" aria-label="Map placeholder">Embed your Google Map here</div></div></section>}
