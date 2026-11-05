import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Landmark, Languages, Sparkles, Compass } from "lucide-react";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split } from "../components";

export default function About() {
  return (
    <>
      <PageHero img="aboutHero" eyebrow="01 — ABOUT TAMIL NADU" title={<>A land of temples,<br /><em>tongues and tides.</em></>} description="Tamil Nadu is the southernmost mainland state of India, with Chennai as its capital, a long coastline, green hills and a culture rooted in the Tamil language." />

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="02 — HISTORY" title="Over two thousand years of kingdoms" description="The Cheras, Cholas and Pandyas ruled early Tamilakam, followed by the Pallavas, Nayaks and later colonial powers." />
        <div className="two-grid">
          <PhotoCard img="aGreatLiving" title="Chola Empire" tag="History" desc="The Cholas built great temples such as Brihadisvara at Thanjavur and the Airavatesvara at Darasuram." />
          <PhotoCard img="aSculpture" title="Pallava Art" tag="History" desc="Pallava kings carved rock-cut temples and reliefs at Mahabalipuram." index={1} />
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="03 — GEOGRAPHY AND REGIONS" title="Coast, plains and hills" />
        <div className="two-grid">
          <PhotoCard img="aWesternGhats" title="Western Ghats and Nilgiris" tag="Hills" desc="Cool, misty hills with tea and coffee estates." />
          <PhotoCard img="aCauvery" title="Cauvery Delta" tag="Plains" desc="Fertile paddy fields, known as the rice bowl of Tamil Nadu." index={1} />
        </div>
      </section>

      <Split reverse img="aTamilScript" eyebrow="04 — TAMIL LANGUAGE AND HERITAGE" title={<>One of the world's<br /><em>classical languages.</em></>}>
        <p>Tamil literature dates back more than two thousand years, from Sangam poetry to the Thirukkural by Thiruvalluvar. Inscriptions in Tamil script appear on many temple walls.</p>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="05 — ANCIENT ARCHITECTURE" title="Temples built to touch the sky" description="Dravidian architecture is known for towering gopurams, pillared halls and holy tanks." />
        <div className="value-grid">{[[Landmark, "Gopurams", "Tiered gateway towers covered with painted sculptures."], [Compass, "Mandapams", "Pillared halls for festivals and gatherings."], [Sparkles, "Vimanas", "Towers above the sanctum."], [Languages, "Inscriptions", "Records of kings, gifts and festivals on stone."]].map(([I, t, d], i) => <Reveal className="value-card" key={t} delay={i * .07}><I /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="06 — CULTURAL TRADITIONS" title="Festivals, music and everyday ritual" />
        <div className="two-grid">
          <PhotoCard img="aFestival" title="Temple Festivals" tag="Culture" desc="Processions, chariots and music mark festivals such as Madurai's Chithirai Thiruvizha." />
          <PhotoCard img="hMusic" title="Nadaswaram and Thavil" tag="Music" desc="Traditional music played at weddings and temple ceremonies." index={1} />
        </div>
      </section>

      <Split img="aTourism" eyebrow="07 — TOURISM IMPORTANCE" title={<>Heritage that welcomes<br /><em>the world.</em></>}>
        <p>Tamil Nadu's UNESCO sites, temple towns, hill stations and beaches make tourism a major part of the state's economy and a support for local artisans.</p>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="08 — WHY VISIT" title="Reasons to come" center />
        <div className="guide-grid">{[["Living heritage", "Temples where worship has continued for centuries."], ["Varied landscapes", "Beaches, hills, forests and waterfalls in one state."], ["Rich food", "From Chettinad spice to filter coffee."]].map(([t, d], i) => <Reveal className="guide-card" key={t} delay={i * .08}><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <CTA img="aCta" eyebrow="09 — EXPLORE MORE" title="Start with a place that speaks to you." to="/destinations" label="Explore destinations" />
    </>
  );
}
