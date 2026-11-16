import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';

export default function RouteCard({ route }) {
  const { slug, from, to, state, type, vehicles, distanceKm, duration } = route;
  return (
    <Link
      to={`/routes/${slug}`}
      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lift"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">{type}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface transition group-hover:bg-brand">
          <ArrowRight className="h-4 w-4 -rotate-45 transition group-hover:rotate-0" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">From</p>
          <p className="font-display text-lg font-bold">{from}</p>
        </div>
        <div className="relative flex flex-1 items-center">
          <span className="h-px flex-1 border-t border-dashed border-neutral-300" />
          <MoveRight className="mx-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
        </div>
        <div className="text-right">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">To</p>
          <p className="font-display text-lg font-bold">{to}</p>
        </div>
      </div>
      <p className="mt-1 text-right text-xs text-muted">{state}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {(distanceKm || duration) && (
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
            {[distanceKm && `${distanceKm} km`, duration].filter(Boolean).join(' · ')}
          </span>
        )}
        {vehicles.slice(0, 3).map((v) => (
          <span key={v} className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-neutral-600">
            {v}
          </span>
        ))}
        {vehicles.length > 3 && (
          <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-neutral-600">+{vehicles.length - 3}</span>
        )}
      </div>
    </Link>
  );
}

