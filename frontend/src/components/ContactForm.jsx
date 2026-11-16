import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react';
import { rules } from '../utils/validation';
import { buildContactMessage, whatsappLink } from '../utils/whatsapp';
import { SITE } from '../config/site';
import WhatsAppIcon from './ui/WhatsAppIcon';

const SUBJECTS = ['Taxi booking enquiry', 'Tour package', 'Corporate / event transport', 'Feedback', 'Other'];

/**
 * Contact form with frontend validation.
 * Stage 1: prepares a WhatsApp / email message – nothing is stored.
 * Stage 2: swap `onSubmit` for a POST to the enquiries API.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched', defaultValues: { subject: SUBJECTS[0] } });

  const onSubmit = async (data) => {
    const message = buildContactMessage(data);
    setSent({
      name: data.name.split(' ')[0],
      whatsapp: whatsappLink(message),
      mailto: `mailto:${SITE.email}?subject=${encodeURIComponent(`${data.subject} – ${data.name}`)}&body=${encodeURIComponent(message.replace(/\*/g, ''))}`,
    });
  };

  return (
    <div className="card p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-8 text-center" role="status">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50">
              <CheckCircle2 className="h-8 w-8 text-brand-600" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold">Thanks, {sent.name}!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              Your message is ready. Choose how you’d like to send it and our team will get back to you shortly.
            </p>
            <div className="mx-auto mt-6 flex max-w-sm flex-col gap-2.5 sm:flex-row">
              <a href={sent.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href={sent.mailto} className="btn-dark flex-1">
                <Mail className="h-4 w-4" aria-hidden="true" /> Email
              </a>
            </div>
            <button type="button" onClick={() => { setSent(null); reset(); }} className="mt-5 text-xs font-semibold text-muted hover:text-ink">
              Write another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <h2 className="text-2xl font-extrabold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted">We usually reply within a few minutes during working hours.</p>
            </div>
            <div>
              <label htmlFor="c-name" className="field-label">Full name *</label>
              <input id="c-name" {...register('name', rules.fullName)} autoComplete="name" placeholder="Your name" className="field" aria-invalid={!!errors.name} />
              {errors.name && <p className="field-error" role="alert">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="c-mobile" className="field-label">Mobile number *</label>
              <input id="c-mobile" type="tel" inputMode="tel" {...register('mobile', rules.mobile)} autoComplete="tel" placeholder="10-digit mobile" className="field" aria-invalid={!!errors.mobile} />
              {errors.mobile && <p className="field-error" role="alert">{errors.mobile.message}</p>}
            </div>
            <div>
              <label htmlFor="c-email" className="field-label">Email (optional)</label>
              <input id="c-email" type="email" {...register('email', rules.email)} autoComplete="email" placeholder="you@example.com" className="field" aria-invalid={!!errors.email} />
              {errors.email && <p className="field-error" role="alert">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="c-subject" className="field-label">Subject</label>
              <select id="c-subject" {...register('subject')} className="field">
                {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="field-label">Message *</label>
              <textarea
                id="c-message"
                rows={5}
                {...register('message', {
                  required: 'Please write your message',
                  minLength: { value: 10, message: 'Message should be at least 10 characters' },
                  maxLength: { value: 1000, message: 'Message is too long (max 1000 characters)' },
                })}
                placeholder="Tell us about your trip – dates, pickup, destination, number of travellers…"
                className="field resize-none"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="field-error" role="alert">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary py-3.5 sm:col-span-2">
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <>Send Message <Send className="h-4 w-4" aria-hidden="true" /></>}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

