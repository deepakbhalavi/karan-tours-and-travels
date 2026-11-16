import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'center', action, light = false }) {
  const centered = align === 'center';
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-6 md:mb-14 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <span className={light ? 'eyebrow bg-white/10 text-brand' : 'eyebrow'}>{eyebrow}</span>}
        <h2
          className={`mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl ${
            light ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-muted'}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}

