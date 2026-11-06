import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { DESTINATIONS, CATEGORIES } from "../data/destinations";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split, ImageMarquee } from "../components";
import TNImage from "../TNImage";

export default function Destinations() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.cat === cat);
  const hillAlternates = { ooty: "dKodai", kodaikanal: "dYercaud", yercaud: "dValparai", valparai: "dOoty" };
  const templeItems = DESTINATIONS.filter((d) => d.cat === "Temples").map((d) => ({ img: d.img, title: d.name, place: d.place, desc: d.desc, to: `/destinations/${d.slug}` }));
  const waterfallItems = [
    { img: "dHogenakkal", title: "Hogenakkal Falls", place: "Dharmapuri district", desc: "Cascades and rocky gorges along the Cauvery." },
    { img: "heroHogenakkal", title: "Cauvery Cascades", place: "Hogenakkal", desc: "A powerful river landscape best seen in season.", to: "/destinations/hogenakkal" },
    { img: "dCourtallam", title: "Courtallam Main Falls", place: "Tenkasi district", desc: "A celebrated cascade in the Western Ghats." },
    { img: "dHogeN", title: "Hogenakkal River Falls", place: "Dharmapuri district", desc: "Explore the falls and gorges by coracle." },
    { img: "dCourtN", title: "Courtallam Five Falls", place: "Tenkasi district", desc: "Five streams flow down a forested hillside.", to: "/destinations/courtallam" },
  ];
  const categoryContent = (category) => {
    if (category === "Temples") return <ImageMarquee direction="right" className="destination-temple-marquee" items={templeItems} />;
    if (category === "Waterfalls") return <ImageMarquee vertical direction="right" className="waterfall-marquee" items={waterfallItems} />;
    return <div className="destination-grid">{DESTINATIONS.filter((d) => d.cat === category).map((d, i) => <PhotoCard key={d.slug} img={d.img} hoverImg={hillAlternates[d.slug]} title={d.name} tag={d.cat} place={d.place} desc={d.desc} to={`/destinations/${d.slug}`} index={i} className={category === "Beaches" ? "beach-card" : ""} />)}</div>;
  };
  return (
    <>
      <PageHero img="destHero" eyebrow="PLACES TO FALL FOR" title={<>Every corner has<br /><em>its own rhythm.</em></>} description="Hill stations, temples, beaches, waterfalls and wild forests across Tamil Nadu." />

      <div className="filter-bar chip-row" role="tablist" aria-label="Filter destinations">
        {["All", ...CATEGORIES].map((c) => <button key={c} role="tab" aria-selected={cat === c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
      </div>

      {cat === "All" ? CATEGORIES.map((c, ci) => (
        <section key={c} className={`section-pad ${ci % 2 ? "soft-bg" : ""}`}>
          <SectionHeading eyebrow={c.toUpperCase()} title={c} />
          {categoryContent(c)}
        </section>
      )) : (
        <section className="section-pad">
          {cat === "Temples" ? <ImageMarquee direction="right" className="destination-temple-marquee" items={templeItems} /> :
            cat === "Waterfalls" ? <ImageMarquee vertical direction="right" className="waterfall-marquee" items={waterfallItems} /> :
              <div className="destination-grid">{shown.map((d, i) => <PhotoCard key={d.slug} img={d.img} hoverImg={hillAlternates[d.slug]} title={d.name} tag={d.cat} place={d.place} desc={d.desc} to={`/destinations/${d.slug}`} index={i} className={cat === "Beaches" ? "beach-card" : ""} />)}</div>}
        </section>
      )}

      <CTA img="ctaDest" eyebrow="NOT SURE WHERE TO START?" title="Let our travel guide help you choose." to="/travel-guide" label="Read the travel guide" />
    </>
  );
}
