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
export function SectionHeading({eyebrow,title,description,center=false}){const label=eyebrow?.replace(/^\s*\d+\s*[—–-]\s*/,"");return <Reveal className={`section-heading ${center?"center":""}`}><span className="eyebrow">{label}</span><h2>{title}</h2>{description&&<p>{description}</p>}</Reveal>}
const PAGE_HERO_SLIDES = {
  about: [
    ["aboutHero","ABOUT TAMIL NADU","A land of temples, tongues and tides.","Discover Tamil Nadu's ancient history, living language and diverse landscapes.","/about"],
    ["aboutHero2","ANCIENT ROOTS","Discover Tamil Nadu's early history.","Explore archaeological finds that reveal life in ancient Tamilakam.","/about"],
    ["aboutHero3","LIVING CRAFT","Tradition shaped by skilled hands.","Meet the bronze-working heritage that has flourished in Tamil Nadu for centuries.","/about"]
  ],
  destinations: [
    ["destHero","DESTINATIONS","Every corner has its own rhythm.","Hill stations, temples, beaches, waterfalls and wild forests across Tamil Nadu.","/destinations"],
    ["destHero2","ISLAND CONNECTIONS","Cross the sea by the Pamban Bridge.","Take in the remarkable coastal views around Rameswaram.","/destinations"],
    ["destHero3","HILLSIDE ESCAPE","Find a quieter pace in Yercaud.","Enjoy a lakeside retreat among the green Shevaroy Hills.","/destinations"]
  ],
  heritage: [
    ["hnHero","HERITAGE & NATURE","Where culture meets the wild.","Discover traditional performance, remarkable architecture and beautiful natural places.","/heritage-nature"],
    ["hnHero2","CLASSICAL DANCE","Stories told through movement.","Experience the expressive gestures and rhythms of Tamil dance.","/heritage-nature"],
    ["hnHero3","WILD WATERWAYS","Wander through the mangroves.","Explore the calm channels and rich habitats of Pichavaram.","/heritage-nature"]
  ],
  food: [
    ["foodHero","FOOD & CULTURE","Taste the stories behind every dish.","Explore Tamil Nadu's food, festivals and living arts.","/food-culture"],
    ["foodHero2","A TAMIL BREAKFAST","Simple dishes, generous flavours.","Discover the familiar comfort of Tamil Nadu's breakfast table.","/food-culture"],
    ["foodHero3","MADURAI SPECIALITY","Cool down with Jigarthanda.","Try the much-loved, creamy drink that Madurai is famous for.","/food-culture"]
  ],
  contact: [
    ["cHero","CONTACT","Let's make your next trip happen.","Questions, ideas or a little travel inspiration — drop us a line.","/contact"],
    ["cHero2","COASTAL TAMIL NADU","A warm welcome by the sea.","Discover the fishing villages and coastal communities along the shore.","/contact"],
    ["cHero3","HILL COUNTRY","Let the mountain railway inspire you.","Get in touch and start planning a memorable journey through the Nilgiris.","/contact"]
  ],
  travel: [
    ["tHero","TRAVEL GUIDE","A good journey begins with a little planning.","Seasons, transport, stays and itineraries for Tamil Nadu.","/travel-guide"],
    ["tHero2","ARRIVE IN CHENNAI","Start your journey in the capital.","Find practical advice for getting around Tamil Nadu by rail and road.","/travel-guide"],
    ["tHero3","THE HILL ROUTE","Take the scenic road to the Nilgiris.","Plan ahead for winding mountain roads and sweeping valley views.","/travel-guide"]
  ]
};
const PAGE_HERO_TEXT_MOTION = {
  about: { y: 30, x: 0 },
  destinations: { y: 0, x: 46 },
  heritage: { y: 42, x: 0 },
  food: { y: 0, x: -42 },
  travel: { y: 34, x: 24 },
  contact: { y: 28, x: 0 },
};

export function PageHero({eyebrow,title,description,img,slidesOverride,pageKey}) {
  const reduce = useReducedMotion();
  const page = pageKey || ({aboutHero:"about",destHero:"destinations",hnHero:"heritage",foodHero:"food",cHero:"contact",tHero:"travel"})[img] || "about";
  const slides = (slidesOverride || PAGE_HERO_SLIDES[page]).slice(0, 1);
  const textMotion = PAGE_HERO_TEXT_MOTION[page] || PAGE_HERO_TEXT_MOTION.about;
  const [[index,dir],setState] = useState([0,1]);
  const next = useCallback(()=>setState(([i])=>[(i+1)%slides.length,1]),[slides.length]);
  const prev = useCallback(()=>setState(([i])=>[(i-1+slides.length)%slides.length,-1]),[slides.length]);
  useEffect(()=>{const id=setTimeout(next,2500);return()=>clearTimeout(id)},[next,index]);
  const current=slides[index];
  const variants = {
    enter: (direction) => reduce ? {opacity:0} : {opacity:0,x:direction>0?"100%":"-100%"},
    center: {opacity:1,x:0},
    exit: (direction) => reduce ? {opacity:0} : {opacity:0,x:direction>0?"-100%":"100%"},
  };
  const textStart = reduce ? false : {opacity:0, ...textMotion};
  return <section className={`page-hero page-hero-slider page-hero-${page}`} aria-label={`${page} highlights`}>
    <AnimatePresence initial={false} mode="sync" custom={dir}>
      <motion.div key={current[0]} className="page-hero-slide" custom={dir} variants={variants} initial="enter" animate="center" exit="exit"
        transition={{duration:reduce ? .2 : .6,ease:[.22,1,.36,1]}}>
        <TNImage name={current[0]} className="page-hero-img" eager/><div className="page-hero-shade"/>
        <div className="page-hero-content">
          <motion.span className="eyebrow light" initial={textStart} animate={{opacity:1,y:0,x:0}} transition={{delay:.16,duration:.5}}>{current[1]}</motion.span>
          <motion.h1 initial={textStart} animate={{opacity:1,y:0,x:0}} transition={{delay:.27,duration:.5}}>{current[2]}</motion.h1>
          <motion.p initial={textStart} animate={{opacity:1,y:0,x:0}} transition={{delay:.39,duration:.5}}>{current[3]}</motion.p>
          <motion.div initial={textStart} animate={{opacity:1,y:0,x:0}} transition={{delay:.51,duration:.5}}><Link className="btn btn-gold" to={current[4]}>Explore Now <ArrowUpRight size={16}/></Link></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
    {slides.length > 1 && <><button className="hs-arrow left" onClick={prev} aria-label="Previous slide"><ChevronLeft/></button>
    <button className="hs-arrow right" onClick={next} aria-label="Next slide"><ChevronRight/></button>
    <div className="hs-dots" role="tablist" aria-label="Choose hero slide">{slides.map((slide,i)=><button key={slide[0]} role="tab" aria-selected={i===index} aria-label={`Go to slide ${i+1}`} className={i===index?"active":""} onClick={()=>setState([i,i>=index?1:-1])}/>)}</div></>}
    <span className="hero-scroll">SCROLL TO EXPLORE ↓</span>
  </section>
}
export function Section({children,className="",id}){return <section id={id} className={`section-pad ${className}`}>{children}</section>}
export function PhotoCard({img,hoverImg,title,tag,place,desc,extra,to,index=0,cta,className="",imageWidth=1800}){return <Reveal delay={(index%4)*.07}><article className={`image-card photo-card ${hoverImg?"has-alt-image":""} ${className}`}><div className="image-wrap"><TNImage name={img} width={imageWidth}/>{hoverImg&&<TNImage name={hoverImg} className="photo-alt-img"/>}{tag&&<span className="card-type">{tag}</span>}<div className="photo-hover-overlay"><strong>{title}</strong>{place&&<span>{place}</span>}<p>{desc}</p>{extra&&<p className="card-extra">{extra}</p>}{to&&<Link to={to} className="btn btn-gold btn-sm photo-card-action">{cta||"View Details"} <ArrowUpRight size={14}/></Link>}</div></div></article></Reveal>}
export function ImageMarquee({items,direction="left",vertical=false,className=""}){
  const renderItem=(item,index,copy=false)=>{
    const content=<><TNImage name={item.img}/><span className="marquee-caption"><strong>{item.title}</strong>{item.place&&<small>{item.place}</small>}<span>{item.desc}</span></span></>;
    const cls=`marquee-card ${copy?"marquee-copy":""}`;
    return item.to?<Link key={`${copy?"copy-":""}${item.img}-${index}`} to={item.to} className={cls} tabIndex={copy?-1:undefined}>{content}</Link>:<article key={`${copy?"copy-":""}${item.img}-${index}`} className={cls} tabIndex={copy?-1:0}>{content}</article>;
  };
  return <div className={`image-marquee ${vertical?"vertical":""} ${className}`} tabIndex={0} aria-label="Image carousel">
    <div className={`image-marquee-track ${direction==="right"?"to-right":""} ${vertical?"vertical-track":""}`}>
      <div className="image-marquee-group">{items.map((item,index)=>renderItem(item,index))}</div>
      <div className="image-marquee-group" aria-hidden="true">{items.map((item,index)=>renderItem(item,index,true))}</div>
    </div>
  </div>;
}
export function Split({img,hoverImg,hoverTitle,hoverDesc,reverse,eyebrow,title,children}){return <section className={`split-section section-pad ${reverse?"reverse":""}`}><Reveal x={reverse?40:-40} className={`split-img ${hoverImg?"has-hover-image":""}`}><TNImage name={img}/>{hoverImg&&<TNImage name={hoverImg} className="split-alt-img"/>}{hoverTitle&&<span className="split-hover-copy"><strong>{hoverTitle}</strong><span>{hoverDesc}</span></span>}</Reveal><Reveal x={reverse?-40:40}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children}</Reveal></section>}
export function CTA({img,eyebrow,title,to,label,className=""}){const labelText=eyebrow?.replace(/^\s*\d+\s*[—–-]\s*/,"");return <section className={`final-cta ${className}`}><TNImage name={img} className="cta-img"/><div className="cta-shade"/><div className="cta-inner"><span className="eyebrow light">{labelText}</span><h2>{title}</h2><Link className="btn btn-gold" to={to}>{label} <ArrowUpRight/></Link></div></section>}
