import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, Home, KeyRound, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import HeroSearch from "@/components/HeroSearch";
import PropertyCard from "@/components/PropertyCard";
import LeadForm from "@/components/LeadForm";
import { properties, services } from "@/lib/data";

export default function HomePage() {
  const featured = properties.filter(p => p.featured);
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=92" alt="Luxury modern residence" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow light"><Sparkles size={16}/> Discreet. Premium. Property-led.</div>
          <h1>Exceptional homes.<br/><em>Exceptional representation.</em></h1>
          <p>HOLLYSCOTCH connects discerning buyers, tenants and investors with premium property opportunities — backed by personal service from enquiry to handover.</p>
          <div className="hero-actions">
            <Link href="/properties" className="btn btn-gold">Explore properties <ArrowUpRight size={18}/></Link>
            <a href="https://wa.me/2348134335308?text=Hello%20HOLLYSCOTCH%2C%20I%20have%20a%20property%20brief%20to%20share." target="_blank" rel="noreferrer" className="btn btn-glass">Share your brief</a>
          </div>
          <HeroSearch />
        </div>
        <div className="hero-trust container">
          <span><BadgeCheck size={18}/> Verified property guidance</span>
          <span><ShieldCheck size={18}/> Discreet client service</span>
          <span><KeyRound size={18}/> Inspection coordination</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">The HOLLYSCOTCH standard</div>
            <h2>Real estate should feel <em>clear, confident and considered.</em></h2>
          </div>
          <div className="intro-copy">
            <p>From a first home to a high-value investment, we present opportunities properly, communicate clearly and help clients move through each decision with confidence.</p>
            <Link href="/about" className="text-link">Discover our approach <ArrowRight size={17}/></Link>
          </div>
        </div>
        <div className="container stat-grid">
          <div><strong>01</strong><span>Curated opportunities</span><p>Only properties aligned with the client brief and positioning.</p></div>
          <div><strong>02</strong><span>Responsive service</span><p>Fast, direct communication across enquiry, inspection and negotiation.</p></div>
          <div><strong>03</strong><span>Premium presentation</span><p>Every listing is presented to create trust and stronger buyer interest.</p></div>
          <div><strong>04</strong><span>Client-first guidance</span><p>Clear next steps and practical support throughout the transaction.</p></div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container section-head light-head">
          <div><div className="eyebrow light">Featured portfolio</div><h2>Properties worth <em>your attention.</em></h2></div>
          <Link href="/properties" className="text-link light-link">View all properties <ArrowRight size={17}/></Link>
        </div>
        <div className="container property-grid">{featured.map(p => <PropertyCard key={p.slug} property={p} />)}</div>
      </section>

      <section className="section expertise-section">
        <div className="container expertise-layout">
          <div className="expertise-visual">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90" alt="Premium modern residence" />
            <div className="expertise-image-shade" />
            <div className="expertise-image-copy">
              <span>HOLLYSCOTCH</span>
              <h3>Property, handled with intention.</h3>
              <Link href="/services" className="image-link">Explore our services <ArrowUpRight size={17}/></Link>
            </div>
          </div>

          <div className="expertise-content">
            <div className="eyebrow">What we do</div>
            <h2>Expert guidance for <em>every property move.</em></h2>
            <p className="expertise-lead">From finding the right home to positioning a property for sale, we keep the process focused, discreet and clear.</p>

            <div className="expertise-list">
              {services.slice(0, 4).map((s, i) => (
                <Link href="/services" className="expertise-row" key={s.title}>
                  <span className="expertise-number">{String(i+1).padStart(2,"0")}</span>
                  <h3>{s.title}</h3>
                  <ArrowUpRight size={21}/>
                </Link>
              ))}
            </div>

            <Link href="/services" className="btn btn-dark expertise-cta">View all services <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-image"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90" alt="Luxury interior" /></div>
        <div className="showcase-copy">
          <div className="eyebrow light">For buyers & investors</div>
          <h2>Tell us what you want. <em>We help you find it.</em></h2>
          <p>Share your preferred location, property type, budget and timeline. HOLLYSCOTCH can turn a broad search into a focused shortlist.</p>
          <div className="check-list"><span><Home size={19}/> Residential acquisition</span><span><Building2 size={19}/> Investment property sourcing</span><span><MapPin size={19}/> Location-led search</span></div>
          <a className="btn btn-gold" href="https://wa.me/2348134335308?text=Hello%20HOLLYSCOTCH%2C%20I%20would%20like%20to%20share%20my%20property%20brief." target="_blank" rel="noreferrer">Send your property brief <ArrowUpRight size={18}/></a>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-wrap">
          <div><div className="eyebrow">Client experience</div><h2>Service that feels <em>personal.</em></h2></div>
          <blockquote>“The premium difference is not just the property. It is how well the client is guided through the process.”<span>— HOLLYSCOTCH service promise</span></blockquote>
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2>Your next property move <em>starts with a clear brief.</em></h2>
            <p>Whether you are buying, renting, selling or investing, tell HOLLYSCOTCH what you need and we will take it from there.</p>
            <div className="contact-pill"><span>WhatsApp / Call</span><strong>0813 433 5308</strong></div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
