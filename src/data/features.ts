// The full Barber-OS feature catalogue, grouped as in the site navigation.
// Each entry points at its future feature page; pages not built yet will 404 until they exist.
export type Feature = { name: string; icon: string; slug: string; tag?: 'new' | 'hot' };
export type FeatureGroup = { title: string; items: Feature[] };

export const featureGroups: FeatureGroup[] = [
  {
    title: 'Scheduling & Payments',
    items: [
      { name: 'Walk-In Management', icon: 'walk', slug: 'walk-in-management', tag: 'new' },
      { name: 'Appointment Scheduling', icon: 'calendarCheck', slug: 'appointment-scheduling' },
      { name: 'Point Of Sale (POS)', icon: 'pos', slug: 'point-of-sale' },
      { name: 'Integrated Payments', icon: 'dollarSync', slug: 'integrated-payments' },
      { name: 'Online Booking', icon: 'calendarPlay', slug: 'online-booking' },
      { name: 'No-Show Protection', icon: 'shield', slug: 'no-show-protection' },
      { name: 'Google Booking', icon: 'google', slug: 'google-booking' },
    ],
  },
  {
    title: 'Your Business',
    items: [
      { name: 'Clip AI Reporting', icon: 'chartSpark', slug: 'clip-ai-reporting', tag: 'new' },
      { name: 'Product Store', icon: 'store', slug: 'product-store' },
      { name: 'Payroll Management', icon: 'payroll', slug: 'payroll-management' },
      { name: 'Reporting & Analytics', icon: 'report', slug: 'reporting-analytics' },
      { name: 'Retail & Inventory', icon: 'cart', slug: 'retail-inventory' },
      { name: 'Multi-Location Management', icon: 'location', slug: 'multi-location-management' },
      { name: 'Notifications', icon: 'bellDot', slug: 'notifications' },
      { name: 'Employee Management', icon: 'team', slug: 'employee-management' },
      { name: 'Tip Splitting', icon: 'tipSplit', slug: 'tip-splitting' },
    ],
  },
  {
    title: 'Marketing & Automations',
    items: [
      { name: 'Dynamic Pricing', icon: 'dynamicPrice', slug: 'dynamic-pricing', tag: 'hot' },
      { name: 'Blast Campaigns', icon: 'blast', slug: 'blast-campaigns' },
      { name: 'Offers & Discounts', icon: 'offer', slug: 'offers-discounts' },
      { name: 'Automations', icon: 'automation', slug: 'automations' },
      { name: 'Facebook Pixel', icon: 'meta', slug: 'facebook-pixel' },
      { name: 'Smart Links', icon: 'link', slug: 'smart-links' },
    ],
  },
  {
    title: 'Client Relationships',
    items: [
      { name: 'Clip AI Communication', icon: 'chatSpark', slug: 'clip-ai-communication', tag: 'new' },
      { name: 'Custom Branded App', icon: 'appGrid', slug: 'custom-branded-app', tag: 'hot' },
      { name: 'Two-Way Messaging', icon: 'messages', slug: 'two-way-messaging' },
      { name: 'Loyalty Program', icon: 'gift', slug: 'loyalty-program' },
      { name: 'Client Management', icon: 'handshake', slug: 'client-management' },
      { name: 'Gift Cards', icon: 'giftCard', slug: 'gift-cards' },
      { name: 'Appointment Reminders', icon: 'reminder', slug: 'appointment-reminders' },
      { name: 'Client Reviews', icon: 'reviews', slug: 'client-reviews' },
    ],
  },
];

export const featureHref = (slug: string) => `/features/${slug}`;
