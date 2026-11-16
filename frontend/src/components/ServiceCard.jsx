import { ArrowUpRight } from 'lucide-react';
import Icon from './ui/Icon';

export default function ServiceCard({ icon, title, description, onClick, index = 0 }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
      <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-surface transition group-hover:text-brand-50" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="relative mt-6 text-xl font-bold">{title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      {onClick && (
        <button type="button" onClick={onClick} className="relative mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ink">
          Book this service
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden="true" />
        </button>
      )}
    </article>
  );
}

