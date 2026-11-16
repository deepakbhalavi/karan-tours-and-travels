import { Link } from 'react-router-dom';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Karan Tours & Travels – Home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-ink shadow-glow transition-transform duration-300 group-hover:rotate-[-6deg]">
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
          <path d="M14 10h9v17.5L37.5 10H48L32.8 27.6 49 54H38.4L27 36l-4 4.3V54h-9z" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[15px] font-extrabold tracking-tight sm:text-base ${light ? 'text-white' : 'text-ink'}`}>
          Karan Tours <span className="text-brand">&amp;</span> Travels
        </span>
        <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] ${light ? 'text-white/60' : 'text-muted'}`}>
          by Karan Mandale
        </span>
      </span>
    </Link>
  );
}

