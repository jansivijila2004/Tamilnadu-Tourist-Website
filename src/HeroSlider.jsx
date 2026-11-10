import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import TNImage from "./TNImage";

export const SLIDES = [
  { img: "heroHogenakkal", cat: "TAMIL NADU", title: "Discover the Beauty of Tamil Nadu", text: "Explore ancient temples, beautiful landscapes and unforgettable experiences.", to: "/about" },
  { img: "heroOoty", cat: "OOTY", title: "Experience the Charm of Ooty", text: "Discover misty mountains, green valleys and peaceful hill station views.", to: "/destinations" },
  { img: "heroMeenakshi", cat: "MADURAI", title: "Explore the Heritage of Madurai", text: "Witness the magnificent Meenakshi Amman Temple and the rich history of Madurai.", to: "/destinations" },
  { img: "heroKanyakumari", cat: "KANYAKUMARI", title: "Feel the Magic of Kanyakumari", text: "Experience breathtaking ocean views and beautiful sunrises.", to: "/destinations" },
  { img: "heroThanjavur", cat: "THANJAVUR", title: "Discover the Glory of Chola Architecture", text: "Explore the magnificent Brihadeeswarar Temple and Tamil heritage.", to: "/heritage-nature" },
  { img: "heroKodai", cat: "KODAIKANAL", title: "Escape to the Beauty of Kodaikanal", text: "Enjoy peaceful lakes, green valleys and refreshing mountain views.", to: "/destinations" },
];

const DELAY = 2500;

export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState([0, 1]);
  const go = useCallback((n, d) => setState(([i]) => [((n % SLIDES.length) + SLIDES.length) % SLIDES.length, d ?? 1]), []);
  const next = useCallback(() => setState(([i]) => [(i + 1) % SLIDES.length, 1]), []);
  const prev = useCallback(() => setState(([i]) => [(i - 1 + SLIDES.length) % SLIDES.length, -1]), []);

  // Keep one autoplay timer active and clear it whenever the slide changes.
  useEffect(() => {
    const id = setTimeout(next, DELAY);
    return () => clearTimeout(id);
  }, [index, next]);

  const slide = SLIDES[index];
  const variants = {
    enter: (d) => (reduce ? { opacity: 0 } : { x: d > 0 ? "100%" : "-100%" }),
    center: { x: 0, opacity: 1 },
    exit: (d) => (reduce ? { opacity: 0 } : { x: d > 0 ? "-100%" : "100%" }),
  };
  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero-slider" aria-roledescription="carousel" aria-label="Tamil Nadu highlights">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div key={index} className="hs-slide" custom={dir} variants={variants} initial="enter" animate="center" exit="exit"
          transition={{ duration: reduce ? 0.2 : 0.6, ease: [0.77, 0, 0.175, 1] }}>
          <TNImage name={slide.img} className="hs-img" width={2000} eager />
          <div className="hs-shade" />
          <div className="hs-copy">
            <motion.span className="eyebrow light" {...item(0)}>{slide.cat}</motion.span>
            <motion.h1 {...item(1)}>{slide.title}</motion.h1>
            <motion.p {...item(2)}>{slide.text}</motion.p>
            <motion.div {...item(3)}><Link className="btn btn-gold" to={slide.to}>Explore Now <ArrowUpRight size={17} /></Link></motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="hs-arrow left" onClick={prev} aria-label="Previous slide"><ChevronLeft /></button>
      <button className="hs-arrow right" onClick={next} aria-label="Next slide"><ChevronRight /></button>
      <div className="hs-dots" role="tablist">
        {SLIDES.map((s, i) => (
          <button key={s.cat} role="tab" aria-selected={i === index} aria-label={`Go to slide ${i + 1}: ${s.cat}`}
            className={i === index ? "active" : ""} onClick={() => go(i, i >= index ? 1 : -1)} />
        ))}
      </div>
    </section>
  );
}
