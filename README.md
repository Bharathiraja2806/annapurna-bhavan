# Annapurna Bhavan — scroll-driven South Indian restaurant site
## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build
## Images (public/images/)
Plates must be transparent PNG/WebP, square, ~1200px: dosa.png idly.png biryani.png meals.png pongal.png veg-biryani.png coffee.png.
Backgrounds (JPG, ~2000px wide): hero.jpg interior.jpg. A placeholder plate shows until files exist.
Free sources: Unsplash, Pexels (cut backgrounds with remove.bg). Edit src/data.js for copy and prices.
## Structure
src/components/Transformation.jsx — pinned, scrubbed GSAP timeline (labels scene0..scene3)
src/components/HorizontalGallery.jsx — vertical scroll → horizontal track with containerAnimation
Reduced-motion users get simple static layouts.
