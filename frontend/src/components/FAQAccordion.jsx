import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

function Item({ q, a, open, onToggle }) {
  const id = useId();
  return (
    <div className={`rounded-2xl border transition-colors ${open ? 'border-brand/40 bg-white shadow-soft' : 'border-line bg-white'}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[15px] font-bold sm:px-6 sm:py-5 sm:text-base"
        >
          {q}
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-brand text-ink' : 'bg-surface text-ink'
            }`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Accessible accordion. `items`: [{ q, a }] */
export default function FAQAccordion({ items, defaultOpen = 0, allowMultiple = false }) {
  const [open, setOpen] = useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = (i) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : allowMultiple ? [...prev, i] : [i]));

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <Item key={item.q} {...item} open={open.includes(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}

