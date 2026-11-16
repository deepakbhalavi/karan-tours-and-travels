/** Shared validation rules for React Hook Form. */
export const PATTERNS = {
  name: /^[A-Za-z][A-Za-z .'-]{1,59}$/,
  // Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6–9
  mobile: /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
};

export const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export const rules = {
  fullName: {
    required: 'Please enter your full name',
    pattern: { value: PATTERNS.name, message: 'Use letters only (2–60 characters)' },
  },
  mobile: {
    required: 'Please enter your mobile number',
    validate: (v) =>
      PATTERNS.mobile.test((v || '').replace(/[\s-]/g, '')) || 'Enter a valid 10-digit Indian mobile number',
  },
  email: {
    pattern: { value: PATTERNS.email, message: 'Enter a valid email address' },
  },
};
