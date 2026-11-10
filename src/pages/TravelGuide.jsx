import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sun, CloudRain, Snowflake } from "lucide-react";
import { PageHero, SectionHeading, Reveal, Split, PhotoCard } from "../components";

const ITIN = {
  "3 days": [["Day 1 — Madurai", "Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, evening at the temple and a glass of Jigarthanda."], ["Day 2 — Rameswaram", "Ramanathaswamy Temple, Pamban Bridge and Dhanushkodi."], ["Day 3 — Kanyakumari", "Sunrise, Vivekananda Rock Memorial and Thiruvalluvar Statue."]],
  "5 days": [["Day 1 — Chennai & Mahabalipuram", "Kapaleeshwarar Temple, Marina Beach, then Shore Temple and Pancha Rathas."], ["Day 2 — Thanjavur", "Brihadeeswarar Temple, Maratha Palace and the art gallery."], ["Day 3 — Madurai", "Meenakshi Amman Temple, Thirumalai Nayakkar Mahal and Teppakulam."], ["Day 4 — Kodaikanal", "Lake, Coaker's Walk and Pillar Rocks."], ["Day 5 — Ooty", "Botanical Garden, Doddabetta and the Nilgiri toy train."]],
};
const SEASON = [[CloudRain, "Oct – Dec", "The northeast monsoon brings rain to much of Tamil Nadu. Keep flexible plans for outdoor visits."], [Sun, "Jan – Mar", "Generally pleasant and drier. A good time for temples, heritage sites and coastal trips."], [Snowflake, "Apr – May", "The hottest period on the plains. Choose cooler hill stations such as Ooty and Kodaikanal."], [CloudRain, "Jun – Sep", "The southwest monsoon brings showers, especially to the Western Ghats. Waterfalls are often lively."]];

export default function TravelGuide() {
  const [tab, setTab] = useState("3 days");
  return (
    <>
      <PageHero img="tHero" eyebrow="01 — TRAVEL GUIDE" title={<>A good journey begins<br /><em>with a little planning.</em></>} description="Seasons, transport, stays and itineraries for Tamil Nadu." />

      <section className="section-pad">
        <SectionHeading eyebrow="02 — BEST TIME TO VISIT" title="Weather guidance" description="Tamil Nadu is warm all year. Pick the season to suit your route." />
        <div className="value-grid">{SEASON.map(([I, t, d], i) => <Reveal className="value-card" key={t} delay={i * .07}><I /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <Split img="tChennaiAir" eyebrow="03 — TRAVEL BY AIR" title={<>Fly into<br /><em>the state's hubs.</em></>}>
        <p>Chennai has the largest airport. Coimbatore, Madurai, Tiruchirappalli and Tuticorin also have airports, and Bengaluru and Thiruvananthapuram are useful for hill and southern trips.</p>
      </Split>

      <Split reverse img="tTrain" hoverImg="heTrain" hoverTitle="Nilgiri Mountain Railway" hoverDesc="Take the heritage train between Mettupalayam and Ooty." eyebrow="04 — TRAVEL BY TRAIN" title={<>Rail links across<br /><em>the whole state.</em></>}>
        <p>Chennai Central and Egmore connect to Madurai, Coimbatore, Tiruchirappalli and Kanyakumari. Book reserved seats early. The Nilgiri Mountain Railway runs between Mettupalayam and Ooty.</p>
      </Split>

      <Split img="tBus" hoverImg="tHero3" hoverTitle="Hill-road journeys" hoverDesc="A state bus rounds a mountain road in the Nilgiris." eyebrow="05 — TRAVEL BY BUS" title={<>Frequent buses<br /><em>between towns.</em></>}>
        <p>State transport and private operators run day and overnight buses between all major cities. Tamil Nadu state buses reach most hill towns.</p>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="06 — POPULAR TRAVEL ROUTES" title="Three classic routes" />
        <div className="guide-grid">{[["Temple trail", "Chennai → Kanchipuram → Thanjavur → Madurai"], ["Hills and tea", "Coimbatore → Ooty → Coonoor → Valparai"], ["Southern coast", "Madurai → Rameswaram → Kanyakumari"]].map(([t, d], i) => <Reveal className="guide-card" delay={i * .08} key={t}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <Split reverse img="tStay" eyebrow="07 — ACCOMMODATION GUIDANCE" title={<>From heritage homes<br /><em>to simple lodges.</em></>}>
        <p>Choose heritage hotels in Chettinad, resorts in hill stations and business hotels in cities. Book ahead during festivals and peak season from December to January.</p>
      </Split>

      <section className="section-pad">
        <SectionHeading eyebrow="08 — TRAVEL TIPS AND SAFETY" title="Simple tips for a smooth trip" />
        <div className="value-grid">{[["Dress modestly", "Cover shoulders and knees at temples; remove footwear."], ["Carry water", "Stay hydrated, especially from March to June."], ["Book early", "Trains and festival-season hotels fill fast."], ["Keep copies", "Carry ID copies and use official taxis or apps."]].map(([t, d], i) => <Reveal className="value-card" key={t} delay={i * .07}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="09 — SAMPLE ITINERARIES" title="Choose your trip length" />
        <div className="chip-row">{Object.keys(ITIN).map((k) => <button key={k} className={`chip ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}>{k}</button>)}</div>
        <div className="itin-list">{ITIN[tab].map(([t, d], i) => <Reveal key={tab + t} delay={i * .06} className="itin-item"><strong>{t}</strong><p>{d}</p></Reveal>)}</div>
        <div className="itin-photo"><PhotoCard img="tItin" title="Nandi at Brihadeeswarar Temple" tag="Itinerary" place="Thanjavur" desc="A stop on the 5-day plan." /></div>
        <div className="center-action"><Link className="btn btn-green" to="/contact">Ask for a custom plan <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
