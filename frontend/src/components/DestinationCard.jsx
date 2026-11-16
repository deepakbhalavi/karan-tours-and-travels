import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function DestinationCard({ destination, size = 'default' }) {
  const { openBooking } = useBooking();
  const { slug, name, category, description, image, state } = destination;
  const tall = size === 'tall';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link to={`/destinations/${slug}`} className={`relative block overflow-hidden ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`} aria-label={`Explore ${name}`}>
        <img
          src={image}
          alt={`${name}, ${state}`}
          loading="lazy"
          decoding="async"
          width="1000"
          height="700"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          {category}
        </span>
        <span className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-medium text-white">
          <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> {state}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-5 flex items-center gap-2">
          <Link to={`/destinations/${slug}`} className="btn-outline flex-1 px-4 py-2.5">
            Explore More
          </Link>
          <button
            type="button"
            onClick={() => openBooking({ drop: name, title: `Book a taxi to ${name}`, subtitle: 'Share your trip details and we’ll confirm on WhatsApp' })}
            className="btn-primary flex-1 px-4 py-2.5"
          >
            Book Now <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

