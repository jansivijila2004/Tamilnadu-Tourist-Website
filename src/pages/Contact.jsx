import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ChevronDown, Instagram, Facebook, Youtube, LifeBuoy, Clock, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, Reveal, CTA, Split } from "../components";

const FAQ = [
  ["When is the best time to visit?", "October to March is pleasant for most of the state. Hill stations are cool from October to June."],
  ["Do I need to book temple visits?", "Most temples don't need booking, but dress codes apply and some have special darshan queues."],
  ["Can you arrange an itinerary?", "Send an enquiry with your dates and interests and we'll reply with suggestions."],
  ["Is the state safe for solo travellers?", "Tamil Nadu is generally welcoming; use the usual precautions with valuables and transport at night."],
];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\-\s\d]{7,18}$/;

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);
  const upd = (e) => { setF({ ...f, [e.target.name]: e.target.value }); setErr({ ...err, [e.target.name]: "" }); };
  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    if (!f.email.trim()) e.email = "Please enter your email."; else if (!EMAIL.test(f.email.trim())) e.email = "Enter a valid email address.";
    if (!f.phone.trim()) e.phone = "Please enter your phone number."; else if (!PHONE.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!f.subject.trim()) e.subject = "Please enter a subject.";
    if (!f.message.trim()) e.message = "Please write a message."; else if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };
  const submit = (ev) => { ev.preventDefault(); const e = validate(); setErr(e); if (!Object.keys(e).length) setSent(true); };
  const field = (name, label, type = "text", ph = "") => (
    <label>{label}<input name={name} type={type} value={f[name]} onChange={upd} placeholder={ph} aria-invalid={!!err[name]} aria-describedby={`${name}-err`} />{err[name] && <small id={`${name}-err`} className="field-error">{err[name]}</small>}</label>
  );
  return (
    <>
      <PageHero img="cHero" eyebrow="01 — CONTACT" title={<>Let's make your<br /><em>next trip happen.</em></>} description="Questions, ideas or a little travel inspiration — drop us a line." />

      <section className="section-pad">
        <SectionHeading eyebrow="02 — CONTACT INFORMATION" title="Say Vanakkam" description="Illustrative demo details — replace them with your real contact information before publishing." />
        <div className="value-grid">
          <Reveal className="value-card"><Mail /><h3>Email</h3><p>hello@vanakkamtamilnadu.com</p></Reveal>
          <Reveal className="value-card" delay={.07}><Phone /><h3>Phone</h3><p>Available after you submit the enquiry form</p></Reveal>
          <Reveal className="value-card" delay={.14}><MapPin /><h3>Based in</h3><p>Tamil Nadu, India</p></Reveal>
          <Reveal className="value-card" delay={.21}><Clock /><h3>Replies</h3><p>Usually within two working days</p></Reveal>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="03 — TOURISM ENQUIRY" title="What can we help you plan?" />
        <div className="guide-grid">{[["Itineraries", "Custom routes for 3 to 10 days."], ["Hill stations", "Where to stay and when to go."], ["Heritage tours", "Temple towns and UNESCO sites."]].map(([t, d], i) => <Reveal className="guide-card" delay={i * .08} key={t}><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="section-pad" id="form">
        <SectionHeading eyebrow="04 — CONTACT FORM" title="Write to us" />
        <Reveal className="form-card">
          {sent ? (
            <div className="success-message" role="status"><CheckCircle2 /><h3>Thank you, {f.name.split(" ")[0]}!</h3><p>Your enquiry has been recorded in this demo form. Connect an email service or API to receive real submissions.</p><button className="btn btn-outline" onClick={() => { setSent(false); setF({ name: "", email: "", phone: "", subject: "", message: "" }); }}>Send another message</button></div>
          ) : (
            <form onSubmit={submit} noValidate>
              {field("name", "Name", "text", "Your full name")}
              {field("email", "Email", "email", "you@example.com")}
              {field("phone", "Phone", "tel", "+91 ...")}
              {field("subject", "Subject", "text", "What would you like to know?")}
              <label>Message<textarea rows="5" name="message" value={f.message} onChange={upd} placeholder="Tell us about your plans..." aria-invalid={!!err.message} />{err.message && <small className="field-error">{err.message}</small>}</label>
              <button className="btn btn-green" type="submit">Send message <Send size={16} /></button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="05 — OFFICE INFORMATION" title="Where we work" description="This is a demo website, so no physical office address is listed." />
        <Reveal className="office-card"><MapPin /><div><h3>Online-first travel desk</h3><p>We answer enquiries by email. A real street address and phone number can be added here later.</p></div></Reveal>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="06 — FREQUENTLY ASKED QUESTIONS" title="Quick answers" />
        <div className="faq">{FAQ.map(([q, a], i) => (
          <div key={q} className={`faq-item ${open === i ? "open" : ""}`}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<ChevronDown size={18} /></button>{open === i && <p>{a}</p>}</div>
        ))}</div>
      </section>

      <Split img="cSupport" hoverImg="cCta" hoverTitle="Travel support" hoverDesc="Find route, weather and safety guidance before setting out." eyebrow="07 — TRAVEL SUPPORT" title={<>Help on the road,<br /><em>before and after.</em></>}>
        <p>Use the travel guide for transport, weather and safety advice, or send us a message if you need help choosing a route.</p>
        <Link className="under-link" to="/travel-guide"><LifeBuoy size={16} /> Open the travel guide</Link>
      </Split>

      <section className="section-pad soft-bg">
        <SectionHeading eyebrow="08 — SOCIAL MEDIA" title="Follow the journey" center />
        <div className="socials-row">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook /> Facebook</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Youtube /> YouTube</a>
        </div>
      </section>

      <CTA img="cCta" eyebrow="09 — READY WHEN YOU ARE" title="Your Tamil Nadu story starts here." to="/destinations" label="Explore destinations" />
    </>
  );
}
