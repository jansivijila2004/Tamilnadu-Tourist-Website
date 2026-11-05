import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroSlider from "../HeroSlider";
import { SectionHeading, PhotoCard, CTA, Split } from "../components";

const grid = (items, cols = "") => <div className={`destination-grid ${cols}`}>{items.map(([img, t, d, tag, place, to], i) => <PhotoCard key={img} img={img} title={t} tag={tag} place={place} desc={d} to={to} cta="Explore" index={i} />)}</div>;

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
          ["hhButter", "Mahabalipuram", "Pallava monuments carved from granite beside the sea.", "Heritage", "Chengalpattu", "/destinations/mahabalipuram"],
          ["hhPalace", "Thanjavur", "The Chola capital of temples, bronzes and painting.", "Heritage", "Thanjavur", "/destinations/thanjavur"],
          ["hhKanchi", "Kanchipuram", "A city of temples and handwoven silk.", "Culture", "Kanchipuram", "/destinations/kanchipuram"],
        ])}
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="04 — NATURE AND HILL STATIONS" title="Cool air, green valleys" />
        {grid([
          ["hAvalanche", "Doddabetta", "The highest peak in the Nilgiris, with panoramic views.", "Hills", "The Nilgiris", "/destinations/ooty"],
          ["hKodai2", "Pillar Rocks", "Towering granite pillars above Kodaikanal's valleys.", "Hills", "Kodaikanal", "/destinations/kodaikanal"],
          ["hCTA", "Kolli Hills", "Winding roads, forests and quiet viewpoints.", "Hills", "Namakkal", "/destinations/yercaud"],
        ])}
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="05 — FAMOUS TAMIL NADU FOOD" title="Flavours you'll remember" />
        <div className="destination-grid four">{[["hfVada", "Medu Vada", "Crisp lentil doughnuts served with sambar."], ["hfKothu", "Kothu Parotta", "Shredded parotta stir-fried with spices."], ["hfPaniyaram", "Kuzhi Paniyaram", "Pan-cooked rice dumplings with chutney."], ["hfPayasam", "Payasam", "A sweet pudding served at festive meals."]].map(([img, t, d], i) => <PhotoCard key={img} img={img} title={t} tag="Food" desc={d} index={i} />)}</div>
        <div className="center-action"><Link className="btn btn-outline" to="/food-culture">Explore Food & Culture <ArrowUpRight size={17} /></Link></div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="06 — TRAVEL EXPERIENCES" title="More than a place — a feeling" />
        {grid([
          ["heTrain", "Ride the Nilgiri toy train", "A heritage railway through tunnels and tea country.", "Experience", "Coonoor", "/travel-guide"],
          ["heFestival", "Join a temple festival", "Chariots, music and flowers fill the streets.", "Experience", "Tamil Nadu", "/food-culture"],
          ["heTrek", "Walk a forest trail", "Easy hikes with views over the Palani Hills.", "Experience", "Kodaikanal", "/heritage-nature"],
        ])}
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="07 — POPULAR TOURIST ATTRACTIONS" title="Landmarks you'll want to see" />
        <div className="destination-grid four">{[["hpKanyaMemorial", "Vivekananda Rock Memorial", "Kanyakumari"], ["haGingee", "Gingee Fort", "Villupuram"], ["haVellore", "Vellore Fort", "Vellore"], ["haSanthome", "San Thome Basilica", "Chennai"]].map(([img, t, p], i) => <PhotoCard key={img} img={img} title={t} tag="Attraction" place={p} desc="A popular stop on Tamil Nadu itineraries." index={i} />)}</div>
      </section>

      <CTA img="hCta2" eyebrow="08 — YOUR NEXT CHAPTER" title="The road is calling. Answer it." to="/travel-guide" label="Start planning" />
    </>
  );
}
