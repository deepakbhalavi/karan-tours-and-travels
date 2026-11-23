import { CheckCircle2, Eye, HeartHandshake, Target } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import CTASection from '../components/CTASection';
import { WHY_CHOOSE_US } from '../data/content';
import { SITE } from '../config/site';

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide safe, comfortable and dependable travel for every customer — with courteous drivers, clean vehicles and honest, transparent pricing.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become the most trusted name for road travel from Nagpur and central India, known for reliability, hospitality and memorable journeys.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    text: 'Responsibility, punctuality and respect. We treat every passenger like family and every journey as our personal commitment.',
  },
];

const COMMITMENTS = [
  'Punctual pickups for every booking',
  'Well-maintained, clean and air-conditioned vehicles',
  'Experienced drivers who respect safety and traffic rules',
  'Clear, upfront quotes with no hidden charges',
  'Responsive support on call and WhatsApp',
  'Respect for your privacy and personal information',
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Karan Tours & Travels by Karan Mandale – a Nagpur-based taxi and travel company committed to comfortable, safe and memorable journeys."
        image="/images/site/about-team.webp"
      />
      <PageHeader
        eyebrow="About Us"
        title="Making Every Journey Comfortable and Memorable."
        description={`${SITE.name} is a Nagpur-based taxi and travel company built on one simple promise — ${SITE.tagline.toLowerCase()}`}
        image="/images/site/about-team.webp"
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Introduction */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              Travel services rooted in Nagpur, built around you
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Founded by <strong className="text-ink">{SITE.owner}</strong>, {SITE.name} provides one-way taxis, round trips,
                local hourly rentals, airport transfers and curated tour packages from Nagpur to destinations across Maharashtra,
                Madhya Pradesh, Chhattisgarh, Telangana and beyond.
              </p>
              <p>
                Our fleet ranges from comfortable sedans for business travellers to spacious SUVs, MUVs, Force Urbania and mini
                buses for families and groups. Every vehicle is cleaned and checked before each journey, and every driver is
                selected for experience, courtesy and safe driving.
              </p>
              <p>
                Whether you are catching an early flight, visiting family, going on a wildlife safari or planning a pilgrimage, we
                make sure the journey is as good as the destination.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <img src="/images/site/hero-suv.webp" alt="Karan Tours SUV on the highway" loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover" />
            <img src="/images/destinations/tadoba.webp" alt="Tiger at Tadoba" loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
            <img src="/images/fleet/innova-crysta.webp" alt="Toyota Innova Crysta" loading="lazy" className="aspect-square w-full rounded-3xl bg-surface object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading eyebrow="Purpose" title="What drives us every day" />
          <div className="grid gap-5 md:grid-cols-3">
            {PILLARS.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="card h-full p-8 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-ink">
                    <I className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="Reasons travellers choose Karan Tours" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-3xl border border-line p-6 transition hover:border-brand/40 hover:shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section bg-ink">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow bg-white/10 text-brand">Our Commitment</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl">
              {SITE.tagline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              From the moment you contact us until you reach your destination, we take full responsibility for your comfort and
              safety. That is the promise behind every Karan Tours &amp; Travels ride.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {COMMITMENTS.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection title="Let’s plan your next journey together" />
    </>
  );
}

