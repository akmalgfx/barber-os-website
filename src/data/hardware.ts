// POS hardware, taken from barber-os.com/pos-hardware and its product pages.
export type Spec = [label: string, value: string];

export interface Product {
  id: string;
  name: string;
  price: number;
  tag?: string;
  text: string;
  imgs: { src: string; alt: string }[];
  inBox: string[];
  specs: Spec[];
  note?: string;
}

const img = (id: string, alt: string) => ({ src: `/img/hardware/${id}.webp`, alt });

export const terminals: Product[] = [
  {
    id: 'sfo1', name: 'SFO1 Terminal', price: 576, tag: 'Trending',
    text: 'An 8-inch customer-facing display that does the work of several devices, so the counter stays clear.',
    imgs: [img('sfo1', 'SFO1 terminal with an 8-inch screen showing a checkout total.')],
    inBox: ['SFO1 terminal', 'Charging cable', 'Countertop stand'],
    specs: [
      ['Screen', '8" 1280×800 IPS touch'],
      ['Built-in printer', 'No'],
      ['Operating system', 'Adyen OS, Android 13'],
      ['Camera / scanner', '5MP front camera'],
      ['Connectivity', 'Cellular, Wi-Fi'],
      ['PCI validity', 'PCI PTS 6'],
      ['Size', '203 × 144 × 18 mm'],
    ],
  },
  {
    id: 's1f2', name: 'S1F2 Terminal', price: 576, tag: 'Best Selling',
    text: 'A larger touchscreen, longer battery life and a built-in printer, made for high-volume days.',
    imgs: [img('s1f2', 'S1F2 handheld terminal with a 5.5-inch screen and a built-in receipt printer.')],
    inBox: ['S1F2 terminal', 'Charging cable'],
    specs: [
      ['Screen', '5.5" touch'],
      ['Built-in printer', 'Yes, 40 mm roll'],
      ['Operating system', 'Android 9'],
      ['Camera / scanner', 'Camera, optional barcode scanner'],
      ['Connectivity', 'Cellular, Wi-Fi'],
      ['PCI validity', 'April 2030 (v6)'],
      ['Size', '200 × 78 × 56 mm'],
    ],
  },
  {
    id: 'ams1', name: 'AMS1 Terminal', price: 299,
    text: 'A compact Android terminal for the counter or the hand, with offline processing for when the Wi-Fi drops.',
    imgs: [img('ams1', 'AMS1 compact terminal with a 4-inch screen reading tap, insert or swipe.')],
    inBox: ['AMS1 terminal', 'Charging cable'],
    specs: [
      ['Screen', '4" touch'],
      ['Built-in printer', 'No'],
      ['Operating system', 'Android 10'],
      ['Camera / scanner', 'Camera'],
      ['Connectivity', '—'],
      ['PCI validity', 'April 2031 (v6)'],
      ['Size', '122 × 67 × 18 mm'],
    ],
  },
];

export const countertop: Product[] = [
  {
    id: 'tablet-kit', name: 'Countertop Tablet Kit', price: 899,
    text: 'A smart tablet on its own stand that turns the front counter into a full workstation for the Barber-OS POS.',
    imgs: [
      img('tablet-kit', 'Countertop tablet kit: a tablet showing the Barber-OS calendar on a stand.'),
      img('tablet-kit-2', 'The tablet kit seen from the front.'),
      img('tablet-kit-3', 'The tablet stand from the back.'),
      img('tablet-kit-4', 'Tablet kit dimensions, front and side.'),
    ],
    inBox: ['Smart tablet', 'Tablet stand', 'Power adapter', 'Data cable'],
    specs: [
      ['Operating system', 'Android 13'],
      ['Memory', '8GB LPDDR4X'],
      ['Screen', 'Capacitive multi-touch'],
    ],
    note: 'Receipt printer not included.',
  },
  {
    id: 'cash-drawer', name: 'Cash Drawer', price: 79,
    text: 'A metal-cased drawer with a key lock, so cash stays secure and is tracked against every sale.',
    imgs: [
      img('cash-drawer', 'Black metal cash drawer with a key lock, closed.'),
      img('cash-drawer-2', 'The cash drawer open, showing the note and coin tray.'),
    ],
    inBox: ['Cash drawer', 'Key lock'],
    specs: [
      ['Size', '410 W × 415 D × 100 H mm'],
      ['Tray', 'Plastic cash tray'],
      ['Casing', 'Metal'],
    ],
  },
  {
    id: 'receipt-printer', name: 'Receipt Printer', price: 79,
    text: 'Prints detailed receipts for every client at 250 mm a second, on 80 mm or 58 mm paper.',
    imgs: [
      img('receipt-printer', 'Black Barber-OS receipt printer.'),
      img('receipt-printer-2', 'The receipt printer feeding out a receipt.'),
      img('receipt-printer-3', 'The receipt printer open with a paper roll.'),
    ],
    inBox: ['Receipt printer'],
    specs: [
      ['Print speed', '250 mm/s'],
      ['Connections', 'USB, serial, LAN (Wi-Fi or Bluetooth optional)'],
      ['Paper width', '80 mm or 58 mm'],
      ['Size', '127 × 127 × 127 mm'],
    ],
  },
  {
    id: 'barcode-scanner', name: 'Barcode Scanner And Stand', price: 79,
    text: 'Scan a product to sell it and the stock count updates with it. Works handheld or hands-free on its stand.',
    imgs: [img('barcode-scanner', 'Barcode scanner standing in its charging stand, with a second scanner beside it.')],
    inBox: ['Barcode scanner', 'Scanner stand'],
    specs: [
      ['Reads', 'EAN-13 and UPC barcodes, PDF417 and Data Matrix codes'],
      ['Scan angle', '360° roll, ±60° pitch and skew'],
      ['Wireless range', '2.4G up to 100 m, Bluetooth up to 80 m'],
    ],
  },
];

export const allHardware = [...terminals, ...countertop];
export const money = (n: number) => `$${n.toLocaleString('en-US')}`;
