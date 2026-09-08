export type Property = {
  slug: string;
  title: string;
  location: string;
  city: string;
  type: string;
  status: "For Sale" | "For Rent";
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  parking: number;
  area: string;
  image: string;
  images: string[];
  featured?: boolean;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "luxury-duplex-lekki-phase-1",
    title: "Signature 5-Bedroom Smart Duplex",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    type: "Duplex",
    status: "For Sale",
    price: "₦420,000,000",
    priceValue: 420000000,
    beds: 5,
    baths: 6,
    parking: 4,
    area: "520 sqm",
    image: "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=1600&q=88",
    images: [
      "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?auto=format&fit=crop&w=1600&q=88",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
    ],
    featured: true,
    description: "An exceptional contemporary residence crafted for refined living, with generous entertaining spaces, premium finishes and intelligent home features.",
    features: ["Private cinema", "Smart home automation", "Swimming pool", "Fully fitted kitchen", "BQ", "24/7 security"]
  },
  {
    slug: "waterfront-home-banana-island",
    title: "Waterfront Contemporary Residence",
    location: "Banana Island, Ikoyi",
    city: "Lagos",
    type: "Detached House",
    status: "For Sale",
    price: "₦1,250,000,000",
    priceValue: 1250000000,
    beds: 6,
    baths: 7,
    parking: 6,
    area: "850 sqm",
    image: "https://images.unsplash.com/photo-1743167769242-f46e29b772d3?auto=format&fit=crop&w=1600&q=88",
    images: [
      "https://images.unsplash.com/photo-1743167769242-f46e29b772d3?auto=format&fit=crop&w=1600&q=88",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88"
    ],
    featured: true,
    description: "A landmark waterfront home designed around privacy, prestige and effortless indoor-outdoor living in one of Lagos' most exclusive addresses.",
    features: ["Waterfront frontage", "Private elevator", "Infinity pool", "Home office", "Gym", "Backup power"]
  },
  {
    slug: "penthouse-victoria-island",
    title: "Skyline Penthouse Collection",
    location: "Victoria Island, Lagos",
    city: "Lagos",
    type: "Penthouse",
    status: "For Sale",
    price: "₦680,000,000",
    priceValue: 680000000,
    beds: 4,
    baths: 5,
    parking: 3,
    area: "410 sqm",
    image: "https://images.unsplash.com/photo-1775733924031-521cd86c69cc?auto=format&fit=crop&w=1600&q=88",
    images: [
      "https://images.unsplash.com/photo-1775733924031-521cd86c69cc?auto=format&fit=crop&w=1600&q=88",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=88"
    ],
    featured: true,
    description: "A sophisticated penthouse with dramatic skyline views, expansive living spaces and a hospitality-inspired resident experience.",
    features: ["Private terrace", "City views", "Concierge", "Residents' lounge", "Pool", "Secure parking"]
  },
  {
    slug: "executive-terrace-chevron",
    title: "Executive 4-Bed Terrace",
    location: "Chevron, Lekki",
    city: "Lagos",
    type: "Terrace",
    status: "For Sale",
    price: "₦185,000,000",
    priceValue: 185000000,
    beds: 4,
    baths: 5,
    parking: 2,
    area: "320 sqm",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566752734-2a0cd70b0a2f?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "A beautifully finished terrace home in a serene gated community, ideal for owner-occupiers and investors seeking strong long-term value.",
    features: ["Gated estate", "Fitted wardrobes", "Family lounge", "BQ", "CCTV", "Good access roads"]
  },
  {
    slug: "furnished-apartment-wuse-2",
    title: "Furnished Executive Apartment",
    location: "Wuse 2, Abuja",
    city: "Abuja",
    type: "Apartment",
    status: "For Rent",
    price: "₦22,000,000 / yr",
    priceValue: 22000000,
    beds: 3,
    baths: 4,
    parking: 2,
    area: "240 sqm",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "Move-in ready executive living with tasteful furnishings and dependable estate services in the heart of Abuja.",
    features: ["Fully furnished", "Serviced estate", "Gym", "24/7 power", "Elevator", "Security"]
  },
  {
    slug: "family-home-maitama",
    title: "Prestige Family Residence",
    location: "Maitama, Abuja",
    city: "Abuja",
    type: "Detached House",
    status: "For Rent",
    price: "₦65,000,000 / yr",
    priceValue: 65000000,
    beds: 5,
    baths: 6,
    parking: 5,
    area: "730 sqm",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=88",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "An expansive residence for diplomatic, executive and family living, with landscaped outdoor areas and impressive reception spaces.",
    features: ["Large compound", "Landscaped garden", "BQ", "Family lounges", "Study", "Security"]
  }
];

export const services = [
  { title: "Property Sales", text: "Curated residential and investment opportunities, professionally marketed and discreetly negotiated." },
  { title: "Luxury Rentals", text: "Premium homes, apartments and executive residences matched to the right tenants and lifestyles." },
  { title: "Property Acquisition", text: "Buyer representation, property sourcing, inspection coordination and negotiation from brief to handover." },
  { title: "Investment Advisory", text: "Clear market guidance for clients seeking income, appreciation, land banking or portfolio diversification." },
  { title: "Property Marketing", text: "High-end presentation, digital exposure and qualified buyer outreach designed to position properties properly." },
  { title: "Inspection & Due Diligence", text: "Structured inspection support and transaction guidance to help clients proceed with greater confidence." }
];
