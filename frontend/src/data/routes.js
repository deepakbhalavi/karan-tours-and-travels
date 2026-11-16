/**
 * TEMPORARY FRONTEND DATA (Stage 1)
 * Popular routes from Nagpur. Distances, travel times and fares are kept as
 * `null` until verified by the business. Set them here (or via the Stage 2 API)
 * and route pages will display them automatically, e.g.
 *   distanceKm: 280, duration: '5–6 hrs', pricing: { sedan: 4500, suv: 6500 }
 */
const r = (to, state, data) => ({
  slug: `nagpur-to-${to.toLowerCase().replace(/\s+/g, '-')}`,
  from: 'Nagpur',
  to,
  state,
  distanceKm: null,
  duration: null,
  pricing: null,
  ...data,
});

export const ROUTES = [
  r('Pune', 'Maharashtra', {
    type: 'Long distance',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/destinations/mahabaleshwar.webp',
    description:
      'Travel from Nagpur to Pune — Maharashtra’s education and IT hub — in a private, air-conditioned cab. Ideal for students, professionals and families relocating or visiting, with flexible stops for meals and rest along the way.',
    highlights: ['Door-to-door pickup in Nagpur', 'Comfortable for overnight journeys', 'Drop anywhere in Pune & PCMC'],
  }),
  r('Mumbai', 'Maharashtra', {
    type: 'Long distance',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/site/cta-road.webp',
    description:
      'Book a comfortable Nagpur to Mumbai taxi for business trips, airport connections or family visits. Your driver can take the Samruddhi Mahamarg expressway or your preferred route, with planned breaks for a relaxed journey.',
    highlights: ['Samruddhi Mahamarg route option', 'Drop at Mumbai airport or any suburb', 'Experienced long-route drivers'],
  }),
  r('Hyderabad', 'Telangana', {
    type: 'Interstate',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/site/hero-suv.webp',
    description:
      'Our Nagpur to Hyderabad cab service runs along the NH44 highway, offering a smooth interstate ride for corporate travellers, medical visits and family trips with all-India permit vehicles.',
    highlights: ['Interstate permit vehicles', 'NH44 highway journey', 'Drop at RGIA airport or city'],
  }),
  r('Bhopal', 'Madhya Pradesh', {
    type: 'Interstate',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/destinations/pachmarhi.webp',
    description:
      'Travel from Nagpur to Bhopal, the City of Lakes, in a private cab. Combine your trip with a detour to Pachmarhi or Sanchi for a memorable Madhya Pradesh road journey.',
    highlights: ['Optional stopovers on request', 'Ideal for families & officials', 'Clean, sanitised cars'],
  }),
  r('Jabalpur', 'Madhya Pradesh', {
    type: 'Interstate',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/destinations/jabalpur.webp',
    description:
      'A popular route for business, defence establishments and sightseeing at Bhedaghat’s marble rocks. Our Nagpur to Jabalpur taxis pass through the scenic Seoni and Pench forest belt.',
    highlights: ['Bhedaghat sightseeing add-on', 'Passes the Pench forest belt', 'One-way & round trips'],
  }),
  r('Raipur', 'Chhattisgarh', {
    type: 'Interstate',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/site/hero-suv.webp',
    description:
      'Book a Nagpur to Raipur cab along the NH53 corridor for business travel, airport drops and family visits to the capital of Chhattisgarh.',
    highlights: ['NH53 highway journey', 'Drop at Raipur airport or city', 'Corporate travel friendly'],
  }),
  r('Amravati', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/destinations/chikhaldara.webp',
    description:
      'A frequently travelled Vidarbha route. Ideal for same-day return trips, university visits and onward travel to the hill station of Chikhaldara.',
    highlights: ['Same-day round trips', 'Extend to Chikhaldara', 'Punctual pickups'],
  }),
  r('Chandrapur', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/destinations/tadoba.webp',
    description:
      'Travel to Chandrapur for work or as your gateway to the Tadoba Andhari Tiger Reserve. Our drivers know the resort and safari gate routes well.',
    highlights: ['Tadoba safari gate drops', 'Business & industrial visits', 'Round trip packages'],
  }),
  r('Gondia', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/destinations/pench.webp',
    description:
      'A reliable Nagpur to Gondia taxi service for business, family functions and visits to nearby Nagzira and Navegaon national parks.',
    highlights: ['Family function travel', 'Nagzira wildlife add-on', 'Clean, comfortable cars'],
  }),
  r('Bhandara', 'Maharashtra', {
    type: 'Short trip',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/site/hero-suv.webp',
    description:
      'Quick and convenient cab service from Nagpur to Bhandara for daily business, government work and family visits, with hassle-free return trips.',
    highlights: ['Short, quick journey', 'Same-day returns', 'Local & outstation drivers'],
  }),
  r('Akola', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/destinations/shegaon.webp',
    description:
      'Our Nagpur to Akola taxis are perfect for business travel and pilgrimages — easily combine your trip with a darshan at Shegaon.',
    highlights: ['Shegaon darshan add-on', 'One-way & round trips', 'Comfortable highway ride'],
  }),
  r('Yavatmal', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/site/cta-road.webp',
    description:
      'Book a private cab from Nagpur to Yavatmal for college, business or family visits with courteous drivers and well-maintained cars.',
    highlights: ['Student & family friendly', 'Flexible pickup timings', 'Safe, verified drivers'],
  }),
  r('Gadchiroli', 'Maharashtra', {
    type: 'Outstation',
    vehicles: ['Sedan', 'SUV', 'MUV'],
    image: '/images/destinations/tadoba.webp',
    description:
      'Travel comfortably from Nagpur to Gadchiroli for official duties, project sites and family visits with drivers familiar with the region.',
    highlights: ['Official & project travel', 'Experienced regional drivers', 'Round trip packages'],
  }),
  r('Seoni', 'Madhya Pradesh', {
    type: 'Interstate',
    vehicles: ['Sedan', 'SUV', 'MUV', 'Tempo Traveller'],
    image: '/images/destinations/pench.webp',
    description:
      'A scenic NH44 drive into Madhya Pradesh — a great choice for Pench (Turia gate) safaris, business travel and family visits to Seoni.',
    highlights: ['Pench Turia gate drops', 'NH44 highway route', 'Interstate permit vehicles'],
  }),
];

export const getRoute = (slug) => ROUTES.find((route) => route.slug === slug);

/** Route-specific FAQ generated from the route data. */
export function getRouteFaqs(route) {
  return [
    {
      q: `How do I book a taxi from ${route.from} to ${route.to}?`,
      a: `Fill in the booking form on this page or tap the WhatsApp button. Our team will confirm vehicle availability, fare and pickup details for your ${route.from} to ${route.to} trip.`,
    },
    {
      q: `What is the fare for ${route.from} to ${route.to}?`,
      a: route.pricing
        ? 'Indicative fares are listed above. The final fare depends on vehicle type, trip type, tolls and state taxes.'
        : 'Fares depend on the vehicle, one-way or round trip, tolls and permits. Share your trip details and we will send a transparent quote with no hidden charges.',
    },
    {
      q: `Which vehicles are available for ${route.to}?`,
      a: `For this route we offer ${route.vehicles.join(', ')} options, subject to availability on your travel date.`,
    },
    {
      q: 'Are tolls, parking and state taxes included?',
      a: 'Inclusions are clearly mentioned in your quote. Typically tolls, parking and interstate permit charges are shared upfront so there are no surprises.',
    },
    {
      q: 'Can I make stops on the way?',
      a: 'Yes. Short stops for meals and refreshments are always welcome. Planned sightseeing stops can be added when you book.',
    },
  ];
}

