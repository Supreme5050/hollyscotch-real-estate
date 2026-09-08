import PropertyFilters from "@/components/PropertyFilters";

export default async function PropertiesPage({ searchParams }: { searchParams: Promise<{ city?: string; type?: string; status?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <section className="page-hero properties-hero">
        <div className="container page-hero-content">
          <div className="eyebrow light">HOLLYSCOTCH portfolio</div>
          <h1>Find a property that <em>fits the brief.</em></h1>
          <p>Explore a curated demo portfolio of premium homes, apartments and investment opportunities.</p>
        </div>
      </section>
      <section className="section property-page-section">
        <div className="container"><PropertyFilters initialCity={params.city} initialType={params.type} initialStatus={params.status} /></div>
      </section>
    </>
  );
}
