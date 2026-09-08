import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const href = "https://wa.me/2348134335308?text=Hello%20HOLLYSCOTCH%2C%20I%20would%20like%20to%20make%20a%20property%20enquiry.";
  return (
    <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp">
      <MessageCircle size={24} />
      <span>WhatsApp</span>
    </a>
  );
}
