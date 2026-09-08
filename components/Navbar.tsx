"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP = "https://wa.me/2348134335308?text=Hello%20HOLLYSCOTCH%2C%20I%20would%20like%20to%20make%20a%20property%20enquiry.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="HOLLYSCOTCH home">
          <img src="/hollyscotch-logo.png" alt="HOLLYSCOTCH Real Estate & House Agency" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="nav-cta desktop-only" href={WHATSAPP} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Enquire Now
        </a>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <div className="container mobile-links">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/properties" onClick={() => setOpen(false)}>Properties</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Enquiry</a>
          </div>
        </div>
      )}
    </header>
  );
}
