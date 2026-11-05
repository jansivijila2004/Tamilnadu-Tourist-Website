import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, CalendarDays, Route, Eye } from "lucide-react";
import { bySlug, DESTINATIONS } from "../data/destinations";
import { Reveal, CTA } from "../components";

export default function DestinationDetail() {
  const { slug } = useParams();
  const d = bySlug(slug);
  if (!d) return (
    <section className="section-pad detail-missing"><h1>Destination not found</h1><p>We couldn't find that place.</p><Link className="btn btn-green" to="/destinations">Back to destinations</Link></section>
  );
  const related = DESTINATIONS.filter((x) => x.cat === d.cat && x.slug !== d.slug).slice(0, 3);
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <Link to="/destinations" className="back-link"><ArrowLeft size={16} /> All destinations</Link>
          <span className="eyebrow light">{d.cat.toUpperCase()}</span>
          <h1>{d.name}</h1>
          <p><MapPin size={16} /> {d.place}</p>
        </div>
      </section>
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
