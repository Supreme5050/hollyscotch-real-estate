"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";

export default function HeroSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState("All types");
  const [purpose, setPurpose] = useState("Any purpose");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const qs = new URLSearchParams();
    if (location !== "All locations") qs.set("city", location);
    if (type !== "All types") qs.set("type", type);
    if (purpose !== "Any purpose") qs.set("status", purpose);
    router.push(`/properties${qs.toString() ? `?${qs}` : ""}`);
  }

  return (
    <form className="hero-search" onSubmit={submit}>
      <label>
        <span>Location</span>
        <select value={location} onChange={e => setLocation(e.target.value)}>
          <option>All locations</option><option>Lagos</option><option>Abuja</option>
        </select>
      </label>
      <label>
        <span>Property type</span>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option>All types</option><option>Duplex</option><option>Detached House</option><option>Penthouse</option><option>Terrace</option><option>Apartment</option>
        </select>
      </label>
      <label>
        <span>Looking to</span>
        <select value={purpose} onChange={e => setPurpose(e.target.value)}>
          <option>Any purpose</option><option>For Sale</option><option>For Rent</option>
        </select>
      </label>
      <button type="submit"><Search size={19}/> Search properties</button>
    </form>
  );
}
