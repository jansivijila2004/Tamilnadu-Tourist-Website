import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroSlider from "../HeroSlider";
import { SectionHeading, PhotoCard, CTA, Split, ImageMarquee } from "../components";

const grid = (items, cols = "") => <div className={`destination-grid ${cols}`}>{items.map(([img, t, d, tag, place, to, hoverImg], i) => <PhotoCard key={img} img={img} hoverImg={hoverImg} title={t} tag={tag} place={place} desc={d} to={to} cta="Explore" index={i} />)}</div>;
const EXPERIENCES = [
  ["heTrain", "Ride the Nilgiri toy train", "A heritage railway through tunnels and tea country.", "Coonoor"],
  ["heFestival", "Join a temple festival", "Chariots, music and flowers fill the streets.", "Tamil Nadu"],
  ["heTrek", "Walk a forest trail", "Easy hikes with views over the Palani Hills.", "Kodaikanal"],
  ["hpOoty", "Explore the Nilgiris", "Tea gardens and cool mountain air.", "The Nilgiris"],
  ["hpMadurai", "Discover Madurai", "Temple streets rich with living tradition.", "Madurai"],
  ["hpKanya", "Watch the meeting of seas", "Sunrise and sunset over three waters.", "Kanyakumari"],
  ["hhButter", "See the Shore Temple", "Pallava stonework beside the Bay of Bengal.", "Mahabalipuram"],
  ["hhPalace", "Visit a Chola landmark", "Monumental architecture and bronze heritage.", "Thanjavur"],
  ["hhKanchi", "Meet silk-weaving traditions", "A temple city known for handwoven silk.", "Kanchipuram"],
  ["hAvalanche", "Take in a mountain view", "Misty ridgelines and green valleys.", "The Nilgiris"],
  ["hKodai2", "Walk among Pillar Rocks", "Granite columns rising above a deep valley.", "Kodaikanal"],
  ["hMusic", "Listen to live Nadaswaram", "Traditional music accompanies temple rituals.", "Tamil Nadu"],
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="section-pad">
        <SectionHeading eyebrow="01 — POPULAR DESTINATIONS" title="Where will your story take you?" description="Start with a place that speaks to you." />
        {grid([
          ["hpOoty", "Ooty", "Misty mountains, tea gardens and a heritage train.", "Hill Station", "The Nilgiris", "/destinations/ooty"],
          ["hpMadurai", "Madurai", "A timeless temple city shaped by tradition.", "Heritage", "Madurai", "/destinations/madurai"],
          ["hpKanya", "Kanyakumari", "Where three seas meet beneath open skies.", "Coastal", "Kanyakumari", "/destinations/kanyakumari"],
        ])}
      </section>

      <Split img="hWelcome" eyebrow="02 — DISCOVER TAMIL NADU" title={<>A little land with<br /><em>a thousand worlds.</em></>}>
        <p>From the cool blue hills of the Nilgiris to sunlit shores and temple towns, Tamil Nadu invites you to slow down, look closer and feel more.</p>
        <Link className="under-link" to="/about">Get to know Tamil Nadu <ArrowUpRight size={16} /></Link>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="03 — HERITAGE AND CULTURE" title="Stone, bronze and living tradition" />
        {grid([
          ["hhButter", "Mahabalipuram", "Pallava monuments carved from granite beside the sea.", "Heritage", "Chengalpattu", "/destinations/mahabalipuram", "hhPalace"],
          ["hhPalace", "Thanjavur", "The Chola capital of temples, bronzes and painting.", "Heritage", "Thanjavur", "/destinations/thanjavur", "hhKanchi"],
          ["hhKanchi", "Kanchipuram", "A city of temples and handwoven silk.", "Culture", "Kanchipuram", "/destinations/kanchipuram", "hhButter"],
        ])}
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="04 — NATURE AND HILL STATIONS" title="Cool air, green valleys" />
        <ImageMarquee direction="left" className="home-valley-marquee" items={[
          { img: "hAvalanche", title: "Doddabetta", place: "The Nilgiris", desc: "The highest peak in the Nilgiris, with panoramic views." },
          { img: "hKodai2", title: "Pillar Rocks", place: "Kodaikanal", desc: "Towering granite pillars above Kodaikanal's valleys." },
          { img: "hCTA", title: "Kolli Hills", place: "Namakkal", desc: "Winding roads, forests and quiet viewpoints." },
          { img: "dOotyN", title: "Tea country", place: "Ooty", desc: "Misty hill slopes and green tea estates." },
          { img: "dYerN", title: "Yercaud", place: "Salem", desc: "Coffee estates and calm hill-country views." },
        ]} />
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="05 — FAMOUS TAMIL NADU FOOD" title="Flavours you'll remember" />
        <div className="destination-grid four">{[["hfVada", "Medu Vada", "Crisp lentil doughnuts served with sambar.", "fIdli"], ["hfKothu", "Kothu Parotta", "Shredded parotta stir-fried with spices.", "fParotta"], ["hfPaniyaram", "Kuzhi Paniyaram", "Pan-cooked rice dumplings with chutney.", "fDosa"], ["hfPayasam", "Payasam", "A sweet pudding served at festive meals.", "fPongal"]].map(([img, t, d, hoverImg], i) => <PhotoCard key={img} img={img} hoverImg={hoverImg} title={t} tag="Food" desc={d} index={i} />)}</div>
        <div className="center-action"><Link className="btn btn-outline" to="/food-culture">Explore Food & Culture <ArrowUpRight size={17} /></Link></div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="06 — TRAVEL EXPERIENCES" title="More than a place — a feeling" />
        <ImageMarquee direction="right" className="home-experience-marquee" items={EXPERIENCES.map(([img,title,desc,place])=>({img,title,desc,place}))} />
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="07 — POPULAR TOURIST ATTRACTIONS" title="Landmarks you'll want to see" />
        <div className="destination-grid four">{[["hpKanyaMemorial", "Vivekananda Rock Memorial", "Kanyakumari"], ["haGingee", "Gingee Fort", "Villupuram"], ["haVellore", "Vellore Fort", "Vellore"], ["haSanthome", "San Thome Basilica", "Chennai"]].map(([img, t, p], i) => <PhotoCard key={img} img={img} title={t} tag="Attraction" place={p} desc="A popular stop on Tamil Nadu itineraries." index={i} />)}</div>
      </section>

      <CTA img="homeRoadCta" className="road-trip-cta" eyebrow="08 — YOUR NEXT CHAPTER" title="The road is calling. Answer it." to="/travel-guide" label="Start planning" />
    </>
  );
}
