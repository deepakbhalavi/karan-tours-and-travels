import { Phone } from 'lucide-react';
import { SITE } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';
import WhatsAppIcon from './ui/WhatsAppIcon';
import Reveal from './ui/Reveal';

export default function CTASection({
  title = 'Ready for your next journey?',
  description = 'Tell us where you want to go. We’ll handle the car, the driver and the details — you just enjoy the ride.',
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  bookingDefaults,
}) {
  const { openBooking } = useBooking();
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 md:px-16 md:py-20">
          <img src="/images/site/cta-road.webp" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand">{SITE.tagline}</p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={() => openBooking(bookingDefaults)} className="btn-primary px-7 py-3.5">
                Book Your Ride
              </button>
              <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light px-7 py-3.5">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={SITE.phoneHref} className="btn-ghost-light px-7 py-3.5">
                <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

