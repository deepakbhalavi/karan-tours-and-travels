/** TEMPORARY FRONTEND DATA (Stage 1) – Help & FAQ content. */
export const FAQ_CATEGORIES = [
  {
    id: 'booking',
    title: 'Booking & Reservations',
    icon: 'CalendarCheck',
    items: [
      {
        q: 'How can I book a taxi with Karan Tours & Travels?',
        a: 'You can use the booking form on our website, send us a message on WhatsApp at +91 9075844372, or call us directly. Our team will confirm the vehicle, fare and pickup details.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'For local and airport rides, a few hours’ notice is usually enough. For outstation trips, weekends and festival seasons, we recommend booking at least 1–2 days in advance.',
      },
      {
        q: 'Will I receive a booking confirmation?',
        a: 'Yes. Once your trip is confirmed, we share the booking details on WhatsApp or SMS. Driver and vehicle details are shared before your pickup time.',
      },
      {
        q: 'Can I book a taxi for someone else?',
        a: 'Absolutely. Just share the traveller’s name and mobile number while booking so the driver can coordinate with them directly.',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Fares',
    icon: 'Wallet',
    items: [
      {
        q: 'How are fares calculated?',
        a: 'Fares depend on the vehicle type, trip type (one-way, round trip, local or airport), distance and duration. Tolls, parking and interstate permits are communicated upfront in your quote.',
      },
      {
        q: 'Which payment methods do you accept?',
        a: 'We accept cash, UPI and bank transfers. Payment terms (advance and balance) are shared when your booking is confirmed.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'No. We believe in transparent pricing. Any applicable extras such as tolls, parking, night charges or permits are explained before you confirm.',
      },
      {
        q: 'Do you charge for driver allowance on outstation trips?',
        a: 'Driver allowance for overnight outstation trips, if applicable, is clearly included in your quote.',
      },
    ],
  },
  {
    id: 'drivers',
    title: 'Drivers & Vehicles',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Are your drivers experienced and verified?',
        a: 'Yes. Our drivers are experienced, courteous and familiar with city and highway routes. Driver documents are verified before onboarding.',
      },
      {
        q: 'Are the vehicles air-conditioned and clean?',
        a: 'All our listed vehicles are air-conditioned and are cleaned before every trip for a fresh and comfortable ride.',
      },
      {
        q: 'Can I request a specific vehicle?',
        a: 'Yes. You can choose a vehicle preference while booking. We will do our best to provide the requested model, subject to availability.',
      },
    ],
  },
  {
    id: 'outstation',
    title: 'Outstation Trips',
    icon: 'Route',
    items: [
      {
        q: 'Do you offer one-way outstation taxis?',
        a: 'Yes. We offer one-way and round-trip taxis from Nagpur to cities across Maharashtra, Madhya Pradesh, Chhattisgarh, Telangana and beyond.',
      },
      {
        q: 'Can I plan a multi-day tour?',
        a: 'Yes. We arrange multi-day trips to wildlife reserves, hill stations and pilgrimage destinations. Share your itinerary and we will suggest the best vehicle.',
      },
      {
        q: 'Do you have interstate permits?',
        a: 'Our vehicles for interstate routes carry the required permits. Applicable permit charges are mentioned in your quote.',
      },
    ],
  },
  {
    id: 'airport',
    title: 'Airport Transfers',
    icon: 'Plane',
    items: [
      {
        q: 'Do you provide pickup and drop at Nagpur Airport?',
        a: 'Yes. We provide pickups and drops at Dr. Babasaheb Ambedkar International Airport, Nagpur, at any time of the day.',
      },
      {
        q: 'What if my flight is delayed?',
        a: 'Share your flight number while booking. We track your arrival and coordinate with the driver so you are picked up when you land.',
      },
      {
        q: 'Where will the driver meet me?',
        a: 'The driver will call you on arrival and share the exact pickup point at the airport.',
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Modifications',
    icon: 'RefreshCcw',
    items: [
      {
        q: 'Can I cancel my booking?',
        a: 'Yes. Please inform us as early as possible by call or WhatsApp. Cancellation terms, if any, are shared at the time of booking confirmation.',
      },
      {
        q: 'Can I change my pickup time or date?',
        a: 'Yes, modifications are possible subject to vehicle availability. Contact us with your booking details and we will update your trip.',
      },
      {
        q: 'What happens if I need to extend my trip?',
        a: 'Just inform the driver or our team. Extensions are possible subject to availability, and any additional charges are communicated transparently.',
      },
    ],
  },
];

export const HOME_FAQS = FAQ_CATEGORIES.flatMap((c) => c.items.slice(0, 1));

