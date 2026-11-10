import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Landmark, Mountain, TreePine, Waves } from "lucide-react";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split, ImageMarquee } from "../components";
import TNImage from "../TNImage";

const DANCES = [
  ["danBharata", "Bharatanatyam", "A classical dance of Tamil Nadu with precise footwork (adavus), hand gestures (mudras) and expressive storytelling.", "Born in temples and devadasi traditions, it is now a global symbol of Tamil classical arts.", "danKummi"],
  ["danKaraga", "Karagattam", "Dancers balance decorated pots on the head while moving to folk music.", "Performed for the rain goddess Mariamman and at village festivals.", "danKavadi"],
  ["danMayil", "Mayilattam", "Dancers wear peacock costumes with feathered trains and beaked headgear.", "Often linked with Lord Murugan, whose mount is the peacock.", "danPoikkal"],
  ["danOyil", "Oyilattam", "A group dance of rhythmic steps and swaying handkerchiefs performed in lines and circles.", "Associated with temple festivals, especially in the Madurai–Theni region.", "danKummi"],
  ["danTheru", "Therukoothu", "Street theatre combining dance, song and elaborate make-up.", "Retells stories from the Mahabharata and Ramayana in village squares.", "danKaraga"],
  ["danPoikkal", "Poikkal Kuthirai Attam", "Dancers wear dummy horses fixed at the waist and perform trotting steps.", "Honours guardian deities and the heroic horse of folk tales.", "danMayil"],
  ["danKavadi", "Kavadi Attam", "Devotees dance with decorated, arch-shaped kavadi frames.", "An offering to Lord Murugan, especially at Thaipusam.", "danKaraga"],
  ["danKummi", "Kummi", "Women dance in a circle, clapping to the rhythm of simple songs.", "Performed at harvest festivals and celebrations such as Pongal.", "danOyil"],
  ["danWorldRecord", "World Record Event", "Performers celebrate a world-record award recognising Tamil folk dance.", "A moment of recognition for Oyilattam and the artists who keep Tamil folk traditions alive.", "danOyil"],
];
const NATURE = [
  ["dOotyN", "Ooty", "The Nilgiris", "Misty hills, tea estates and a heritage mountain railway.", "Famous as the 'Queen of Hill Stations'."],
  ["dKodaiN", "Kodaikanal", "Dindigul district", "A star-shaped lake surrounded by pine forests and valleys.", "Famous for its cool climate and viewpoints like Coaker's Walk."],
  ["dHogeN", "Hogenakkal Falls", "Dharmapuri district", "A series of cascades and rocky gorges on the Cauvery.", "Famous for coracle rides beneath the falls."],
  ["dCourtN", "Courtallam Falls", "Tenkasi district", "Cascades flowing from the Western Ghats.", "Famous for its herbal-water bathing tradition."],
  ["dKanyaN", "Kanyakumari", "Kanyakumari district", "Where three seas meet at India's southern tip.", "Famous for sunrise and sunset views over the ocean."],
  ["dPichN", "Pichavaram Mangrove Forest", "Cuddalore district", "Narrow water channels weaving through mangrove islands.", "Famous as one of India's largest mangrove forests."],
  ["dYerN", "Yercaud", "Salem district", "Coffee estates and a calm lake in the Shevaroy Hills.", "Famous as a quiet, affordable hill getaway."],
  ["dValN", "Valparai", "Coimbatore district", "Tea plantations and rainforest on the Anamalai Hills.", "Famous for wildlife sightings and 40 hairpin bends."],
];

export default function HeritageNature() {
  return (
    <>
      <PageHero img="hnHero" eyebrow="PAST MEETS PRESENT" title={<>Stories carved in stone.<br /><em>Beauty grown wild.</em></>} description="Classical and folk dances, great temples and the wild landscapes of Tamil Nadu." />

      <section className="section-pad">
        <SectionHeading eyebrow="TWO SIDES OF WONDER" title="A journey through time and nature." center />
        <div className="value-grid">{[[Landmark, "Living monuments", "Chola, Pallava and Nayak monuments still in daily worship."], [Mountain, "Mountain escapes", "The cool air of the Nilgiris and the Western Ghats."], [TreePine, "Wild spaces", "Mangroves, forests and tea-covered hills."], [Waves, "Coastal treasures", "Beaches, fishing villages and ocean-side heritage."]].map(([I, t, d], i) => <Reveal className="value-card" key={t} delay={i * .07}><I /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="section-pad soft-bg" id="dances">
        <SectionHeading eyebrow="A. TRADITIONAL DANCES" title="Dances and cultural highlights of Tamil Nadu" description="Classical and folk art forms, each with its own costume, rhythm and meaning, alongside celebrations of their achievements." />
        <div className="destination-grid dance-grid">{DANCES.map(([img, t, d, c, hoverImg], i) => <PhotoCard key={img} img={img} hoverImg={hoverImg} title={t} tag="Dance" desc={d} extra={`Cultural importance: ${c}`} index={i} />)}</div>
      </section>

      <Split img="hnCarving" eyebrow="THE HERITAGE TRAIL" title={<>Centuries of craft.<br /><em>One unforgettable view.</em></>}>
        <p>Dravidian temples are covered in carved pillars, painted gopurams and sculpted corridors that tell stories from Tamil and Sanskrit traditions.</p>
        <Link className="under-link" to="/destinations">Explore heritage places <ArrowUpRight size={16} /></Link>
      </Split>

      <section className="section-pad soft-bg" id="nature">
        <SectionHeading eyebrow="B. NATURAL PLACES" title="Eight beautiful natural destinations" description="From misty hills to mangrove forests." />
        <ImageMarquee direction="right" className="nature-marquee" items={NATURE.map(([img,title,place,desc,why])=>({img,title,place,desc:`${desc} ${why}`}))} />
      </section>

      <Split reverse img="hnStone" eyebrow="STONE AND SPIRIT" title={<>Every temple is<br /><em>a living museum.</em></>}>
        <p>Notice the carvings, listen to the nadaswaram at evening puja and give yourself time to look beyond the famous view.</p>
      </Split>

      <section className="section-pad">
        <SectionHeading eyebrow="TRAVEL THOUGHTFULLY" title="Protect what makes a place special." center />
        <div className="guide-grid">{[["Be respectful", "Dress modestly and follow customs at sacred places."], ["Leave no trace", "Stay on marked trails and avoid plastic."], ["Support local", "Buy from local artisans and family-run eateries."]].map(([t, d], i) => <Reveal className="guide-card" key={t} delay={i * .08}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="quote-band"><span>“</span><p>Walk through history.<br /><em>Wander into nature.</em></p><small>THE MANY LAYERS OF TAMIL NADU</small></section>

      <CTA img="ctaHN" eyebrow="YOUR TRAIL STARTS HERE" title="Go where wonder grows." to="/travel-guide" label="Plan your visit" />
    </>
  );
}
