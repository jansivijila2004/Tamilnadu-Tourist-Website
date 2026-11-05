import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { DESTINATIONS, CATEGORIES } from "../data/destinations";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split } from "../components";
import TNImage from "../TNImage";

const MADURAI = [
  ["madMeenakshi", "Meenakshi Amman Temple", "The heart of Madurai, with towering painted gopurams and the Hall of a Thousand Pillars."],
  ["madMahal", "Thirumalai Nayakkar Mahal", "A 17th-century palace of Nayak ruler Thirumalai Nayak, famous for its huge pillared courtyard."],
  ["madGandhi", "Gandhi Memorial Museum", "Housed in the Tamukkam Palace, it tells the story of India's freedom movement."],
  ["madAlagar", "Alagar Kovil", "A Vishnu temple in the foothills about 21 km north of Madurai."],
  ["madTeppakulam", "Vandiyur Mariamman Teppakulam", "One of India's largest temple tanks, lit up during the Float Festival."],
  ["madKoodal", "Koodal Azhagar Temple", "An ancient Vishnu temple in the old city with a tall layered vimana."],
  ["madMarket", "Madurai Streets & Markets", "Jasmine garlands, brass and textiles around the temple streets."],
  ["madJigarthanda", "Jigarthanda", "Madurai's famous cooling drink of milk, almond gum and ice cream."],
];

export default function Destinations() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.cat === cat);
  return (
    <>
      <PageHero img="destHero" eyebrow="PLACES TO FALL FOR" title={<>Every corner has<br /><em>its own rhythm.</em></>} description="Hill stations, temples, beaches, waterfalls and wild forests across Tamil Nadu." />

      <div className="filter-bar chip-row" role="tablist" aria-label="Filter destinations">
        {["All", ...CATEGORIES].map((c) => <button key={c} role="tab" aria-selected={cat === c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
      </div>

      {cat === "All" ? CATEGORIES.map((c, ci) => (
        <section key={c} className={`section-pad ${ci % 2 ? "soft-bg" : ""}`}>
          <SectionHeading eyebrow={`0${ci + 1} — ${c.toUpperCase()}`} title={c} />
          <div className="destination-grid">{DESTINATIONS.filter((d) => d.cat === c).map((d, i) => <PhotoCard key={d.slug} img={d.img} title={d.name} tag={d.cat} place={d.place} desc={d.desc} to={`/destinations/${d.slug}`} index={i} />)}</div>
        </section>
      )) : (
        <section className="section-pad">
          <div className="destination-grid">{shown.map((d, i) => <PhotoCard key={d.slug} img={d.img} title={d.name} tag={d.cat} place={d.place} desc={d.desc} to={`/destinations/${d.slug}`} index={i} />)}</div>
        </section>
      )}

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="MADURAI SPOTLIGHT" title="Eight ways to experience Madurai" description="Every photo below shows the named place in Madurai." />
        <div className="destination-grid">{MADURAI.map(([img, t, d], i) => <PhotoCard key={img} img={img} title={t} tag="Madurai" place="Madurai, Tamil Nadu" desc={d} index={i} />)}</div>
      </section>

      <CTA img="ctaDest" eyebrow="NOT SURE WHERE TO START?" title="Let our travel guide help you choose." to="/travel-guide" label="Read the travel guide" />
    </>
  );
}
