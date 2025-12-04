export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Team', href: '/team' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Dental Implants', href: '/services/dental-implants' },
      { label: 'Clear Aligners', href: '/services/clear-aligners' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
      { label: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
    ],
  },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Financing', href: '/financing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export const footerNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Financing', href: '/financing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
];

export const secondaryNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'HIPAA Notice', href: '/hipaa-notice' },
  { label: 'Accessibility', href: '/accessibility' },
];
