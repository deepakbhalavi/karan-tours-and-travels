/**
 * TEMPORARY FRONTEND DATA (Stage 1)
 * Destinations are static here and will be served by the API in Stage 2.
 * Distances and prices are intentionally NOT included until verified.
 */
export const DESTINATIONS = [
  {
    slug: 'tadoba',
    name: 'Tadoba',
    fullName: 'Tadoba Andhari Tiger Reserve',
    category: 'Wildlife',
    state: 'Maharashtra',
    image: '/images/destinations/tadoba.webp',
    description:
      "Maharashtra's oldest and largest national park, celebrated for frequent tiger sightings, dense teak forests and peaceful lakes.",
    highlights: ['Jungle safaris (Gypsy & canter)', 'Tadoba Lake', 'Bird watching', 'Eco-resorts near the buffer zone'],
    bestTime: 'October to June (core zone typically closed during monsoon)',
    featured: true,
  },
  {
    slug: 'pench-national-park',
    name: 'Pench National Park',
    fullName: 'Pench National Park',
    category: 'Wildlife',
    state: 'Maharashtra / Madhya Pradesh',
    image: '/images/destinations/pench.webp',
    description:
      'A scenic tiger reserve along the Pench river that inspired The Jungle Book, known for leopards, wild dogs and rich birdlife.',
    highlights: ['Tiger & leopard safaris', 'Pench river views', 'Totladoh reservoir', 'Nature walks'],
    bestTime: 'October to June',
    featured: true,
  },
  {
    slug: 'chikhaldara',
    name: 'Chikhaldara',
    fullName: 'Chikhaldara Hill Station',
    category: 'Hill Station',
    state: 'Maharashtra',
    image: '/images/destinations/chikhaldara.webp',
    description:
      'The only coffee-growing region of Vidarbha, offering misty Satpura viewpoints, waterfalls and the nearby Melghat Tiger Reserve.',
    highlights: ['Hurricane & Prospect Points', 'Gavilgad Fort', 'Bhimkund', 'Melghat Tiger Reserve'],
    bestTime: 'July to February',
    featured: true,
  },
  {
    slug: 'ramtek',
    name: 'Ramtek',
    fullName: 'Ramtek',
    category: 'Pilgrimage',
    state: 'Maharashtra',
    image: '/images/destinations/ramtek.webp',
    description:
      'A historic temple town near Nagpur, home to the hilltop Ramtek Fort Temple associated with Lord Rama and the scenic Khindsi Lake.',
    highlights: ['Ramtek Fort Temple', 'Khindsi Lake', 'Kalidas Smarak', 'Jain temples'],
    bestTime: 'Throughout the year',
    featured: false,
  },
  {
    slug: 'pachmarhi',
    name: 'Pachmarhi',
    fullName: 'Pachmarhi',
    category: 'Hill Station',
    state: 'Madhya Pradesh',
    image: '/images/destinations/pachmarhi.webp',
    description:
      "Madhya Pradesh's only hill station — the 'Queen of Satpura' — with waterfalls, ancient caves, forests and sweeping sunset points.",
    highlights: ['Bee Falls', 'Dhoopgarh sunset point', 'Pandav Caves', 'Jata Shankar'],
    bestTime: 'October to June',
    featured: true,
  },
  {
    slug: 'shirdi',
    name: 'Shirdi',
    fullName: 'Shirdi',
    category: 'Pilgrimage',
    state: 'Maharashtra',
    image: '/images/destinations/shirdi.webp',
    description:
      'One of India’s most visited pilgrimage towns, revered as the home of Shri Sai Baba, welcoming devotees from across the world.',
    highlights: ['Shri Saibaba Samadhi Mandir', 'Dwarkamai', 'Chavadi', 'Shani Shingnapur (nearby)'],
    bestTime: 'Throughout the year',
    featured: true,
  },
  {
    slug: 'ajanta-ellora',
    name: 'Ajanta & Ellora',
    fullName: 'Ajanta & Ellora Caves',
    category: 'Heritage',
    state: 'Maharashtra',
    image: '/images/destinations/ajanta-ellora.webp',
    description:
      'UNESCO World Heritage cave complexes near Chhatrapati Sambhajinagar, famed for ancient Buddhist paintings and the monolithic Kailasa temple.',
    highlights: ['Kailasa Temple (Ellora Cave 16)', 'Ajanta murals', 'Grishneshwar Jyotirlinga', 'Daulatabad Fort'],
    bestTime: 'June to March',
    featured: true,
  },
  {
    slug: 'kanha-national-park',
    name: 'Kanha National Park',
    fullName: 'Kanha Tiger Reserve',
    category: 'Wildlife',
    state: 'Madhya Pradesh',
    image: '/images/destinations/kanha.webp',
    description:
      'Vast sal forests and grassy meadows that are home to tigers and the rare hard-ground barasingha, the state animal of Madhya Pradesh.',
    highlights: ['Tiger safaris', 'Barasingha meadows', 'Bamni Dadar sunset point', 'Kanha Museum'],
    bestTime: 'October to June',
    featured: false,
  },
  {
    slug: 'amarkantak',
    name: 'Amarkantak',
    fullName: 'Amarkantak',
    category: 'Pilgrimage',
    state: 'Madhya Pradesh',
    image: '/images/destinations/amarkantak.webp',
    description:
      'A sacred town in the Maikal hills where the holy Narmada river originates, surrounded by ancient temples and forest trails.',
    highlights: ['Narmada Udgam Temple', 'Kapildhara Falls', 'Ancient Kalachuri temples', 'Sonmuda'],
    bestTime: 'Throughout the year',
    featured: false,
  },
  {
    slug: 'jabalpur',
    name: 'Jabalpur',
    fullName: 'Jabalpur & Bhedaghat',
    category: 'Nature',
    state: 'Madhya Pradesh',
    image: '/images/destinations/jabalpur.webp',
    description:
      'Gateway to the breathtaking marble rocks of Bhedaghat, where the Narmada flows through a gleaming gorge and Dhuandhar Falls.',
    highlights: ['Bhedaghat Marble Rocks boating', 'Dhuandhar Falls', 'Chausath Yogini Temple', 'Madan Mahal Fort'],
    bestTime: 'October to March',
    featured: false,
  },
  {
    slug: 'shegaon',
    name: 'Shegaon',
    fullName: 'Shegaon',
    category: 'Pilgrimage',
    state: 'Maharashtra',
    image: '/images/destinations/shegaon.webp',
    description:
      'The serene temple town of Shri Gajanan Maharaj, known for its spotless temple complex and the beautiful Anand Sagar gardens.',
    highlights: ['Shri Gajanan Maharaj Temple', 'Anand Sagar', 'Peaceful darshan facilities'],
    bestTime: 'Throughout the year',
    featured: false,
  },
  {
    slug: 'goa',
    name: 'Goa',
    fullName: 'Goa',
    category: 'Beach',
    state: 'Goa',
    image: '/images/destinations/goa.webp',
    description:
      'Golden beaches, Portuguese-era churches, seafood shacks and vibrant nightlife — the perfect long-distance road trip for families and friends.',
    highlights: ['North & South Goa beaches', 'Old Goa churches', 'Dudhsagar Falls', 'Fontainhas Latin Quarter'],
    bestTime: 'November to February',
    featured: false,
  },
  {
    slug: 'mahabaleshwar',
    name: 'Mahabaleshwar',
    fullName: 'Mahabaleshwar',
    category: 'Hill Station',
    state: 'Maharashtra',
    image: '/images/destinations/mahabaleshwar.webp',
    description:
      'A classic Western Ghats retreat of misty viewpoints, strawberry farms and the calm Venna Lake, with Panchgani just next door.',
    highlights: ['Arthur’s Seat', 'Venna Lake', 'Strawberry farms', 'Pratapgad Fort'],
    bestTime: 'October to June',
    featured: false,
  },
];

export const DESTINATION_CATEGORIES = ['All', ...new Set(DESTINATIONS.map((d) => d.category))];

export const getDestination = (slug) => DESTINATIONS.find((d) => d.slug === slug);

