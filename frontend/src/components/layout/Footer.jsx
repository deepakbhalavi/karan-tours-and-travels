import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '../../config/site';
import { ROUTES } from '../../data/routes';
import { DESTINATIONS } from '../../data/destinations';
import Logo from '../ui/Logo';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../../utils/whatsapp';

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

const linkCls = 'text-white/60 transition hover:text-brand';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Premium taxi and travel services from Nagpur — one-way, round trip, local, airport transfers and curated tours across
              central India.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-brand">“{SITE.tagline}”</p>
            <div className="mt-6 flex gap-2">
              <a href={SITE.phoneHref} aria-label="Call us" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand hover:text-ink">
                <Phone className="h-4 w-4" />
              </a>
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand hover:text-ink">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email us" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand hover:text-ink">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterCol title="Company">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Top Routes">
              {ROUTES.slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <Link to={`/routes/${r.slug}`} className={linkCls}>
                    Nagpur to {r.to}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Destinations">
              {DESTINATIONS.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link to={`/destinations/${d.slug}`} className={linkCls}>
                    {d.name}
                  </Link>
                </li>
              ))}
            </FooterCol>
            <FooterCol title="Contact">
              <li>
                <a href={SITE.phoneHref} className={`flex items-start gap-2 ${linkCls}`}>
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={`flex items-start gap-2 break-all ${linkCls}`}>
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {SITE.location}
              </li>
            </FooterCol>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved. · {SITE.brandLine}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/faq" className="hover:text-white">Help & FAQ</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/image-credits" className="inline-flex items-center gap-1 hover:text-white">
              Image credits <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

