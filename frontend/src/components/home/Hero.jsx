import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingWidget from '../BookingWidget';

const TRUST = [
  { icon: ShieldCheck, label: 'Verified drivers' },
  { icon: Clock, label: '24/7 availability' },
  { icon: Sparkles, label: 'Clean, sanitised cars' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="hero-title">
      <motion.img
        src="/images/site/hero-suv.webp"
        alt="Premium white SUV travelling on a scenic Indian highway at golden hour"
        fetchpriority="high"
        width="1376"
        height="768"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink/60 to-transparent" />

      <div className="container grid min-h-[100svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_#00DD00]" />
            Premium taxi service · Nagpur
          </motion.span>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl xl:text-7xl"
          >
            Explore More.
            <br />
            <span className="text-brand">Travel Better.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Comfortable rides, reliable drivers and memorable journeys. Discover the freedom of travelling with Karan Tours &amp;
            Travels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#booking" className="btn-primary px-7 py-4 text-base">
              Book Your Ride <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/destinations" className="btn-ghost-light px-7 py-4 text-base">
              Explore Destinations
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <I className="h-4 w-4 text-brand" aria-hidden="true" /> {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-24"
          id="booking"
        >
          <BookingWidget variant="hero" id="hero-booking" />
        </motion.div>
      </div>
    </section>
  );
}

