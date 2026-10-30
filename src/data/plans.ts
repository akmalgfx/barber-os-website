import { SIGNUP } from './site';

export type PlanId = 'free' | 'solo' | 'elite';
export type Plan = {
  id: PlanId; name: string; short: string; note: string; price: string;
  who: string; cta: string; href: string; lead?: boolean; highlights: string[];
};

export const plans: Record<PlanId, Plan> = {
  free: {
    id: 'free', name: 'Online Booking Plan', short: 'Free Plan', note: 'Free Forever', price: '$0',
    who: 'Core online booking and scheduling for barbers.', cta: 'Start For Free', href: SIGNUP.free,
    highlights: ['Online booking and calendar', 'Client management', 'Appointment reminders', 'Branded landing page'],
  },
  solo: {
    id: 'solo', name: 'Solo Plan', short: 'Solo Plan', note: '7-Day Free Trial', price: '$29',
    who: 'For single operators who rent chairs or have their own studio.', cta: 'Get Started', href: SIGNUP.solo,
    highlights: ['Everything in Free', 'POS and integrated payments', 'No-show protection', 'Marketing, reviews and gift cards'],
  },
  elite: {
    id: 'elite', name: 'Elite Plan (Shop)', short: 'Elite Plan', note: '7-Day Free Trial', price: '$89',
    who: 'For barbershop and salon owners managing a team.', cta: 'Get Started', href: SIGNUP.elite, lead: true,
    highlights: ['Everything in Solo', 'Payroll, pay runs and tip splitting', 'Commissions and login permissions', 'Multi-location management'],
  },
};

// y = included, n = not included, l = limited. Text = add-on price shown across Solo and Elite.
type Cell = 'y' | 'n' | 'l';
export type Row = { label: string; cells: [Cell, Cell, Cell] } | { label: string; free: Cell; addon: string };
export type Group = { title: string; rows: Row[] };

const r = (label: string, f: Cell, s: Cell, e: Cell): Row => ({ label, cells: [f, s, e] });

// Transcribed from barber-os.com/pricing-2.
export const comparison: Group[] = [
  {
    title: 'Bookings & Client Experience',
    rows: [
      r('Online Booking', 'y', 'y', 'y'),
      r('Calendar & Appointment Scheduling', 'y', 'y', 'y'),
      r('Client Management', 'y', 'y', 'y'),
      r('Appointment Reminders', 'y', 'y', 'y'),
      r('Reporting & Analytics', 'l', 'y', 'y'),
      r('No Show Protection (Card On File)', 'n', 'y', 'y'),
      r('Group Bookings, Bundles & Add-Ons', 'n', 'y', 'y'),
      r('Processing & Finishing Times', 'n', 'y', 'y'),
      r('Barber Profiles On Booking', 'n', 'y', 'y'),
      r('Dynamic Pricing', 'n', 'y', 'y'),
    ],
  },
  {
    title: 'Commerce, Retail & Payments',
    rows: [
      r('Integrated Payments', 'y', 'y', 'y'),
      r('General Finance Report', 'y', 'y', 'y'),
      r('Point Of Sale (POS)', 'n', 'y', 'y'),
      r('Inventory: Stock Orders', 'n', 'y', 'y'),
      r('Online Product Store', 'n', 'y', 'y'),
      r('POS & In-Store Product Sales', 'n', 'y', 'y'),
      r('Retail & Inventory', 'n', 'y', 'y'),
      r('Custom Payment Settings', 'n', 'y', 'y'),
    ],
  },
  {
    title: 'Growth & Marketing',
    rows: [
      r('Branded Landing Page', 'y', 'y', 'y'),
      r('Appointment Related Automations', 'y', 'y', 'y'),
      r('Client Relationship Automations', 'n', 'y', 'y'),
      r('Google Booking', 'n', 'y', 'y'),
      r('Offers & Discounts', 'n', 'y', 'y'),
      r('Blast Campaigns', 'n', 'y', 'y'),
      r('Two Way Messaging', 'n', 'y', 'y'),
      r('Smart Links', 'n', 'y', 'y'),
      r('Loyalty Program', 'n', 'y', 'y'),
      r('Client Reviews', 'n', 'y', 'y'),
      r('Gift Cards', 'n', 'y', 'y'),
    ],
  },
  {
    title: 'Team, Operations & Advanced Controls',
    rows: [
      r('Shift Scheduling', 'y', 'y', 'y'),
      r('Basic Business Settings', 'y', 'y', 'y'),
      r('Employee Notifications', 'y', 'y', 'y'),
      // Confirmed by Barber-OS: not part of Solo.
      r('Employee Management', 'y', 'n', 'y'),
      r('Employee Permissions & Compensation', 'n', 'y', 'y'),
      r('Pay Runs', 'n', 'n', 'y'),
      r('Sales & Product Commissions', 'n', 'n', 'y'),
      r('Login Permissions', 'n', 'n', 'y'),
      r('Service Pricing & Duration Per Staff', 'n', 'n', 'y'),
      r('Tiered Commissions', 'n', 'n', 'y'),
      r('Multi Location Management', 'n', 'n', 'y'),
      r('Payroll Management', 'n', 'n', 'y'),
      r('Tip Splitting', 'n', 'n', 'y'),
    ],
  },
  {
    title: 'Platforms & Integrations',
    rows: [
      r('Admin Business App', 'y', 'y', 'y'),
      r('Google Book Online Button', 'y', 'y', 'y'),
      r('Point Of Sale (POS) App', 'n', 'y', 'y'),
      r('Meta Pixel Tracking', 'n', 'y', 'y'),
      r('Google Tracking', 'n', 'y', 'y'),
    ],
  },
  {
    title: 'Add-Ons',
    rows: [
      { label: 'Custom Branded App', free: 'n', addon: '$79 Per Month' },
      { label: 'Clip AI Communication', free: 'n', addon: '$89 Per Month' },
      { label: 'Walk-In Management Kiosk', free: 'n', addon: '$49 Per Month + 30-Day Free Trial' },
    ],
  },
  {
    title: 'Onboarding & Support',
    rows: [
      r('Email Support', 'y', 'y', 'y'),
      r('BOS Knowledge Base', 'y', 'y', 'y'),
      r('Data Migration From Other Software', 'y', 'y', 'y'),
      r('Text Support', 'n', 'y', 'y'),
      r('Call Support', 'n', 'y', 'y'),
    ],
  },
];
