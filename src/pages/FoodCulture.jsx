import React from "react";
import { Utensils, Coffee, Leaf } from "lucide-react";
import { PageHero, SectionHeading, PhotoCard, Reveal, CTA, Split } from "../components";

const G = (arr, className = "") => <div className={`destination-grid ${className}`}>{arr.map(([img, t, d, tag, hoverImg], i) => <PhotoCard key={img} img={img} hoverImg={hoverImg} title={t} tag={tag} desc={d} index={i} />)}</div>;

export default function FoodCulture() {
  return (
    <>
      <PageHero img="foodHero" eyebrow="FLAVOURS & TRADITIONS" title={<>Taste the stories<br /><em>behind every dish.</em></>} description="Tamil Nadu's food, festivals and living arts." />

      <section className="section-pad">
        <SectionHeading eyebrow="01 — THE TIFFIN TABLE" title="Breakfast classics" description="Soft, crisp and comforting — the everyday dishes of Tamil homes." />
        {G([["fIdli", "Idli and Sambar", "Steamed rice-and-lentil cakes served with lentil sambar and coconut chutney.", "Food", "hfPaniyaram"], ["fDosa", "Dosa", "A thin fermented rice-and-lentil crepe, served crisp with chutneys and sambar.", "Food", "hfKothu"], ["fPongal", "Pongal", "A savoury dish of rice and moong dal tempered with pepper, cumin and ghee.", "Food", "hfVada"], ["hfVada", "Medu Vada", "Crisp lentil doughnuts served with sambar and coconut chutney.", "Food", "fIdli"], ["hfPaniyaram", "Kuzhi Paniyaram", "Pan-cooked rice dumplings served with chutney.", "Food", "fDosa"], ["hfKothu", "Kothu Parotta", "Chopped parotta tossed with spices, vegetables and salna.", "Food", "fPongal"]], "breakfast-grid")}
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="02 — REGIONAL SPECIALITIES" title="From Chettinad to Madurai" description="Spice, tradition and street-side favourites." />
        {G([["fChettinad", "Chettinad Cuisine", "Bold dishes of the Chettinad region made with freshly ground spices and star anise.", "Chettinad", "fParotta"], ["fJigar", "Madurai Jigarthanda", "A cold Madurai drink of milk, almond gum (badam pisin), sarsaparilla syrup and ice cream.", "Madurai", "hfPayasam"], ["fParotta", "Parotta and Salna", "Flaky layered flatbread served with a thin spiced gravy.", "Street food", "hfKothu"], ["hfKothu", "Kothu Parotta", "Chopped parotta stir-fried with spices and salna.", "Street food", "fParotta"], ["hfPaniyaram", "Kuzhi Paniyaram", "A crisp-edged rice dumpling popular across the region.", "Madurai", "hfVada"], ["hfVada", "Medu Vada", "A savoury lentil snack served hot with chutney.", "Tamil Nadu", "hfPaniyaram"]], "food-scroll-row")}
      </section>

      <Split img="fCoffee" eyebrow="03 — THE DAILY RITUAL" title={<>Tamil Filter Coffee,<br /><em>poured high.</em></>}>
        <p>Strong decoction, hot milk and a little sugar, served in a steel tumbler and davara and cooled by pouring from a height.</p>
      </Split>

      <Split reverse img="fBanana" eyebrow="04 — THE FEAST" title={<>Traditional Banana<br /><em>Leaf Meals.</em></>}>
        <p>Rice, sambar, rasam, kootu, poriyal, pickle, appalam and payasam are served in a set order on a fresh banana leaf.</p>
      </Split>

      <section className="section-pad">
        <SectionHeading eyebrow="05 — FESTIVALS" title="Celebrations of harvest and courage" />
        <div className="two-grid">{[["fPongalFest", "Pongal Festival", "A four-day harvest festival in January, when rice is boiled in a clay pot until it overflows, symbolising abundance.", "Festival"], ["fJallikattu", "Jallikattu", "A traditional bull-taming event held around Pongal, especially in the Madurai region, at places like Alanganallur.", "Tradition"]].map(([img, t, d, tag], i) => <PhotoCard key={img} img={img} title={t} tag={tag} desc={d} index={i} />)}</div>
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="06 — TAMIL TRADITIONAL ARTS" title="Crafts passed down for generations" />
        {G([["fTanjoreArt", "Tanjore Painting", "Gold-leaf paintings of deities made in Thanjavur.", "Art", "fTanjoreArtDetail"], ["fBronze", "Chola Bronzes", "Lost-wax bronze sculptures of Shiva and other deities.", "Art", "aboutHero3"], ["fKolam", "Kolam", "Daily rice-flour patterns drawn at the doorstep.", "Art", "fKolamDetail"], ["fKanchi", "Kanchipuram Silk", "Handwoven silk sarees with temple-inspired borders.", "Craft", "fKanchiWeaving"]])}
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="07 — EATING WELL" title="Simple tips for food lovers" center />
        <div className="value-grid">{[[Utensils, "Eat with your hand", "Traditional meals are eaten with the right hand."], [Leaf, "Try vegetarian", "Many restaurants serve pure vegetarian meals."], [Coffee, "Local coffee shops", "Look for tumbler-and-davara filter coffee."], [Utensils, "Ask for less spice", "Tell the cook if you prefer milder food."]].map(([I, t, d], i) => <Reveal className="value-card" key={t} delay={i * .07}><I /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <CTA img="ctaFood" eyebrow="HUNGRY FOR MORE?" title="Plan a food trail across Tamil Nadu." to="/travel-guide" label="See itineraries" />
    </>
  );
}
