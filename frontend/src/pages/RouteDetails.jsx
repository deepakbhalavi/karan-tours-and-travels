import { Link, useParams } from 'react-router-dom';
import { Car, CheckCircle2, Clock, IndianRupee, MapPin, Milestone, Navigation, Phone } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import BookingWidget from '../components/BookingWidget';
import FAQAccordion from '../components/FAQAccordion';
import RouteCard from '../components/RouteCard';
import CTASection from '../components/CTASection';
import Reveal from '../components/ui/Reveal';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { ROUTES, getRoute, getRouteFaqs } from '../data/routes';
import { SITE } from '../config/site';
import { whatsappLink } from '../utils/whatsapp';
import NotFound from './NotFound';

function Stat({ icon: I, label, value, muted }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <I className="h-5 w-5 text-brand-600" aria-hidden="true" />
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</p>
      <p className={`mt-1 font-display font-bold ${muted ? 'text-sm text-neutral-500' : 'text-lg'}`}>{value}</p>
    </div>
  );
}

/** Reusable dynamic page for every /routes/:slug */
export default function RouteDetails() {
  const { slug } = useParams();
  const route = getRoute(slug);
  if (!route) return <NotFound />;

  const { from, to, state, distanceKm, duration, pricing, vehicles, description, highlights, image } = route;
  const faqs = getRouteFaqs(route);
  const waMsg = `Hello ${SITE.name}, I want to book a taxi from ${from} to ${to}. Please share availability and fare.`;
  const others = ROUTES.filter((r) => r.slug !== slug).slice(0, 4);

  return (
    <>
      <Seo
        title={`${from} to ${to} Taxi – One-Way & Round Trip Cab`}
        description={`Book a ${from} to ${to} taxi with ${SITE.name}. ${vehicles.join(', ')} available for one-way and round trips. Clean AC cars, experienced drivers. Call ${SITE.phone}.`}
        image={image}
      />
      <PageHeader
        eyebrow={`${route.type} · ${state}`}
        title={`${from} to ${to} Taxi`}
        description={`Comfortable one-way and round-trip cab service from ${from} to ${to} with clean AC cars and experienced drivers.`}
        image={image}
        crumbs={[{ label: 'Routes', to: '/routes' }, { label: `${from} to ${to}` }]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#route-booking" className="btn-primary px-7 py-3.5">Book this route</a>
          <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light px-7 py-3.5">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp for fare
          </a>
        </div>
      </PageHeader>

      <section className="section pt-12 md:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_440px] lg:gap-14">
          <div className="min-w-0">
            <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat icon={MapPin} label="Pickup city" value={from} />
              <Stat icon={Navigation} label="Destination" value={to} />
              <Stat icon={Milestone} label="Distance" value={distanceKm ? `${distanceKm} km (approx.)` : 'Shared on enquiry'} muted={!distanceKm} />
              <Stat icon={Clock} label="Travel time" value={duration || 'Shared on enquiry'} muted={!duration} />
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-extrabold sm:text-3xl">About the {from} – {to} route</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 rounded-2xl bg-surface p-4 text-sm font-medium">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-extrabold">Available vehicles</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {vehicles.map((v) => (
                  <div key={v} className="flex items-center justify-between rounded-2xl border border-line p-4">
                    <span className="flex items-center gap-3 font-semibold">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand"><Car className="h-5 w-5" aria-hidden="true" /></span>
                      {v}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-bold">
                      {pricing?.[v.toLowerCase()] ? (
                        <><IndianRupee className="h-3.5 w-3.5" aria-hidden="true" />{pricing[v.toLowerCase()].toLocaleString('en-IN')}</>
                      ) : (
                        <span className="text-xs font-semibold text-muted">Fare on request</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-neutral-400">Final fare depends on vehicle, trip type, tolls, parking and applicable permits.</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="mb-5 text-2xl font-extrabold">Frequently asked questions</h2>
              <FAQAccordion items={faqs} />
            </Reveal>

            <Reveal className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-[#25D366]/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h3 className="text-xl font-extrabold">Get an instant quote on WhatsApp</h3>
                <p className="mt-1 text-sm text-muted">Share your date and group size for {from} → {to}.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:-translate-y-0.5 hover:bg-[#1ebe5a]">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn-outline">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call
                </a>
              </div>
            </Reveal>
          </div>

          <aside id="route-booking" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <BookingWidget defaults={{ pickup: from, drop: to }} title={`Book ${from} → ${to}`} subtitle="One-way or round trip · Confirm on WhatsApp" />
          </aside>
        </div>
      </section>

      <section className="section bg-surface pt-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Other popular routes</h2>
            <Link to="/routes" className="text-sm font-semibold underline-offset-4 hover:underline">All routes</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((r) => <RouteCard key={r.slug} route={r} />)}
          </div>
        </div>
      </section>
      <CTASection whatsappMessage={waMsg} bookingDefaults={{ pickup: from, drop: to }} />
    </>
  );
}

