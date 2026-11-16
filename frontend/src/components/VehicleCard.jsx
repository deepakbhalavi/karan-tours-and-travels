import { Briefcase, Check, Snowflake, Users } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { VEHICLE_OPTIONS } from '../data/fleet';

const preferenceFor = (v) => VEHICLE_OPTIONS.find((o) => o.toLowerCase().includes(v.name.split(' ').slice(-1)[0].toLowerCase()))
  || VEHICLE_OPTIONS.find((o) => o.toLowerCase().startsWith(v.category.toLowerCase()))
  || VEHICLE_OPTIONS[0];

export default function VehicleCard({ vehicle }) {
  const { openBooking } = useBooking();
  const { name, category, image, seats, ac, luggage, facilities, pricing, idealFor } = vehicle;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/11] overflow-hidden bg-surface">
        <img
          src={image}
          alt={`${name} – ${category} taxi`}
          loading="lazy"
          decoding="async"
          width="900"
          height="630"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">{category}</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        {idealFor && <p className="mt-1 text-sm text-muted">{idealFor}</p>}

        <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl bg-surface px-2 py-3">
            <Users className="mx-auto h-4 w-4 text-brand-600" aria-hidden="true" />
            <dt className="sr-only">Seating</dt>
            <dd className="mt-1.5 text-xs font-semibold leading-tight">{seats}</dd>
          </div>
          <div className="rounded-2xl bg-surface px-2 py-3">
            <Snowflake className="mx-auto h-4 w-4 text-brand-600" aria-hidden="true" />
            <dt className="sr-only">Air conditioning</dt>
            <dd className="mt-1.5 text-xs font-semibold leading-tight">{ac ? 'AC' : 'Non-AC'}</dd>
          </div>
          <div className="rounded-2xl bg-surface px-2 py-3">
            <Briefcase className="mx-auto h-4 w-4 text-brand-600" aria-hidden="true" />
            <dt className="sr-only">Luggage</dt>
            <dd className="mt-1.5 text-xs font-semibold leading-tight">{luggage}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex-1 space-y-2">
          {facilities.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <Check className="h-3 w-3 text-brand-700" aria-hidden="true" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Fare</p>
            {pricing ? (
              <p className="font-display text-lg font-extrabold">
                ₹{pricing.perKm}
                <span className="text-xs font-medium text-muted"> / {pricing.label || 'km'}</span>
              </p>
            ) : (
              <p className="font-display text-sm font-bold">On request</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => openBooking({ vehicle: preferenceFor(vehicle), title: `Book ${name}`, subtitle: `${category} · ${seats} seats` })}
            className="btn-primary px-5 py-2.5"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

