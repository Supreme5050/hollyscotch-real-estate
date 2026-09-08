import Link from "next/link";
import { Instagram, MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/hollyscotch-logo.png" alt="HOLLYSCOTCH" />
          <p>Premium real estate representation for clients who value clarity, discretion and exceptional property opportunities.</p>
          <div className="social-row">
            <a href="https://wa.me/2348134335308" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/properties">Properties</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Property Services</h4>
          <span>Sales & acquisitions</span>
          <span>Luxury rentals</span>
          <span>Investment advisory</span>
          <span>Property marketing</span>
        </div>
        <div>
          <h4>Enquiries</h4>
          <a href="tel:+2348134335308"><Phone size={16}/> 0813 433 5308</a>
          <a href="mailto:hello@hollyscotchrealestate.com"><Mail size={16}/> hello@hollyscotchrealestate.com</a>
          <span><MapPin size={16}/> Nigeria</span>
          <a className="footer-enquire" href="https://wa.me/2348134335308" target="_blank" rel="noreferrer">Start an enquiry <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 HOLLYSCOTCH Real Estate & House Agency.</span>
        <span>Built for a premium property experience.</span>
      </div>
    </footer>
  );
}
