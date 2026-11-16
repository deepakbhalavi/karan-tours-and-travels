import {
  ArrowRightLeft, BadgeIndianRupee, Briefcase, CalendarCheck, Car, Clock, Headset, MapPin,
  Mountain, Plane, RefreshCcw, Repeat, Route, ShieldCheck, Sparkles, Wallet, Compass, Heart, Target, Eye,
} from 'lucide-react';

const ICONS = {
  ArrowRightLeft, BadgeIndianRupee, Briefcase, CalendarCheck, Car, Clock, Headset, MapPin,
  Mountain, Plane, RefreshCcw, Repeat, Route, ShieldCheck, Sparkles, Wallet, Compass, Heart, Target, Eye,
};

/** Renders a Lucide icon by name (used for icons referenced in data files). */
export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Compass;
  return <Cmp aria-hidden="true" {...props} />;
}

