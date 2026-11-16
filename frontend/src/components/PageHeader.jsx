import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * Inner-page header with background image and breadcrumbs.
 * `crumbs`: [{ label, to? }]
 */
export default function PageHeader({ eyebrow, title, description, image = '/images/site/cta-road.webp', crumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 md:pb-24 md:pt-40">
      <img src={image} alt="" aria-hidden="true" fetchpriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="container">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/60">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white" aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          {eyebrow && <span className="eyebrow bg-white/10 text-brand">{eyebrow}</span>}
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

