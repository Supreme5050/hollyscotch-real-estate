import Link from "next/link";
import { BedDouble, Bath, CarFront, MoveUpRight, MapPin } from "lucide-react";
import type { Property } from "@/lib/data";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/properties/${property.slug}`} className="property-image-wrap">
        <img src={property.image} alt={property.title} className="property-image" loading="lazy" />
        <div className="property-badges">
          <span>{property.status}</span>
          <span className="type-badge">{property.type}</span>
        </div>
      </Link>
      <div className="property-content">
        <div className="property-location"><MapPin size={15}/>{property.location}</div>
        <Link href={`/properties/${property.slug}`}><h3>{property.title}</h3></Link>
        <div className="property-price">{property.price}</div>
        <div className="property-meta">
          <span><BedDouble size={17}/>{property.beds} Beds</span>
          <span><Bath size={17}/>{property.baths} Baths</span>
          <span><CarFront size={17}/>{property.parking} Parking</span>
        </div>
        <Link className="property-link" href={`/properties/${property.slug}`}>View property <MoveUpRight size={17}/></Link>
      </div>
    </article>
  );
}
