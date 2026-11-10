import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Route, Eye } from "lucide-react";
import { bySlug, DESTINATIONS } from "../data/destinations";
import { Reveal, CTA, PageHero } from "../components";

export default function DestinationDetail() {
  const { slug } = useParams();
  const d = bySlug(slug);
  if (!d) return (
    <section className="section-pad detail-missing"><h1>Destination not found</h1><p>We couldn't find that place.</p><Link className="btn btn-green" to="/destinations">Back to destinations</Link></section>
  );
  const related = DESTINATIONS.filter((x) => x.cat === d.cat && x.slug !== d.slug).slice(0, 3);
  const detailSlides = [d, ...related].slice(0, 4).map((place, index) => [
    place.img,
    index === 0 ? d.cat.toUpperCase() : place.name.toUpperCase(),
    index === 0 ? d.name : `Explore ${place.name}`,
    index === 0 ? d.desc : `${place.desc} Discover more of Tamil Nadu with this destination.`,
    `/destinations/${place.slug}`,
  ]);
  return (
    <>
      <PageHero key={d.slug} img={d.img} pageKey="destinations" slidesOverride={detailSlides} />
      <section className="section-pad detail-body">
        <Reveal className="detail-main"><h2>About {d.name}</h2><p>{d.desc}</p></Reveal>
        <div className="detail-grid">
          <Reveal className="value-card"><Eye /><h3>Top things to see</h3><ul>{d.see.map((s) => <li key={s}>{s}</li>)}</ul></Reveal>
          <Reveal className="value-card" delay={.08}><CalendarDays /><h3>Best time to visit</h3><p>{d.best}</p></Reveal>
          <Reveal className="value-card" delay={.16}><Route /><h3>How to reach</h3><p>{d.reach}</p></Reveal>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section-pad soft-bg">
          <Reveal className="section-heading"><span className="eyebrow">KEEP EXPLORING</span><h2>More {d.cat.toLowerCase()}</h2></Reveal>
          <div className="related-grid">{related.map((r) => <Link key={r.slug} to={`/destinations/${r.slug}`} className="related-link"><strong>{r.name}</strong><span>{r.place}</span><ArrowUpRight size={16} /></Link>)}</div>
        </section>
      )}
      <CTA img="ctaDetail" eyebrow="PLAN YOUR TRIP" title="Ready to go?" to="/travel-guide" label="Open the travel guide" />
    </>
  );
}
