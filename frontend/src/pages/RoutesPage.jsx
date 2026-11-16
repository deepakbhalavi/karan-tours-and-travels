import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import RouteCard from '../components/RouteCard';
import CTASection from '../components/CTASection';
import Reveal from '../components/ui/Reveal';
import { ROUTES } from '../data/routes';

export default function RoutesPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ROUTES.filter((r) => `${r.to} ${r.state} ${r.type}`.toLowerCase().includes(q)) : ROUTES;
  }, [query]);

  return (
    <>
      <Seo
        title="Popular Taxi Routes from Nagpur"
        description="One-way and round-trip taxis from Nagpur to Pune, Mumbai, Hyderabad, Bhopal, Jabalpur, Raipur, Amravati, Chandrapur and more. Book with Karan Tours & Travels."
        image="/images/site/cta-road.webp"
      />
      <PageHeader
        eyebrow="Popular Routes"
        title="Outstation taxis from Nagpur"
        description="Comfortable one-way and round-trip cabs to major cities across Maharashtra, Madhya Pradesh, Chhattisgarh and Telangana."
        image="/images/site/hero-suv.webp"
        crumbs={[{ label: 'Routes' }]}
      >
        <div className="relative mt-8 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a city, e.g. Pune"
            aria-label="Search routes"
            className="w-full rounded-full border-0 bg-white py-4 pl-11 pr-5 text-sm text-ink shadow-lift focus:outline-none focus:ring-4 focus:ring-brand/30"
          />
        </div>
      </PageHeader>

      <section className="section pt-12 md:pt-16">
        <div className="container">
          <p className="mb-6 text-sm text-muted">
            Showing <strong className="text-ink">{filtered.length}</strong> route{filtered.length === 1 ? '' : 's'} from Nagpur
          </p>
          {filtered.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((r, i) => (
                <Reveal key={r.slug} delay={(i % 4) * 0.04}>
                  <RouteCard route={r} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-line p-12 text-center">
              <p className="font-display text-xl font-bold">No listed route for “{query}”</p>
              <p className="mt-2 text-sm text-muted">We travel to many more places — contact us for a custom quote.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Travelling somewhere not listed?" description="We cover many more cities and towns. Share your route and we’ll send a quote." />
    </>
  );
}

