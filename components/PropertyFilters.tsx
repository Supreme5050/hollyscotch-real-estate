"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

export default function PropertyFilters({ initialCity = "", initialType = "", initialStatus = "" }: { initialCity?: string; initialType?: string; initialStatus?: string }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(initialCity || "All");
  const [type, setType] = useState(initialType || "All");
  const [status, setStatus] = useState(initialStatus || "All");

  const filtered = useMemo(() => properties.filter(p => {
    const q = query.trim().toLowerCase();
    return (!q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q))
      && (city === "All" || p.city === city)
      && (type === "All" || p.type === type)
      && (status === "All" || p.status === status);
  }), [query, city, type, status]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-search"><Search size={19}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by property or location" /></div>
        <label><span><SlidersHorizontal size={16}/> City</span><select value={city} onChange={e => setCity(e.target.value)}><option>All</option><option>Lagos</option><option>Abuja</option></select></label>
        <label><span>Type</span><select value={type} onChange={e => setType(e.target.value)}><option>All</option><option>Duplex</option><option>Detached House</option><option>Penthouse</option><option>Terrace</option><option>Apartment</option></select></label>
        <label><span>Purpose</span><select value={status} onChange={e => setStatus(e.target.value)}><option>All</option><option>For Sale</option><option>For Rent</option></select></label>
      </div>
      <div className="results-row"><strong>{filtered.length}</strong> curated properties <span>• Demo portfolio</span></div>
      {filtered.length ? <div className="property-grid">{filtered.map(p => <PropertyCard key={p.slug} property={p} />)}</div> : <div className="empty-state"><h3>No exact matches yet.</h3><p>Try adjusting the filters, or send HOLLYSCOTCH your property brief on WhatsApp.</p><a className="btn btn-gold" href="https://wa.me/2348134335308" target="_blank" rel="noreferrer">Send property brief</a></div>}
    </>
  );
}
