import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Eye, Handshake, ShieldCheck, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero"><div className="container page-hero-content"><div className="eyebrow light">About HOLLYSCOTCH</div><h1>Professional real estate, <em>personally delivered.</em></h1><p>A premium agency approach built around trust, presentation, market awareness and responsive client service.</p></div></section>
      <section className="section"><div className="container about-split"><div><div className="eyebrow">Our point of view</div><h2>Property is valuable. <em>So is the way it is handled.</em></h2></div><div><p className="lead-copy">HOLLYSCOTCH Real Estate & House Agency is positioned to serve clients who expect more than a property listing. We focus on thoughtful representation, clear communication and a smoother experience from the first enquiry to the final decision.</p><p>For sellers and landlords, that means stronger presentation and qualified interest. For buyers, tenants and investors, it means a more focused search and professional guidance throughout the process.</p></div></div></section>
      <section className="section soft-section"><div className="container values-grid"><div className="value-card"><ShieldCheck/><h3>Trust</h3><p>Clear information, professional conduct and a relationship-first approach.</p></div><div className="value-card"><Eye/><h3>Presentation</h3><p>Premium visual and written positioning that makes every opportunity easier to understand.</p></div><div className="value-card"><Target/><h3>Focus</h3><p>Property briefs are translated into relevant options instead of unnecessary noise.</p></div><div className="value-card"><Handshake/><h3>Service</h3><p>Responsive support before, during and after inspections and negotiations.</p></div></div></section>
      <section className="about-image-band"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90" alt="Premium interior"/><div className="container image-band-copy"><BadgeCheck/><h2>For people who want to make <em>better property decisions.</em></h2><Link href="/contact" className="btn btn-gold">Talk to HOLLYSCOTCH <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
