import { SITE } from '../config/site';

/** Build a WhatsApp click-to-chat URL with an optional prefilled message. */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE = `Hello ${SITE.name}, I would like to enquire about a taxi booking.`;

const TRIP_LABELS = {
  oneway: 'One-Way Taxi',
  roundtrip: 'Round Trip',
  local: 'Local Taxi',
  airport: 'Airport Taxi',
};

function formatDate(value) {
  if (!value) return '';
  const [y, m, d] = value.split('-');
  return `${d}/${m}/${y}`;
}

function formatTime(value) {
  if (!value) return '';
  const [h, min] = value.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  return `${((h + 11) % 12) + 1}:${String(min).padStart(2, '0')} ${suffix}`;
}

/** Turns booking form data into a readable, prefilled WhatsApp enquiry. */
export function buildBookingMessage(data) {
  const lines = [
    `*New Booking Enquiry – ${SITE.name}*`,
    '',
    `*Trip Type:* ${TRIP_LABELS[data.tripType] || data.tripType}`,
    data.airportDirection ? `*Airport Transfer:* ${data.airportDirection}` : null,
    `*Name:* ${data.fullName}`,
    `*Mobile:* ${data.mobile}`,
    `*Pickup:* ${data.pickup}`,
    data.drop ? `*Drop:* ${data.drop}` : null,
    data.localPackage ? `*Package:* ${data.localPackage}` : null,
    `*Journey Date:* ${formatDate(data.journeyDate)}`,
    `*Pickup Time:* ${formatTime(data.pickupTime)}`,
    data.returnDate ? `*Return Date:* ${formatDate(data.returnDate)}` : null,
    `*Passengers:* ${data.passengers}`,
    `*Vehicle Preference:* ${data.vehicle || 'Any'}`,
    '',
    'Please confirm availability and fare. Thank you!',
  ];
  return lines.filter((l) => l !== null).join('\n');
}

export function buildContactMessage(data) {
  return [
    `*Website Enquiry – ${SITE.name}*`,
    '',
    `*Name:* ${data.name}`,
    `*Mobile:* ${data.mobile}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Subject:* ${data.subject}`,
    '',
    data.message,
  ]
    .filter((l) => l !== null)
    .join('\n');
}
