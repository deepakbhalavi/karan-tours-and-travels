import { Link, useParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2, MapPin, Tag } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import BookingWidget from '../components/BookingWidget';
import DestinationCard from '../components/DestinationCard';
import CTASection from '../components/CTASection';
import Reveal from '../components/ui/Reveal';
import { DESTINATIONS, getDestination } from '../data/destinations';
import { whatsappLink } from '../utils/whatsapp';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import NotFound from './NotFound';

export default function DestinationDetails() {
  const { slug } = useParams();
  const d = getDestination(slug);
  if (!d) return <NotFound />;

  const related = DESTINATIONS.filter((x) => x.slug !== d.slug && x.category === d.category).slice(0, 3);
  const more = related.length ? related : DESTINATIONS.filter((x) => x.slug !== d.slug).slice(0, 3);
  const waMsg = `Hello Karan Tours & Travels, I’d like to plan a trip from Nagpur to ${d.name}. Please share vehicle options and fare.`;

  return (
    <>
      <Seo
        title={`Nagpur to ${d.name} Taxi & Tour`}
        description={`Plan your trip to ${d.fullName}, ${d.state} with Karan Tours & Travels. ${d.description}`}
        image={d.image}
      />
      <PageHeader
        eyebrow={d.category}
        title={d.fullName}
        description={d.description}
        image={d.image}
        crumbs={[{ label: 'Destinations', to: '/destinations' }, { label: d.name }]}
      >
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur"><MapPin className="h-4 w-4 text-brand" aria-hidden="true" /> {d.state}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur"><Tag className="h-4 w-4 text-brand" aria-hidden="true" /> {d.category}</span>
        </div>
      </PageHeader>

      <section className="section pt-12 md:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_440px] lg:gap-14">
          <div>
            <Reveal>
              <img src={d.image} alt={d.fullName} className="aspect-[16/9] w-full rounded-3xl object-cover" width="1000" height="700" />
            </Reveal>
            <Reveal className="mt-10">
              <h2 className="text-2xl font-extrabold sm:text-3xl">About {d.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{d.description}</p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Travel from Nagpur to {d.name} in a private, air-conditioned car with an experienced driver. Choose a one-way drop,
                a round trip with the same car and driver, or a multi-day package — we’ll plan the journey around your schedule.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Reveal className="rounded-3xl border border-line p-6">
                <h3 className="text-lg font-bold">Highlights</h3>
                <ul className="mt-4 space-y-2.5">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08} className="rounded-3xl bg-surface p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <CalendarDays className="h-5 w-5 text-brand-600" aria-hidden="true" /> Best time to visit
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.bestTime}</p>
                <p className="mt-4 text-xs text-neutral-400">Seasonal timings can change – please check official notices before travel.</p>
                <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn-dark mt-5 w-full">
                  <WhatsAppIcon className="h-4 w-4" /> Ask about this trip
                </a>
              </Reveal>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BookingWidget defaults={{ pickup: 'Nagpur', drop: d.name, tripType: 'roundtrip' }} title={`Book a ride to ${d.name}`} subtitle="Share your details · We confirm on WhatsApp" />
          </aside>
        </div>
      </section>

      <section className="section bg-surface pt-16">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">You may also like</h2>
            <Link to="/destinations" className="text-sm font-semibold text-ink underline-offset-4 hover:underline">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => <DestinationCard key={x.slug} destination={x} />)}
          </div>
        </div>
      </section>
      <CTASection whatsappMessage={waMsg} bookingDefaults={{ drop: d.name }} />
    </>
  );
}

