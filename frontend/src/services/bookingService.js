import { buildBookingMessage, whatsappLink } from '../utils/whatsapp';

/**
 * Booking service – the single integration point for booking submissions.
 *
 * STAGE 1 (current): nothing is stored. We only prepare a prefilled WhatsApp
 * message so the customer can send their enquiry to the business directly.
 *
 * STAGE 2: replace the body of `submitBooking` with an API call, e.g.
 *   const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
 *     method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
 *   });
 * Components already await this function and handle success/error states.
 */
export async function submitBooking(formData) {
  const payload = normaliseBooking(formData);
  return {
    mode: 'whatsapp', // Stage 2 will return { mode: 'api', bookingId, ... }
    payload,
    whatsappUrl: whatsappLink(buildBookingMessage(payload)),
  };
}

export function normaliseBooking(data) {
  const isRound = data.tripType === 'roundtrip';
  const isLocal = data.tripType === 'local';
  const isAirport = data.tripType === 'airport';
  return {
    tripType: data.tripType,
    fullName: data.fullName.trim(),
    mobile: data.mobile.replace(/[\s-]/g, ''),
    pickup: data.pickup.trim(),
    drop: isLocal ? '' : (data.drop || '').trim(),
    localPackage: isLocal ? data.localPackage : '',
    airportDirection: isAirport ? data.airportDirection : '',
    journeyDate: data.journeyDate,
    pickupTime: data.pickupTime,
    returnDate: isRound ? data.returnDate : '',
    passengers: Number(data.passengers),
    vehicle: data.vehicle,
  };
}
