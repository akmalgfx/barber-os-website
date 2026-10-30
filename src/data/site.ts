// Every outbound link the site uses, taken from the live barber-os.com.
export const GET_STARTED = '/get-started';

export const SIGNUP = {
  free: 'https://admin.barber-os.com/account/rep?uuid=805701fd-5355-40b2-84af-03f6ae42ac9f',
  solo: 'https://admin.barber-os.com/account/rep?uuid=ba00778b-ee89-46a1-9589-59f0f1d24f1c',
  elite: 'https://admin.barber-os.com/account/rep?uuid=caa77c85-fefd-4e36-9fd6-a2120d12fe5e',
};

export const LINKS = {
  adminLogin: 'https://admin.barber-os.com/dashboard',
  posLogin: 'https://pos.barber-os.com/account/pin',
  bookDemo: 'https://calendar.app.google/vTv8znr3gzaqV4hB6',
  support: 'https://barberos.zohodesk.com/portal/en/kb/barber-os',
  about: 'https://www.barber-os.com/about-us',
  faqs: '/#faq',
  privacy: 'https://www.barber-os.com/pages/privacy',
  terms: 'https://www.barber-os.com/pages/terms',
  careers: 'https://ca.indeed.com/cmp/Barber--os-Technologies-Inc./jobs',
  instagram: 'https://www.instagram.com/thebarber.os',
  clipAi: 'https://www.barber-os.com/clip-ai-communication',
};

export const APPS = {
  admin: {
    ios: 'https://apps.apple.com/ca/app/barber-os/id6708225273',
    android: 'https://play.google.com/store/apps/details?id=com.barberos.admin',
  },
  pos: {
    ios: 'https://apps.apple.com/ca/app/barber-os-pos/id6738750743',
    android: 'https://play.google.com/store/apps/details?id=com.barberos.pos',
  },
  kiosk: {
    ios: 'https://apps.apple.com/ca/app/barber-os-walk-in-kiosk/id6793683089',
    android: 'https://play.google.com/store/apps/details?id=com.barberos.walkinkiosk',
  },
};

// Where the contact and info-package forms post. Fill these in with your form service
// (for example a Zoho Desk web form, HubSpot or Formspree endpoint). Empty = not connected.
export const FORM_ENDPOINTS = {
  contact: '',
  infoPackage: '',
};
