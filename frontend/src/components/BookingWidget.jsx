import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRightLeft, Calendar, CalendarRange, Car, CheckCircle2, Clock, Loader2, MapPin, Navigation,
  Phone, Plane, Repeat, RotateCcw, User, Users,
} from 'lucide-react';
import { submitBooking } from '../services/bookingService';
import { rules, todayISO } from '../utils/validation';
import { VEHICLE_OPTIONS } from '../data/fleet';
import { SITE } from '../config/site';
import WhatsAppIcon from './ui/WhatsAppIcon';

export const TRIP_TABS = [
  { id: 'oneway', label: 'One-Way', long: 'One-Way Taxi', icon: ArrowRightLeft },
  { id: 'roundtrip', label: 'Round Trip', long: 'Round Trip', icon: Repeat },
  { id: 'local', label: 'Local', long: 'Local Taxi', icon: MapPin },
  { id: 'airport', label: 'Airport', long: 'Airport Taxi', icon: Plane },
];

const LOCAL_PACKAGES = ['4 Hours / 40 Km', '8 Hours / 80 Km', '12 Hours / 120 Km', 'Full day (custom)'];
const AIRPORT_NAME = 'Nagpur Airport (Dr. Babasaheb Ambedkar Intl.)';

function Field({ label, icon: IconCmp, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="field-label">{label}</label>
      <div className="relative">
        {IconCmp && (
          <IconCmp className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
        )}
        {children}
      </div>
      {error && (
        <p className="field-error" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

/**
 * Reusable booking widget.
 * - `defaults` pre-fills fields (e.g. drop location from a route/destination page).
 * - `variant`: 'hero' | 'card' – styling only.
 * Submission is delegated to services/bookingService.js (Stage 2: API).
 */
export default function BookingWidget({ defaults = {}, variant = 'card', title, subtitle, className = '', id }) {
  const [tripType, setTripType] = useState(defaults.tripType || 'oneway');
  const [result, setResult] = useState(null);
  const today = useMemo(todayISO, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    shouldUnregister: true,
    defaultValues: {
      fullName: '',
      mobile: '',
      pickup: defaults.pickup || '',
      drop: defaults.drop || '',
      journeyDate: '',
      pickupTime: '',
      returnDate: '',
      passengers: 1,
      vehicle: defaults.vehicle || VEHICLE_OPTIONS[0],
      localPackage: LOCAL_PACKAGES[1],
      airportDirection: 'Drop to Airport',
    },
  });

  const journeyDate = watch('journeyDate');
  const airportDirection = watch('airportDirection');

  // Auto-fill the airport into pickup/drop for airport transfers.
  useEffect(() => {
    if (tripType !== 'airport') return;
    const { pickup, drop } = getValues();
    if (airportDirection === 'Pickup from Airport') {
      if (!pickup || pickup === AIRPORT_NAME) setValue('pickup', AIRPORT_NAME);
      if (drop === AIRPORT_NAME) setValue('drop', '');
    } else {
      if (!drop || drop === AIRPORT_NAME) setValue('drop', AIRPORT_NAME);
      if (pickup === AIRPORT_NAME) setValue('pickup', '');
    }
  }, [tripType, airportDirection, getValues, setValue]);

  const onSubmit = async (data) => {
    const res = await submitBooking({ ...data, tripType });
    setResult(res);
  };

  const startOver = () => {
    setResult(null);
    reset();
  };

  const isHero = variant === 'hero';
  const tab = TRIP_TABS.find((t) => t.id === tripType);

  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-3xl border border-line bg-white ${
        isHero ? 'shadow-lift' : 'shadow-soft'
      } ${className}`}
    >
      <div className="p-5 sm:p-7">
        {(title || isHero) && (
          <div className="mb-5">
            <h2 className="text-xl font-extrabold sm:text-2xl">{title || 'Book your ride'}</h2>
            <p className="mt-1 text-sm text-muted">{subtitle || 'Quick enquiry · Instant confirmation on WhatsApp'}</p>
          </div>
        )}

        {/* Trip type tabs */}
        <div role="tablist" aria-label="Trip type" className="grid grid-cols-4 gap-1 rounded-2xl bg-surface p-1">
          {TRIP_TABS.map(({ id, label, icon: TabIcon }) => {
            const active = tripType === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                disabled={!!result}
                onClick={() => setTripType(id)}
                className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[11px] font-semibold transition sm:flex-row sm:gap-1.5 sm:text-xs ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId={`tab-pill-${variant}`}
                    className="absolute inset-0 rounded-xl bg-white shadow-soft ring-1 ring-brand/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <TabIcon className={`relative h-4 w-4 ${active ? 'text-brand-600' : ''}`} aria-hidden="true" />
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {result ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="pt-6 text-center"
              role="status"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
                <CheckCircle2 className="h-8 w-8 text-brand-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold">Your ride details are ready!</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                Thank you, {result.payload.fullName.split(' ')[0]}. Send your {tab.long.toLowerCase()} request to our team on
                WhatsApp to confirm availability and fare.
              </p>

              <dl className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-surface p-4 text-left text-xs">
                <div>
                  <dt className="text-muted">Pickup</dt>
                  <dd className="mt-0.5 font-semibold">{result.payload.pickup}</dd>
                </div>
                <div>
                  <dt className="text-muted">{result.payload.drop ? 'Drop' : 'Package'}</dt>
                  <dd className="mt-0.5 font-semibold">{result.payload.drop || result.payload.localPackage}</dd>
                </div>
                <div>
                  <dt className="text-muted">Date & time</dt>
                  <dd className="mt-0.5 font-semibold">
                    {result.payload.journeyDate} · {result.payload.pickupTime}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Vehicle</dt>
                  <dd className="mt-0.5 font-semibold">{result.payload.vehicle}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a href={result.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                  <WhatsAppIcon className="h-4 w-4" /> Send on WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn-outline flex-1">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call to confirm
                </a>
              </div>
              <button type="button" onClick={startOver} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Make another enquiry
              </button>
              <p className="mt-3 text-[11px] text-neutral-400">
                Online booking confirmation is coming soon. Your enquiry is sent only when you message us.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <Field label="Full name" icon={User} error={errors.fullName}>
                <input
                  {...register('fullName', rules.fullName)}
                  autoComplete="name"
                  placeholder="Your full name"
                  className="field pl-10"
                  aria-invalid={!!errors.fullName}
                />
              </Field>
              <Field label="Mobile number" icon={Phone} error={errors.mobile}>
                <input
                  {...register('mobile', rules.mobile)}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="10-digit mobile"
                  className="field pl-10"
                  aria-invalid={!!errors.mobile}
                />
              </Field>

              {tripType === 'airport' && (
                <div className="sm:col-span-2">
                  <span className="field-label">Transfer type</span>
                  <div className="grid grid-cols-2 gap-2">
                    {['Drop to Airport', 'Pickup from Airport'].map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-xs font-semibold transition has-[:checked]:border-brand has-[:checked]:bg-brand-50"
                      >
                        <input type="radio" value={opt} {...register('airportDirection')} className="accent-[#00DD00]" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <Field label="Pickup location" icon={MapPin} error={errors.pickup} className={tripType === 'local' ? 'sm:col-span-1' : ''}>
                <input
                  {...register('pickup', { required: 'Please enter a pickup location', minLength: { value: 3, message: 'Please enter a valid location' } })}
                  placeholder="e.g. Sitabuldi, Nagpur"
                  className="field pl-10"
                  aria-invalid={!!errors.pickup}
                />
              </Field>

              {tripType === 'local' ? (
                <Field label="Local package" icon={Clock} error={errors.localPackage}>
                  <select {...register('localPackage', { required: 'Select a package' })} className="field appearance-none pl-10">
                    {LOCAL_PACKAGES.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
              ) : (
                <Field label="Drop location" icon={Navigation} error={errors.drop}>
                  <input
                    {...register('drop', { required: 'Please enter a drop location', minLength: { value: 3, message: 'Please enter a valid location' } })}
                    placeholder="e.g. Pune"
                    className="field pl-10"
                    aria-invalid={!!errors.drop}
                  />
                </Field>
              )}

              <Field label="Journey date" icon={Calendar} error={errors.journeyDate}>
                <input
                  type="date"
                  min={today}
                  {...register('journeyDate', {
                    required: 'Select your journey date',
                    validate: (v) => v >= today || 'Date cannot be in the past',
                  })}
                  className="field pl-10"
                  aria-invalid={!!errors.journeyDate}
                />
              </Field>
              <Field label="Pickup time" icon={Clock} error={errors.pickupTime}>
                <input
                  type="time"
                  {...register('pickupTime', { required: 'Select a pickup time' })}
                  className="field pl-10"
                  aria-invalid={!!errors.pickupTime}
                />
              </Field>

              {tripType === 'roundtrip' && (
                <Field label="Return date" icon={CalendarRange} error={errors.returnDate} className="sm:col-span-2">
                  <input
                    type="date"
                    min={journeyDate || today}
                    {...register('returnDate', {
                      required: 'Select your return date',
                      validate: (v) => !journeyDate || v >= journeyDate || 'Return date must be on or after journey date',
                    })}
                    className="field pl-10"
                    aria-invalid={!!errors.returnDate}
                  />
                </Field>
              )}

              <Field label="Passengers" icon={Users} error={errors.passengers}>
                <input
                  type="number"
                  min={1}
                  max={50}
                  inputMode="numeric"
                  {...register('passengers', {
                    required: 'Enter number of passengers',
                    valueAsNumber: true,
                    min: { value: 1, message: 'At least 1 passenger' },
                    max: { value: 50, message: 'For groups above 50, please call us' },
                  })}
                  className="field pl-10"
                  aria-invalid={!!errors.passengers}
                />
              </Field>
              <Field label="Vehicle preference" icon={Car}>
                <select {...register('vehicle')} className="field appearance-none pl-10">
                  {VEHICLE_OPTIONS.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </Field>

              <button type="submit" disabled={isSubmitting} className="btn-primary mt-1 w-full py-3.5 text-base sm:col-span-2">
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : 'Book Your Ride'}
              </button>
              <p className="-mt-1 text-center text-[11px] text-neutral-400 sm:col-span-2">
                No advance payment needed to enquire · We respond quickly on WhatsApp
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
