import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bath, BedDouble, CarFront, Check, MapPin, Move, ShieldCheck } from "lucide-react";
import { properties } from "@/lib/data";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() { return properties.map(p => ({ slug: p.slug })); }

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find(p => p.slug === slug);
  if (!property) notFound();
  return (
    <>
      <section className="detail-top">
        <div className="container">
          <Link href="/properties" className="back-link"><ArrowLeft size={17}/> Back to properties</Link>
          <div className="detail-title-row">
            <div><div className="property-location"><MapPin size={15}/>{property.location}</div><h1>{property.title}</h1></div>
            <div className="detail-price"><span>{property.status}</span><strong>{property.price}</strong></div>
          </div>
        </div>
      </section>
      <section className="container gallery-grid">
        <img className="gallery-main" src={property.images[0]} alt={property.title} />
        <img src={property.images[1]} alt={`${property.title} interior`} />
        <img src={property.images[2]} alt={`${property.title} detail`} />
      </section>
      <section className="section detail-section">
        <div className="container detail-layout">
          <div className="detail-main">
            <div className="detail-meta">
              <span><BedDouble/> <strong>{property.beds}</strong> Bedrooms</span>
              <span><Bath/> <strong>{property.baths}</strong> Bathrooms</span>
              <span><CarFront/> <strong>{property.parking}</strong> Parking</span>
              <span><Move/> <strong>{property.area}</strong> Size</span>
            </div>
            <div className="detail-copy-block"><div className="eyebrow">Property overview</div><h2>Designed for <em>elevated living.</em></h2><p>{property.description}</p></div>
            <div className="feature-block"><h3>Key features</h3><div className="feature-grid">{property.features.map(f => <span key={f}><Check size={16}/>{f}</span>)}</div></div>
            <div className="due-card"><ShieldCheck size={26}/><div><strong>Transaction support</strong><p>HOLLYSCOTCH coordinates enquiries and inspections and can guide clients on the next steps required before commitment.</p></div></div>
          </div>
          <aside className="detail-aside">
            <div className="aside-card"><div className="eyebrow">Book an inspection</div><h3>Interested in this property?</h3><p>Send your details and continue the conversation directly on WhatsApp.</p><LeadForm propertyTitle={property.title}/></div>
          </aside>
        </div>
      </section>
    </>
  );
}
