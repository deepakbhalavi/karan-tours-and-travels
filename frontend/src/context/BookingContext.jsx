import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import BookingWidget from '../components/BookingWidget';

const BookingContext = createContext({ openBooking: () => {} });

/**
 * Global booking modal – any "Book Now" button can call
 * openBooking({ drop: 'Tadoba', vehicle: 'SUV (Innova Crysta)' }).
 */
export function BookingProvider({ children }) {
  const [state, setState] = useState(null);

  const openBooking = useCallback((defaults = {}) => setState({ defaults, key: Date.now() }), []);
  const close = useCallback(() => setState(null), []);

  useEffect(() => {
    if (!state) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [state, close]);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book your ride"
              className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-3xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close booking form"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition hover:bg-line"
              >
                <X className="h-4 w-4" />
              </button>
              <BookingWidget
                key={state.key}
                defaults={state.defaults}
                variant="hero"
                title={state.defaults.title || 'Book your ride'}
                subtitle={state.defaults.subtitle}
                className="rounded-b-none border-0 sm:rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => useContext(BookingContext);

