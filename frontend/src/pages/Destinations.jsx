import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import DestinationCard from '../components/DestinationCard';
import CTASection from '../components/CTASection';
import { DESTINATIONS, DESTINATION_CATEGORIES } from '../data/destinations';

export default function Destinations() {
  const [category, setCategory] = useState('All');
  const list = category === 'All' ? DESTINATIONS : DESTINATIONS.filter((d) => d.category === category);

  return (
    <>
      <Seo
        title="Destinations from Nagpur"
        description="Explore popular destinations from Nagpur – Tadoba, Pench, Chikhaldara, Pachmarhi, Shirdi, Ajanta & Ellora, Kanha, Goa and more. Book a comfortable taxi with Karan Tours & Travels."
        image="/images/destinations/tadoba.webp"
      />
      <PageHeader
        eyebrow="Destinations"
        title="Discover places worth the drive"
        description="Wildlife reserves, misty hill stations, sacred pilgrimages and sunny beaches — we’ll take you there in comfort."
        image="/images/destinations/pachmarhi.webp"
        crumbs={[{ label: 'Destinations' }]}
      />

      <section className="section pt-12 md:pt-16">
        <div className="container">
          <div className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter destinations by category">
            {DESTINATION_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === c ? 'bg-ink text-white' : 'border border-line bg-white text-neutral-600 hover:border-ink hover:text-ink'
                }`}
              >
                {c}
                <span className={`ml-1.5 text-xs ${category === c ? 'text-brand' : 'text-neutral-400'}`}>
                  {c === 'All' ? DESTINATIONS.length : DESTINATIONS.filter((d) => d.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((d) => (
                <motion.div
                  key={d.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <DestinationCard destination={d} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection title="Planning a trip to any of these places?" description="Tell us your destination, dates and group size — we’ll suggest the best vehicle and send a clear quote." />
    </>
  );
}

