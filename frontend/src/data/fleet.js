/**
 * TEMPORARY FRONTEND DATA (Stage 1)
 * Fleet will be managed from the Admin Dashboard in Stage 2/3.
 *
 * `pricing` is null until the business configures fares. When set, use e.g.
 *   pricing: { perKm: 12, label: 'per km' }
 * and the VehicleCard will display it automatically.
 */
export const FLEET_CATEGORIES = ['Sedan', 'SUV', 'MUV', 'Tempo Traveller', 'Mini Bus'];

export const FLEET = [
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    category: 'Sedan',
    image: '/images/fleet/swift-dzire.webp',
    seats: '4 + 1',
    ac: true,
    luggage: '2 medium bags',
    facilities: ['Music system', 'Mobile charging', 'Comfortable seats'],
    idealFor: 'City rides & airport transfers',
    pricing: null,
  },
  {
    id: 'etios',
    name: 'Toyota Etios',
    category: 'Sedan',
    image: '/images/fleet/etios.webp',
    seats: '4 + 1',
    ac: true,
    luggage: '2–3 medium bags',
    facilities: ['Spacious boot', 'Mobile charging', 'Music system'],
    idealFor: 'Outstation one-way trips',
    pricing: null,
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'SUV',
    image: '/images/fleet/innova-crysta.webp',
    seats: '6 + 1 / 7 + 1',
    ac: true,
    luggage: '3–4 bags',
    facilities: ['Captain seats (on request)', 'Rear AC vents', 'Mobile charging', 'Carrier (on request)'],
    idealFor: 'Families & long journeys',
    pricing: null,
  },
  {
    id: 'innova-hycross',
    name: 'Toyota Innova HyCross',
    category: 'SUV',
    image: '/images/fleet/innova-hycross.webp',
    seats: '7 + 1',
    ac: true,
    luggage: '3–4 bags',
    facilities: ['Premium interiors', 'Rear AC vents', 'Mobile charging', 'Smooth hybrid ride'],
    idealFor: 'Premium family & corporate travel',
    pricing: null,
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    category: 'MUV',
    image: '/images/fleet/ertiga.webp',
    seats: '6 + 1',
    ac: true,
    luggage: '2–3 bags',
    facilities: ['Rear AC vents', 'Mobile charging', 'Music system'],
    idealFor: 'Small groups on a budget',
    pricing: null,
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    category: 'MUV',
    image: '/images/fleet/carens.webp',
    seats: '6 + 1',
    ac: true,
    luggage: '2–3 bags',
    facilities: ['Modern cabin', 'Rear AC vents', 'Mobile charging'],
    idealFor: 'Family weekend getaways',
    pricing: null,
  },
  {
    id: 'force-tempo-traveller',
    name: 'Force Tempo Traveller',
    category: 'Tempo Traveller',
    image: '/images/fleet/tempo-traveller.webp',
    seats: '12 / 17 seater',
    ac: true,
    luggage: 'Roof carrier / rear space',
    facilities: ['Push-back seats', 'Ample legroom', 'Music system', 'Roof carrier'],
    idealFor: 'Group tours & pilgrimages',
    pricing: null,
  },
  {
    id: 'tata-winger',
    name: 'Tata Winger',
    category: 'Tempo Traveller',
    image: '/images/fleet/tata-winger.webp',
    seats: '12 – 15 seater',
    ac: true,
    luggage: 'Rear luggage space',
    facilities: ['Comfortable seating', 'High roof', 'Music system'],
    idealFor: 'Corporate & wedding groups',
    pricing: null,
  },
  {
    id: 'mini-bus',
    name: 'Mini Bus',
    category: 'Mini Bus',
    image: '/images/fleet/mini-bus.webp',
    seats: '20 – 26 seater',
    ac: true,
    luggage: 'Dedicated luggage space',
    facilities: ['Push-back seats', 'Music system', 'Experienced driver'],
    idealFor: 'Large groups, events & school trips',
    pricing: null,
  },
];

export const VEHICLE_OPTIONS = [
  'Any / Suggest best',
  'Sedan (Dzire / Etios)',
  'MUV (Ertiga / Carens)',
  'SUV (Innova Crysta)',
  'Premium SUV (Innova HyCross)',
  'Tempo Traveller',
  'Mini Bus',
];

export const getVehiclesByCategory = (category) => FLEET.filter((v) => v.category === category);

