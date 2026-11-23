import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import Seo from '../components/ui/Seo';
import Hero from '../components/home/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import ServiceCard from '../components/ServiceCard';
import DestinationCard from '../components/DestinationCard';
import VehicleCard from '../components/VehicleCard';
import RouteCard from '../components/RouteCard';
import CTASection from '../components/CTASection';
import { useBooking } from '../context/BookingContext';
import { SERVICES, TESTIMONIALS, WHY_CHOOSE_US } from '../data/content';
import { DESTINATIONS } from '../data/destinations';
import { FLEET } from '../data/fleet';
import { ROUTES } from '../data/routes';
import { SITE } from '../config/site';

const TRIP_SERVICE_IDS = ['oneway', 'roundtrip', 'local', 'airport'];
const HOME_FLEET = ['swift-dzire', 'ertiga', 'innova-crysta', 'force-urbania'];

export default function Home() {
  const { openBooking } = useBooking();
  const featured = DESTINATIONS.filter((d) => d.featured).slice(0, 6);

  return (
    <>
      <Seo
        description="Book premium one-way, round trip, local and airport taxis from Nagpur with Karan Tours & Travels. Clean cars, verified drivers, transparent fares. Call +91 9075844372."
      />
      <Hero />

      {/* Services */}
      <section className="section bg-white" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title={<span id="services-title">Every kind of journey, handled with care</span>}
            description="From a quick airport drop to a week-long family road trip — choose the ride that fits your plan."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <ServiceCard
                  {...s}
                  index={i}
                  onClick={() =>
                    openBooking({
                      tripType: TRIP_SERVICE_IDS.includes(s.id) ? s.id : 'roundtrip',
                      title: `Book: ${s.title}`,
                    })
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section bg-surface" aria-label="Popular destinations">
        <div className="container">
          <SectionHeading
            align="left"
            eyebrow="Popular Destinations"
            title="Wildlife, hills & holy places — all a drive away"
            description="Handpicked getaways loved by travellers from Nagpur and Vidarbha."
            action={
              <Link to="/destinations" className="btn-dark">
                View all destinations <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 0.06}>
                <DestinationCard destination={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section bg-white" aria-label="Our fleet">
        <div className="container">
          <SectionHeading
            align="left"
            eyebrow="Our Fleet"
            title="The right car for every trip"
            description="Well-maintained sedans, SUVs, MUVs, Force Urbania and mini buses — all air-conditioned."
            action={
              <Link to="/fleet" className="btn-outline">
                Explore the fleet <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {FLEET.filter((v) => HOME_FLEET.includes(v.id)).map((v, i) => (
              <Reveal key={v.id} delay={i * 0.06}>
                <VehicleCard vehicle={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="section bg-surface" aria-label="Popular routes">
        <div className="container">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Most-booked routes from Nagpur"
            description="One-way and round-trip cabs to major cities across Maharashtra and neighbouring states."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTES.slice(0, 8).map((r, i) => (
              <Reveal key={r.slug} delay={(i % 4) * 0.05}>
                <RouteCard route={r} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/routes" className="btn-dark">
              See all {ROUTES.length} routes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section relative overflow-hidden bg-ink" aria-label="Why choose us">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
        <div className="container relative">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="Travel that feels effortless"
            description="We obsess over the small things so every ride is safe, comfortable and on time."
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05} className="group bg-ink p-8 transition-colors hover:bg-[#1f1f1f]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-ink">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-white" aria-label="About Karan Tours & Travels">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/site/about-team.webp"
                alt="Karan Tours & Travels fleet lineup — Maruti Swift Dzire, Toyota Innova Crysta and Force Urbania"
                loading="lazy"
                width="1376"
                height="768"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-white p-5 shadow-lift sm:left-auto sm:right-8 sm:w-72">
              <p className="font-display text-lg font-extrabold leading-snug">“{SITE.tagline}”</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">— {SITE.owner}, Founder</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="pt-6 lg:pt-0">
            <span className="eyebrow">About the Company</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl">
              A Nagpur travel partner you can count on
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Karan Tours &amp; Travels, founded by {SITE.owner}, offers dependable taxi and travel services from Nagpur. Whether
              it’s an early-morning airport run, a weekend at Tadoba or a long outstation journey, we treat every trip as our
              responsibility.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Local, outstation & airport taxis', 'Family, corporate & group travel', 'Experienced highway drivers', 'Transparent, honest pricing'].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-dark mt-8">
              More about us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface" aria-label="Customer testimonials">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What travellers say about us" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="card flex h-full flex-col p-7 hover:-translate-y-1 hover:shadow-lift">
                  <Quote className="h-8 w-8 fill-brand text-brand" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-neutral-700">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-brand">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{t.name}</span>
                      <span className="block text-xs text-muted">{t.trip}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

