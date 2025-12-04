export type Address = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type Practice = {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: Address;
  hours: { label: string; value: string }[];
  googleMapsUrl: string;
  gmbReviewUrl: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    linkedin?: string;
  };
};

export type SiteMeta = {
  title: string;
  description: string;
  ogImage: string;
};

export const practice: Practice = {
  name: 'BrightSide Dental Studio',
  tagline: 'Comfort-focused family and cosmetic dentistry in your neighborhood.',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'hello@brightsidedental.com',
  address: {
    line1: '123 Main Street',
    line2: 'Suite 200',
    city: 'Sampletown',
    state: 'CA',
    zip: '90210',
  },
  hours: [
    { label: 'Mon-Thu', value: '8:00am – 5:00pm' },
    { label: 'Friday', value: '8:00am – 2:00pm' },
    { label: 'Saturday', value: 'By appointment' },
  ],
  googleMapsUrl: 'https://maps.google.com',
  gmbReviewUrl: 'https://maps.google.com/reviews',
  primaryCTA: {
    label: 'Request Appointment',
    href: '/new-patients',
  },
  secondaryCTA: {
    label: 'Call Our Office',
    href: 'tel:+15551234567',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com',
  },
};

export const siteMeta: SiteMeta = {
  title: `${practice.name} | Family & Cosmetic Dentistry`,
  description:
    'Modern, patient-first dental care for families and busy professionals. Advanced technology, gentle approach, and convenient scheduling.',
  ogImage: '/og-image.jpg', // TODO: replace with generated OG image path
};
