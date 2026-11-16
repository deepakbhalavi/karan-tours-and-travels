/**
 * Central business configuration.
 * Update values here – every page and component reads from this file.
 */
export const SITE = {
  name: 'Karan Tours & Travels',
  shortName: 'Karan Tours',
  owner: 'Karan Mandale',
  brandLine: 'Karan Tours & Travels by KARAN MANDALE',
  tagline: 'Your Journey, Our Responsibility.',
  phone: '+91 9075844372',
  phoneDisplay: '+91 90758 44372',
  phoneHref: 'tel:+919075844372',
  whatsappNumber: '919075844372', // international format, digits only
  email: 'karantoursandtravels2393@gmail.com',
  location: 'Nagpur, Maharashtra, India',
  city: 'Nagpur',
  // Placeholder production URL – used for canonical tags, OG tags and sitemap.
  url: import.meta.env.VITE_SITE_URL || 'https://www.karantoursandtravels.com',
  mapEmbedUrl: 'https://www.google.com/maps?q=Nagpur,+Maharashtra,+India&z=12&output=embed',
  mapLink: 'https://maps.google.com/?q=Nagpur,+Maharashtra,+India',
  defaultOgImage: '/images/site/hero-suv.webp',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Routes', to: '/routes' },
  { label: 'Help & FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

