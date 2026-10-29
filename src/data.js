// Drop real photos (transparent PNG/WebP for plates) into /public/images with these names.
export const IMG = { dosa:'/images/dosa.png', idly:'/images/idly.png', biryani:'/images/biryani.png', meals:'/images/meals.png',
 pongal:'/images/pongal.png', vegbiryani:'/images/veg-biryani.png', coffee:'/images/coffee.png', hero:'/images/hero.jpg', interior:'/images/interior.jpg' }
export const scenes = [
 {key:'dosa',img:IMG.dosa,bg:'#3a1d0e',title:'Crispy. Golden. Unforgettable.',desc:'Fermented overnight, spread thin on a cast-iron tawa and folded around spiced potato. Served with coconut chutney and sambar.'},
 {key:'idly',img:IMG.idly,bg:'#d9d2bd',dark:true,title:'Soft as a cloud.',desc:'Steamed in banana-leaf-lined moulds, four to a plate, with podi, ghee and three chutneys.'},
 {key:'biryani',img:IMG.biryani,bg:'#5a2a12',title:'Slow-cooked. Sealed. Fragrant.',desc:'Seeraga samba rice layered with marinated chicken and dum-cooked for an hour, opened at your table.'},
 {key:'meals',img:IMG.meals,bg:'#10281d',title:'The full sadhya.',desc:'A banana-leaf meals with twelve preparations — from sambar and rasam to payasam. Refills are always on us.'}]
export const dishes = [
 {name:'Masala Dosa',price:'₹140',img:IMG.dosa,desc:'Crisp rice crepe, spiced potato filling.'},
 {name:'Idly & Vada',price:'₹110',img:IMG.idly,desc:'Two idlies, one medu vada, sambar.'},
 {name:'Ven Pongal',price:'₹120',img:IMG.pongal,desc:'Ghee, pepper and cashew with rice and moong.'},
 {name:'Chicken Biryani',price:'₹260',img:IMG.biryani,desc:'Seeraga samba, dum-cooked chicken.'},
 {name:'Veg Biryani',price:'₹200',img:IMG.vegbiryani,desc:'Seasonal vegetables, mint and fried onion.'},
 {name:'South Indian Meals',price:'₹240',img:IMG.meals,desc:'Unlimited banana-leaf meals, twelve items.'},
 {name:'Filter Coffee',price:'₹60',img:IMG.coffee,desc:'Chicory-blend decoction, served in dabarah.'}]
