import { motion } from 'framer-motion';
import { SITE } from '../config/site';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';
import WhatsAppIcon from './ui/WhatsAppIcon';

/** Floating WhatsApp click-to-chat button (rendered on every public page). */
export default function WhatsAppButton({ message = DEFAULT_WHATSAPP_MESSAGE }) {
  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lift transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" aria-hidden="true" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 md:inline">
        Chat with us
      </span>
    </motion.a>
  );
}

