import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import VehicleCard from '../components/VehicleCard';
import CTASection from '../components/CTASection';
import Reveal from '../components/ui/Reveal';
import { FLEET, FLEET_CATEGORIES, getVehiclesByCategory } from '../data/fleet';

const CATEGORY_INFO = {
  Sedan: 'Compact and comfortable — perfect for solo travellers, couples and airport transfers.',
  SUV: 'Premium space and comfort for families and long highway journeys.',
  MUV: 'Smart, spacious 7-seaters for small groups and weekend getaways.',
  Urbania: 'Group travel made easy — ideal for pilgrimages, tours and weddings.',
  'Mini Bus': 'For large groups, corporate events and school or college trips.',
};

const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

export default function Fleet() {
  return (
    <>
      <Seo
        title="Our Fleet – Sedan, SUV, MUV, Urbania & Mini Bus"
        description="Choose from Swift Dzire, Toyota Etios, Ertiga, Innova Crysta, Innova HyCross, Kia Carens, Force Urbania, Tata Winger and mini buses. AC taxis from Nagpur."
        image="/images/fleet/innova-crysta.webp"
      />
      <PageHeader
        eyebrow="Our Fleet"
        title="Clean, comfortable cars for every journey"
        description="All vehicles are air-conditioned, well-maintained and driven by experienced, courteous drivers."
        image="/images/site/hero-suv.webp"
        crumbs={[{ label: 'Our Fleet' }]}
      />

      {/* Sticky category nav */}
      <div className="sticky top-[72px] z-30 border-b border-line bg-white/90 backdrop-blur-xl">
        <nav className="container no-scrollbar flex gap-2 overflow-x-auto py-3" aria-label="Vehicle categories">
          {FLEET_CATEGORIES.map((c) => (
            <a key={c} href={`#${slugify(c)}`} className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-semibold text-neutral-600 transition hover:border-ink hover:text-ink">
              {c} <span className="text-neutral-400">({getVehiclesByCategory(c).length})</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="py-12 md:py-16">
        {FLEET_CATEGORIES.map((c, idx) => (
          <section key={c} id={slugify(c)} className={`scroll-mt-36 py-10 md:py-14 ${idx % 2 ? 'bg-surface' : ''}`} aria-labelledby={`${slugify(c)}-title`}>
            <div className="container">
              <Reveal className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Category {String(idx + 1).padStart(2, '0')}</p>
                  <h2 id={`${slugify(c)}-title`} className="mt-2 text-3xl font-extrabold sm:text-4xl">{c}</h2>
                </div>
                <p className="max-w-md text-sm text-muted md:text-right">{CATEGORY_INFO[c]}</p>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {getVehiclesByCategory(c).map((v, i) => (
                  <Reveal key={v.id} delay={i * 0.06}>
                    <VehicleCard vehicle={v} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <p className="container -mt-6 pb-4 text-center text-xs text-neutral-400">
        Images are representative. Exact model, colour and features are subject to availability. {FLEET.length} vehicle types listed.
      </p>
      <CTASection title="Not sure which vehicle to choose?" description="Tell us your group size and luggage — we’ll recommend the most comfortable and economical option." />
    </>
  );
}

