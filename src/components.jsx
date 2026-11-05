import React from "react";
import {useState, useEffect, useCallback} from "react";
import {NavLink, Link} from "react-router-dom";
import {Menu, X, ArrowUpRight, MapPin, Instagram, Facebook, Youtube, ChevronLeft, ChevronRight} from "lucide-react";
import {motion, useReducedMotion, AnimatePresence} from "framer-motion";
import {useLocation} from "react-router-dom";
import TNImage from "./TNImage";
import {IMAGES} from "./data/images";

const links = [
  ["Home","/"],["About","/about"],["Destinations","/destinations"],
  ["Heritage & Nature","/heritage-nature"],["Food & Culture","/food-culture"],
  ["Travel Guide","/travel-guide"],["Contact","/contact"]
];
export function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className="navbar"><Link to="/" className="brand"><span className="brand-mark">வ</span><span>VANAKKAM<small>TAMIL NADU</small></span></Link>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    <nav className={open?"nav-links show":"nav-links"}>{links.map(([label,path])=><NavLink key={path} to={path} end={path==="/"} onClick={()=>setOpen(false)}>{label}</NavLink>)}<Link className="nav-cta" to="/travel-guide" onClick={()=>setOpen(false)}>Plan a trip <ArrowUpRight size={16}/></Link></nav>
  </header>;
}
export function Footer(){
 return <footer className="footer"><div className="footer-top"><div><Link to="/" className="brand footer-brand"><span className="brand-mark">வ</span><span>VANAKKAM<small>TAMIL NADU</small></span></Link><p>Discover a land where every journey<br/>has a story worth remembering.</p></div><div><h4>Explore</h4>{links.slice(1,5).map(([n,p])=><Link key={p} to={p}>{n}</Link>)}</div><div><h4>Plan your visit</h4><Link to="/travel-guide">Travel guide</Link><Link to="/contact">Contact us</Link><a href="mailto:hello@vanakkamtamilnadu.com">Email us</a></div><div><h4>Follow the journey</h4><div className="socials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Youtube"><Youtube/></a></div><p className="small-muted">Stories, places and little moments.</p></div></div><div className="footer-bottom"><span>© 2026 Vanakkam Tamil Nadu</span><span>Made for curious travellers ✦</span></div></footer>;
}
export function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,left:0})},[pathname]);return null}
export function Reveal({children,className="",delay=0,x=0}){const rm=useReducedMotion();return <motion.div className={className} initial={rm?false:{opacity:0,y:x?0:28,x}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function SectionHeading({eyebrow,title,description,center=false}){return <Reveal className={`section-heading ${center?"center":""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</Reveal>}
const PAGE_HERO_SLIDES = {
  about: [
    ["aboutHero","ABOUT TAMIL NADU","A land of temples, tongues and tides.","Discover Tamil Nadu's ancient history, living language and diverse landscapes.","/about"],
    ["aboutHero2","HISTORY & ARCHAEOLOGY","Stories written in the soil.","Explore the archaeological heritage that connects today's Tamil Nadu with its distant past.","/heritage-nature"],
    ["aboutHero3","LIVING CRAFTS","Tradition shaped by skilled hands.","Meet the craft traditions and artisans who keep Tamil Nadu's heritage alive.","/food-culture"]
  ],
  destinations: [
    ["destHero","DESTINATIONS","Every corner has its own rhythm.","Hill stations, temples, beaches, waterfalls and wild forests across Tamil Nadu.","/destinations"],
    ["destHero2","SOUTHERN COAST","Follow the road to Rameswaram.","Discover island landscapes, sacred shores and the Pamban crossing.","/destinations"],
    ["destHero3","HILL COUNTRY","Find a slower pace in Yercaud.","Enjoy lake views, forested slopes and refreshing mountain air.","/travel-guide"]
  ],
  heritage: [
    ["hnHero","HERITAGE & NATURE","Where culture meets the wild.","Discover traditional performance, remarkable architecture and beautiful natural places.","/heritage-nature"],
    ["hnHero2","CLASSICAL ARTS","A living language of movement.","Experience Bharatanatyam and the many folk traditions of Tamil Nadu.","/food-culture"],
    ["hnHero3","NATURAL WONDERS","Drift through green waterways.","Explore the mangroves, hills and waterfalls that make Tamil Nadu unique.","/destinations"]
  ],
  food: [
    ["foodHero","FOOD & CULTURE","Taste the stories behind every dish.","Explore Tamil Nadu's food, festivals and living arts.","/food-culture"],
    ["foodHero2","TAMIL TIFFIN","Simple ingredients, timeless flavours.","Discover the breakfast favourites enjoyed across Tamil Nadu.","/food-culture"],
    ["foodHero3","MADURAI SPECIALITY","A cool glass of Jigarthanda.","Taste the much-loved drink that has become part of Madurai's food identity.","/destinations"]
  ],
  contact: [
    ["cHero","CONTACT","Let's make your next trip happen.","Questions, ideas or a little travel inspiration — drop us a line.","/contact"],
    ["cHero2","TRAVEL ENQUIRIES","Tell us what inspires your journey.","Share your interests and the kind of Tamil Nadu experience you hope to discover.","/travel-guide"],
    ["cHero3","PLAN WITH CONFIDENCE","Make every connection count.","Use our travel guide to explore routes, transport and practical travel advice.","/travel-guide"]
  ],
  travel: [
    ["tHero","TRAVEL GUIDE","A good journey begins with a little planning.","Seasons, transport, stays and itineraries for Tamil Nadu.","/travel-guide"],
    ["tHero2","TRAVEL BY TRAIN","Connect the cities and hill country.","Plan rail journeys between Tamil Nadu's major cities and scenic destinations.","/destinations"],
    ["tHero3","TRAVEL BY ROAD","Take the scenic route.","Explore the state by bus and road with a little preparation.","/travel-guide"]
  ]
};
export function PageHero({eyebrow,title,description,img}) {
  const reduce = useReducedMotion();
  const page = ({aboutHero:"about",destHero:"destinations",hnHero:"heritage",foodHero:"food",cHero:"contact",tHero:"travel"})[img] || "about";
  const slides = PAGE_HERO_SLIDES[page];
  const [index,setIndex] = useState(0);
  const [paused,setPaused] = useState(false);
  const next = useCallback(()=>setIndex(i=>(i+1)%slides.length),[slides.length]);
  const prev = useCallback(()=>setIndex(i=>(i-1+slides.length)%slides.length),[slides.length]);
  useEffect(()=>{if(paused)return;const id=setTimeout(next,4000);return()=>clearTimeout(id)},[paused,next,index]);
  const current=slides[index];
  return <section className="page-hero page-hero-slider" aria-roledescription="carousel" aria-label={`${page} highlights`} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
    <AnimatePresence initial={false} mode="sync">
      <motion.div key={current[0]} className="page-hero-slide" initial={reduce?{opacity:0}:{x:"100%"}} animate={{x:0,opacity:1}} exit={reduce?{opacity:0}:{x:"-100%"}} transition={{duration:reduce ? 0.25 : 0.85,ease:[.77,0,.175,1]}}>
        <TNImage name={current[0]} className="page-hero-img" eager/><div className="page-hero-shade"/>
        <div className="page-hero-content">
          <motion.span className="eyebrow light" initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.12}}>{current[1]}</motion.span>
          <motion.h1 initial={reduce?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.22,duration:.65}}>{current[2]}</motion.h1>
          <motion.p initial={reduce?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.34,duration:.65}}>{current[3]}</motion.p>
          <motion.div initial={reduce?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.46,duration:.65}}><Link className="btn btn-gold" to={current[4]}>Explore Now <ArrowUpRight size={16}/></Link></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
    <button className="hs-arrow left" onClick={prev} aria-label="Previous slide"><ChevronLeft/></button>
    <button className="hs-arrow right" onClick={next} aria-label="Next slide"><ChevronRight/></button>
    <div className="hs-dots" role="tablist" aria-label="Choose hero slide">{slides.map((slide,i)=><button key={slide[0]} role="tab" aria-selected={i===index} aria-label={`Go to slide ${i+1}`} className={i===index?"active":""} onClick={()=>setIndex(i)}/>)}</div>
    <span className="hero-scroll">SCROLL TO EXPLORE ↓</span>
  </section>
}
export function Section({children,className="",id}){return <section id={id} className={`section-pad ${className}`}>{children}</section>}
export function PhotoCard({img,title,tag,place,desc,extra,to,index=0,cta}){return <Reveal delay={(index%4)*.07}><article className="image-card photo-card"><div className="image-wrap"><TNImage name={img}/>{tag&&<span className="card-type">{tag}</span>}<div className="photo-hover-overlay"><strong>{title}</strong>{place&&<span>{place}</span>}<p>{desc}</p>{extra&&<p className="card-extra">{extra}</p>}{to&&<Link to={to} className="btn btn-gold btn-sm photo-card-action">{cta||"View Details"} <ArrowUpRight size={14}/></Link>}</div></div></article></Reveal>}
export function Split({img,reverse,eyebrow,title,children}){return <section className={`split-section section-pad ${reverse?"reverse":""}`}><Reveal x={reverse?40:-40} className="split-img"><TNImage name={img}/></Reveal><Reveal x={reverse?-40:40}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children}</Reveal></section>}
export function CTA({img,eyebrow,title,to,label}){return <section className="final-cta"><TNImage name={img} className="cta-img"/><div className="cta-shade"/><div className="cta-inner"><span className="eyebrow light">{eyebrow}</span><h2>{title}</h2><Link className="btn btn-gold" to={to}>{label} <ArrowUpRight/></Link></div></section>}
