import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import Logo from '../ui/Logo';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-line/80 bg-white/90 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-[72px] items-center justify-between gap-4" aria-label="Main navigation">
        <Logo light={!solid} />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    solid
                      ? isActive
                        ? 'bg-surface text-ink'
                        : 'text-neutral-600 hover:text-ink'
                      : isActive
                        ? 'bg-white/15 text-white'
                        : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition xl:flex ${
              solid ? 'text-ink hover:bg-surface' : 'text-white hover:bg-white/10'
            }`}
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <button type="button" onClick={() => openBooking()} className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              solid ? 'bg-surface text-ink' : 'bg-white/15 text-white backdrop-blur'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 72px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <div className="container flex min-h-full flex-col py-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-line py-4 font-display text-xl font-bold ${
                          isActive ? 'text-brand-600' : 'text-ink'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-neutral-300" aria-hidden="true" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid gap-3 pt-8">
                <button type="button" onClick={() => { setOpen(false); openBooking(); }} className="btn-primary w-full py-3.5">
                  Book Your Ride
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a href={SITE.phoneHref} className="btn-outline">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call
                  </a>
                  <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-dark">
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

