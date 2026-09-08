import LeadForm from "@/components/LeadForm";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero"><div className="container page-hero-content"><div className="eyebrow light">Contact</div><h1>Let’s talk about <em>your next property move.</em></h1><p>Send a brief, request an inspection or ask HOLLYSCOTCH to help you find a suitable property.</p></div></section>
      <section className="section"><div className="container contact-page-grid"><div><div className="eyebrow">Direct enquiries</div><h2>Start with a <em>simple conversation.</em></h2><p className="lead-copy">For the fastest response, contact HOLLYSCOTCH directly on WhatsApp with your location, budget, property type and preferred timeline.</p><div className="contact-details"><a href="https://wa.me/2348134335308" target="_blank" rel="noreferrer"><MessageCircle/><div><span>WhatsApp</span><strong>0813 433 5308</strong></div></a><a href="tel:+2348134335308"><Phone/><div><span>Call</span><strong>0813 433 5308</strong></div></a><a href="mailto:hello@hollyscotchrealestate.com"><Mail/><div><span>Email</span><strong>hello@hollyscotchrealestate.com</strong></div></a><div><MapPin/><div><span>Service area</span><strong>Nigeria</strong></div></div><div><Clock3/><div><span>Enquiry hours</span><strong>Mon – Sat · 8:00 AM – 7:00 PM</strong></div></div></div></div><div className="contact-form-card"><div className="eyebrow">Property enquiry</div><h3>Tell us what you need.</h3><LeadForm /></div></div></section>
    </>
  );
}
