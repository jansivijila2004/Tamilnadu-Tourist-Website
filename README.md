# Vanakkam Tamil Nadu Tourism Website

React + Vite + React Router + Framer Motion.

## Run
```bash
npm install
npm run dev
```

## Images
All photos are defined once in `src/data/images.js` (each key is used exactly once). They load from bundled public assets or Wikimedia Commons.
If a named file can't be loaded, `src/TNImage.jsx` searches Commons using that entry's query and never reuses a URL; if that also fails a labelled placeholder is shown instead of a wrong photo.
Run `npm run verify-images` (needs internet) to check local asset paths and list Commons file names that don't exist.

## Pages
Home (hero slider), About, Destinations (+ `/destinations/:slug` detail pages), Heritage & Nature, Food & Culture, Travel Guide, Contact.


## Local image updates
The matching Tamil Nadu tourism section images are bundled locally in `public/images/tamil-nadu/` and referenced through `src/data/images.js`. The existing page layouts and routes are unchanged.

## Image attributions
The following bundled photographs are from Wikimedia Commons. The local copies retain their source content:

- [Karagattam.webp](https://commons.wikimedia.org/wiki/File:Karagattam.webp) — Unknown author, public domain.
- [Mayilattam or Peacock Dance.jpg](https://commons.wikimedia.org/wiki/File:Mayilattam_or_Peacock_Dance.jpg) — Nocturnal08, CC BY-SA 4.0.
- [Koothu or Therukoothu, Pondicherry, 2024.jpg](https://commons.wikimedia.org/wiki/File:Koothu_or_Therukoothu,_Pondicherry,_2024.jpg) — Minolaf, CC BY-SA 4.0.
- [High range world record.jpg](https://commons.wikimedia.org/wiki/File:High_range_world_record.jpg) — Sri amsni, CC BY-SA 4.0.
- [Poikaal Kuthirai Attam.webp](https://commons.wikimedia.org/wiki/File:Poikaal_Kuthirai_Attam.webp) — Unknown author, public domain.
- [Colourful Dance,Exploring the Kavadi Aattam Tradition.jpg](https://commons.wikimedia.org/wiki/File:Colourful_Dance,Exploring_the_Kavadi_Aattam_Tradition.jpg) — Ranjith.kumar 9647, CC BY-SA 4.0.
- [OYILATTAM (Tamil culture).jpg](https://commons.wikimedia.org/wiki/File:OYILATTAM_(Tamil_culture).jpg) — Ram2909, CC BY-SA 4.0.
- [Pine Forest in Kodaikanal.jpg](https://commons.wikimedia.org/wiki/File:Pine_Forest_in_Kodaikanal.jpg) — KARTY JazZ, CC BY-SA 4.0.
- [Moyar Ooty Bus Kalhatty Sep24 A7CR 02948.jpg](https://commons.wikimedia.org/wiki/File:Moyar_Ooty_Bus_Kalhatty_Sep24_A7CR_02948.jpg) — Timothy A. Gonsalves, CC BY-SA 4.0.
