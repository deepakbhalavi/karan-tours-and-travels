import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircleQuestion, Phone } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHeader from '../components/PageHeader';
import FAQAccordion from '../components/FAQAccordion';
import Icon from '../components/ui/Icon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { FAQ_CATEGORIES } from '../data/faqs';
import { SITE } from '../config/site';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';

export default function Faq() {
  const [active, setActive] = useState(FAQ_CATEGORIES[0].id);
  const current = FAQ_CATEGORIES.find((c) => c.id === active);

  return (
    <>
      <Seo
        title="Help & FAQ"
        description="Answers to common questions about booking, fares, payments, drivers, outstation trips, airport transfers and cancellations at Karan Tours & Travels, Nagpur."
      />
      <PageHeader
        eyebrow="Help Centre"
        title="How can we help you?"
        description="Find quick answers about bookings, fares, drivers, outstation trips, airport transfers and cancellations."
        crumbs={[{ label: 'Help & FAQ' }]}
      />

      <section className="section pt-12 md:pt-16">
        <div className="container grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="FAQ categories" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:px-0" role="tablist">
              {FAQ_CATEGORIES.map((c) => {
                const on = c.id === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(c.id)}
                    className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition lg:py-4 ${
                      on ? 'bg-ink text-white shadow-lift' : 'border border-line bg-white text-neutral-600 hover:border-ink hover:text-ink'
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${on ? 'bg-brand text-ink' : 'bg-surface'}`}>
                      <Icon name={c.icon} className="h-4 w-4" />
                    </span>
                    {c.title}
                  </button>
                );
              })}
            </nav>
            <div className="mt-6 hidden rounded-3xl bg-surface p-6 lg:block">
              <MessageCircleQuestion className="h-8 w-8 text-brand-600" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-bold">Still have questions?</p>
              <p className="mt-1 text-sm text-muted">Our team is happy to help.</p>
              <Link to="/contact" className="btn-dark mt-4 w-full">Contact us</Link>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon name={current.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{current.title}</h2>
                <p className="text-sm text-muted">{current.items.length} questions</p>
              </div>
            </div>
            <FAQAccordion key={current.id} items={current.items} />

            <div className="mt-12 flex flex-col gap-5 rounded-3xl bg-ink p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <h3 className="text-xl font-extrabold text-white">Didn’t find your answer?</h3>
                <p className="mt-1 text-sm text-white/60">Call or WhatsApp us — we usually reply within minutes.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
                <a href={SITE.phoneHref} className="btn-ghost-light">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

