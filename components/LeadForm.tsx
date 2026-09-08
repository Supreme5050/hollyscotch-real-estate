"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function LeadForm({ propertyTitle }: { propertyTitle?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(propertyTitle ? `I would like to book an inspection for ${propertyTitle}.` : "I would like help finding the right property.");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello HOLLYSCOTCH, my name is ${name || "a prospective client"}. ${message}${phone ? ` My phone number is ${phone}.` : ""}`;
    window.open(`https://wa.me/2348134335308?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Your name</span><input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" /></label>
        <label><span>Phone number</span><input value={phone} onChange={e => setPhone(e.target.value)} placeholder="e.g. 0801 234 5678" /></label>
      </div>
      <label><span>How can we help?</span><textarea required value={message} onChange={e => setMessage(e.target.value)} rows={4} /></label>
      <button className="btn btn-gold" type="submit">Continue on WhatsApp <ArrowUpRight size={18}/></button>
      <small>Submitting opens WhatsApp with your enquiry pre-filled. No form data is stored on this demo website.</small>
    </form>
  );
}
