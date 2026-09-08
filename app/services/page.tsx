import { ArrowUpRight, Building2, ChartNoAxesCombined, House, KeyRound, Megaphone, ScanSearch } from "lucide-react";
import { services } from "@/lib/data";

const icons = [House, KeyRound, ScanSearch, ChartNoAxesCombined, Megaphone, Building2];
export default function ServicesPage() {
  return (
    <>
      <section className="page-hero services-hero"><div className="container page-hero-content"><div className="eyebrow light">Services</div><h1>End-to-end support for <em>property decisions.</em></h1><p>Whether you are buying, selling, renting or investing, HOLLYSCOTCH brings structure and polish to the process.</p></div></section>
      <section className="section"><div className="container services-page-grid">{services.map((s, i) => { const Icon = icons[i]; return <article className="service-card" key={s.title}><div className="service-icon"><Icon/></div><span>{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.text}</p><a href={`https://wa.me/2348134335308?text=${encodeURIComponent(`Hello HOLLYSCOTCH, I am interested in your ${s.title} service.`)}`} target="_blank" rel="noreferrer">Ask about this service <ArrowUpRight size={17}/></a></article>;})}</div></section>
      <section className="section dark-section"><div className="container process-wrap"><div><div className="eyebrow light">How it works</div><h2>A simple process, <em>handled professionally.</em></h2></div><div className="process-grid"><div><strong>01</strong><h3>Share your brief</h3><p>Tell us your objective, preferred locations, budget and timeline.</p></div><div><strong>02</strong><h3>Review opportunities</h3><p>We help narrow the market to options that make sense for you.</p></div><div><strong>03</strong><h3>Inspect & evaluate</h3><p>Schedule inspections and ask the questions that matter before deciding.</p></div><div><strong>04</strong><h3>Proceed with confidence</h3><p>Move into negotiation and transaction steps with clear communication.</p></div></div></div></section>
    </>
  );
}
