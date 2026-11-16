import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/ui/Reveal';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { SITE } from '../config/site';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';

const CHANNELS = [
  { icon: Phone, title: 'Call Now', value: '9075844372', href: SITE.phoneHref, cta: 'Call now', tone: 'bg-brand text-ink' },
  { icon: WhatsAppIcon, title: 'WhatsApp', value: SITE.phone, href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE), cta: 'Start chat', tone: 'bg-[#25D366] text-white', external: true },
  { icon: Mail, title: 'Email Us', value: SITE.email, href: `mailto:${SITE.email}`, cta: 'Send email', tone: 'bg-ink text-brand' },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact Karan Tours & Travels, Nagpur. Call or WhatsApp ${SITE.phone} or email ${SITE.email} to book your taxi.`}
      />
      <PageHeader
        eyebrow="Contact Us"
        title="Let’s get you on the road"
        description="Call, WhatsApp or send us a message — we’re here to help you plan the perfect ride."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="relative z-10 -mt-10 pb-6 md:-mt-14">
        <div className="container grid gap-4 md:grid-cols-3">
          {CHANNELS.map(({ icon: I, title, value, href, cta, tone, external }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card group flex h-full items-center gap-4 p-6 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tone}`}>
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted">{title}</span>
                  <span className="mt-0.5 block truncate font-display font-bold">{value}</span>
                  <span className="mt-1 block text-xs font-semibold text-brand-700 group-hover:underline">{cta} →</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-12 md:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{SITE.name}</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">{SITE.brandLine}</p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface"><Phone className="h-5 w-5 text-brand-600" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase text-muted">Phone</span><a href={SITE.phoneHref} className="font-semibold hover:text-brand-700">9075844372</a></span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface"><Mail className="h-5 w-5 text-brand-600" aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-xs font-semibold uppercase text-muted">Email</span><a href={`mailto:${SITE.email}`} className="break-all font-semibold hover:text-brand-700">{SITE.email}</a></span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface"><MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase text-muted">Location</span><span className="font-semibold">{SITE.location}</span></span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface"><Clock className="h-5 w-5 text-brand-600" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase text-muted">Availability</span><span className="font-semibold">Bookings accepted 24 × 7</span></span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-label="Map">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft">
            <iframe
              title="Karan Tours & Travels location – Nagpur, Maharashtra"
              src={SITE.mapEmbedUrl}
              className="h-[360px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-700">
            <MapPin className="h-4 w-4" aria-hidden="true" /> Open in Google Maps
          </a>
        </div>
      </section>
    </>
  );
}

