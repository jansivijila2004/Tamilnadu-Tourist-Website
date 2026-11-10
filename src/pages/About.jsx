import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split, ImageMarquee } from "../components";

export default function About() {
  return (
    <>
      <PageHero img="aboutHero" eyebrow="01 — ABOUT TAMIL NADU" title={<>A land of temples,<br /><em>tongues and tides.</em></>} description="Tamil Nadu is the southernmost mainland state of India, with Chennai as its capital, a long coastline, green hills and a culture rooted in the Tamil language." />

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="02 — HISTORY" title="Over two thousand years of kingdoms" description="The Cheras, Cholas and Pandyas ruled early Tamilakam, followed by the Pallavas, Nayaks and later colonial powers." />
        <div className="two-grid">
          <PhotoCard img="aGreatLiving" title="Chola Empire" tag="History" desc="The Cholas built great temples such as Brihadisvara at Thanjavur and the Airavatesvara at Darasuram." className="image-zoom-card" />
          <PhotoCard img="aSculpture" title="Pallava Art" tag="History" desc="Pallava kings carved rock-cut temples and reliefs at Mahabalipuram." index={1} className="image-zoom-card" />
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="03 — GEOGRAPHY AND REGIONS" title="Coast, plains and hills" />
        <div className="destination-grid geography-grid">
          <PhotoCard img="aWesternGhats" hoverImg="dValparai" title="Western Ghats and Nilgiris" tag="Hills" desc="Cool, misty hills with tea and coffee estates." />
          <PhotoCard img="aCauvery" hoverImg="dThanjavur" title="Cauvery Delta" tag="Plains" desc="Fertile paddy fields, known as the rice bowl of Tamil Nadu." index={1} />
          <PhotoCard img="dMarina" hoverImg="dKanyakumari" title="Tamil Nadu Coast" tag="Coast" desc="Long shores, fishing villages and open sea views." index={2} />
          <PhotoCard img="dPichavaram" hoverImg="aCauvery" title="Rivers and Mangroves" tag="Coast" desc="Waterways and green wetlands shape the eastern coast." index={3} />
        </div>
      </section>

      <Split reverse img="aTamilScript" eyebrow="04 — TAMIL LANGUAGE AND HERITAGE" title={<>One of the world's<br /><em>classical languages.</em></>}>
        <p>Tamil literature dates back more than two thousand years, from Sangam poetry to the Thirukkural by Thiruvalluvar. Inscriptions in Tamil script appear on many temple walls.</p>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="05 — ANCIENT ARCHITECTURE" title="Temples built to touch the sky" description="Dravidian architecture is known for towering gopurams, pillared halls and holy tanks." />
        <div className="destination-grid four temple-feature-grid">{[
          ["dMadurai", "Gopurams", "Tiered gateway towers covered with painted sculptures.", "dSrirangam"],
          ["dKanchipuram", "Mandapams", "Pillared halls for festivals and gatherings.", "dMadurai"],
          ["dThanjavur", "Vimanas", "Towers above the sanctum.", "dKanchipuram"],
          ["dSrirangam", "Inscriptions", "Records of kings, gifts and festivals on stone.", "dThanjavur"],
        ].map(([img, t, d, hoverImg], i) => <PhotoCard key={t} img={img} hoverImg={hoverImg} title={t} tag="Architecture" desc={d} index={i} className="temple-feature-card" />)}</div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="06 — CULTURAL TRADITIONS" title="Festivals, music and everyday ritual" />
        <ImageMarquee direction="left" className="culture-marquee" items={[
          { img: "aFestival", title: "Temple Festivals", place: "Madurai", desc: "Chariots, music and processions at Chithirai Thiruvizha." },
          { img: "hMusic", title: "Nadaswaram and Thavil", place: "Tamil Nadu", desc: "Traditional music for weddings and temple ceremonies." },
          { img: "fPongalFest", title: "Pongal", place: "Tamil Nadu", desc: "A joyful celebration of harvest and abundance." },
          { img: "danOyil", title: "Oyilattam", place: "Madurai–Theni", desc: "Rhythmic folk dance performed in lines and circles." },
          { img: "danTheru", title: "Therukoothu", place: "Tamil Nadu", desc: "Open-air theatre with dance, song and storytelling." },
          { img: "fJallikattu", title: "Jallikattu", place: "Madurai region", desc: "A traditional event held around the Pongal season." },
          { img: "danKavadi", title: "Kavadi Attam", place: "Tamil Nadu", desc: "A devotional dance honouring Lord Murugan." },
          { img: "danKummi", title: "Kummi", place: "Tamil Nadu", desc: "A circle dance accompanied by clapping and songs." },
        ]} />
      </section>

      <Split img="aTourism" eyebrow="07 — TOURISM IMPORTANCE" title={<>Heritage that welcomes<br /><em>the world.</em></>}>
        <p>Tamil Nadu's UNESCO sites, temple towns, hill stations and beaches make tourism a major part of the state's economy and a support for local artisans.</p>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="08 — WHY VISIT" title="Reasons to come" center />
        <div className="guide-grid">{[["Living heritage", "Temples where worship has continued for centuries."], ["Varied landscapes", "Beaches, hills, forests and waterfalls in one state."], ["Rich food", "From Chettinad spice to filter coffee."]].map(([t, d], i) => <Reveal className="guide-card" key={t} delay={i * .08}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <CTA img="aCta" eyebrow="09 — EXPLORE MORE" title="Start with a place that speaks to you." to="/destinations" label="Explore destinations" />
    </>
  );
}
