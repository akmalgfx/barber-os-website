# Barber-OS website design system

The locked style for barber-os.com, recorded from the shipped homepage (`src/pages/index.astro`). Every new page inherits it. Tokens live in `src/styles/global.css`.

## Principles

- **Clean, minimal, modern.** Generous space, few colours, one typeface. No decorative motion, metaphors or gimmick interactions.
- **The product is the picture.** Features are shown as working recreations of the real Barber-OS UI, never as illustrations, icon grids or stock imagery.
- **Honest content.** Real prices, real testimonials, demo data labelled "Sample". No invented stats.

## Colour

Website palette (from the original barber-os.com):

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F8F8F8` | Page ground |
| `--surface` | `#FFFFFF` | Feature cards, plans, FAQ items, nav sheet |
| `--ink` | `#0A0A0A` | Headings, primary text, the closing CTA band |
| `--ink-2` / `--ink-3` | `#4A4A4F` / `#6E6E73` | Body copy / secondary text |
| `--line` / `--line-2` | `#E7E7E9` / `#D9D9DC` | Hairlines, ghost-button outlines |
| `--blue` | `#126DFB` (hover `#0A5FE4`) | Primary actions, links, feature tags, active state |
| `--blue-soft` | `#EAF2FF` | "Most Popular" pill |
| `--cyan` | `#1EBBEC` | Logo stripes and small accents only |

Product palette (only inside recreated app UIs, sampled from the app):

| Token | Value | Use |
|---|---|---|
| `--app` | `#003242` | App bar, app primary buttons, active segment |
| `--app-pos` | `#004230` | POS header and Checkout button |
| `--app-mint` | `#E6F6F3` | Active sidebar item |
| `--appt` | `#C1ECF9` | Calendar appointment blocks, scheduled shifts |
| `--tile-service` / `--tile-product` | `#8445BC` / `#4CC3E6` | POS tile edges |
| `--warn-bg` | `#FDEBA0` | Cancellation-policy box |

Blue is for actions. Never use the app palette for website chrome.

## Typography

Inter variable (self-hosted, `public/fonts/inter-var*.woff2`) with `font-optical-sizing: auto`, which renders Inter Display at headline sizes.

| Style | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| `.h1` | clamp(2.75rem, 6.4vw, 5.25rem) | 650 | -0.045em | 1.0 |
| `.h2` | clamp(2rem, 3.6vw, 3.25rem) | 650 | -0.035em | 1.06 |
| `.h3` | 1.25rem | 600 | -0.015em | 1.25 |
| `.lede` | clamp(1.0625rem, 1.3vw, 1.25rem) | 400 | normal | 1.55 |
| body | 1.0625rem | 400 | normal | 1.6 |
| feature tag | 0.9375rem | 600 | normal, blue | — |

Every heading and label (h1–h3, feature tags, menu group titles, menu items, plan names, story titles) uses Title Case, matching the live site: capitalise every word, including short ones ("Making Barbering Better For Everyone"). Hyphenated words capitalise each part ("Walk-In", "Lightning-Fast"). Headings have no final full stop. A two-part heading may keep its middle full stop ("Your Shop. Your App"). Body copy and ledes stay in sentence case. App UIs use 12–14px Inter, matching the product.

## Layout

- Container: max 1200px with a `clamp(20px, 4vw, 48px)` gutter.
- Section padding: `clamp(80px, 11vw, 140px)` top and bottom.
- Section heads: centred (`.section-head--center`) for page-level sections, left-aligned inside feature rows.
- **Feature row** (`.feature`): a glass card. It's a translucent white gradient with `backdrop-filter: blur(22px) saturate(1.6)`, an inner white hairline and top highlight, a 7% frosted grain (`--grain`) and a soft blue-tinted drop shadow, at a 28px radius. A pointer-following light (`--mx`/`--my`) shows on hover for fine pointers only. Cards sit `clamp(56px, 8vw, 112px)` apart over the features colour field: slow-drifting radial gradients in blue, cyan and a little violet, which the glass needs in order to read. Copy (5fr) sits beside a stage (7fr). Alternate sides with `.feature--flip`. Use `.feature--wide` for table-heavy UIs (inventory, schedules): the heading and lede sit in two columns above a full-width stage.
- **Stage** (`.feature__stage`): `--bg` panel, 20px radius, holding the app UI, plus a small `.demo-note` caption.
- Rows collapse to one column under 960px.

## Components

- **Buttons:** 50px pill (`.btn`), blue fill; `.btn--ghost` is white with a hairline; `.btn--sm` is 40px. Press scales to 0.97.
- **Badge:** white pill with a blue "New" chip, used for announcements (Clip AI).
- **Checks list:** a blue check icon with short benefit lines; three per feature.
- **Icons:** `src/components/ui/Icon.astro`, outline, 1.7 stroke, round joins. Never emoji or unicode glyphs.
- **App chrome** (`.app`, `.app__bar`, `.app-btn`): white, 14px radius, soft shadow, 40px `#003242` bar with the B mark (`/img/bos-mark-light.png`) and chat, bell and help icons.
- **Pricing:** `PlanCards.astro` (data in `src/data/plans.ts`) is shared by the homepage and `/pricing`. The cards are glass, with the lead plan wrapped in a solid blue frame carrying a "Most Popular" banner and a green trial pill. `/pricing` adds a feature comparison grouped into glass tables. Plan names stay pinned in a sticky glass header under the nav. Marks are a blue ringed tick (included), an orange ringed "!" (limited) and a grey × (not included), and add-on prices span the Solo and Elite columns.
- **FAQ:** white rounded `<details>` items; a plus icon rotates to ×.
- **Closing CTA:** black rounded band with a blue primary button and an outlined secondary.
- **Nav:** sticky, translucent with a blur, and a hairline once scrolled. Order: logo; Features ▾, Pricing, POS Hardware, App Download, Contact; blue "Get Started"; outlined account button.
- **Mega menu:** the Features dropdown has four columns (Scheduling & Payments, Your Business, Marketing & Automations, Client Relationships) driven by `src/data/features.ts`. Each item is a blue-tinted icon tile, a label and an optional NEW (green) or HOT (orange outline) tag, linking to `/features/<slug>`. It opens on click or on mouse hover after 80ms and closes 180ms after the pointer leaves, or on Escape or an outside click. It grows from the top edge (opacity, translateY(-6px), scale(0.985), 200–220ms open, 150ms close) and the columns stagger 35ms only when opening from closed. The panel is solid white, and the nav drops its blur while the menu is open. On mobile, the sheet has a collapsible Features group.

## Motion

Easing: `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)` for entering and feedback, `--ease-in-out` `cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement such as the sliding tab pill. UI transitions stay under 300ms; only the one-off page entrance runs longer.

- **Hero opening:** the copy rises out of a 6px blur in sequence (60ms stagger), then the calendar settles (scale 0.97 to 1), the appointments pop in with a 45ms stagger, the now-line draws, and a new booking lands with one ping.
- **Feature cards:** the card rises out of a blur once, then its copy settles line by line and the product UI follows.
- **Numbers that change** (POS total, stock, team hours) get a 240ms settle via `src/data/tick.ts`.
- **Press feedback:** every pressable element scales to 0.97 over 160ms. Hover effects are gated by `(hover: hover) and (pointer: fine)`.
- **Disclosure:** FAQ items animate their height where `interpolate-size` is supported.

- In-UI feedback only: step slides, message rise, toast drop, row highlight. Nothing loops or decorates.
- **Smooth scroll:** Lenis (`src/data/smooth.ts`, loaded in `Base.astro`) gives mouse-wheel and trackpad scrolling a soft glide (lerp 0.1) on every page. In-page links glide to their target and land 88px down, clear of the sticky nav. Touch keeps native scrolling. Areas with their own scroll (Clip AI chat, mobile menu, schedule table, form fields) opt out, the page freezes behind an open mobile menu, and smooth scroll is off for reduced motion.
- **Spatial consistency:** things leave the way they came. The mobile sheet and the POS tap screen use transitions with `@starting-style` (not keyframes), so they exit along their entry path and reverse mid-flight from where they are. Inventory toasts lift back out before removal. Booking steps enter from the right going forward and from the left on Back. The mega menu grows from the Features trigger (`--ox`), not the panel's centre.
- `prefers-reduced-motion` keeps short opacity fades and removes all movement, blur and the drifting field.
- `prefers-reduced-transparency` turns glass (feature cards, `.glass`, plans, nav, pricing header, app cards) solid with no blur; `prefers-contrast: more` adds a defined `--ink-3` edge.
- Hover styles are always gated by `(hover: hover) and (pointer: fine)` so taps never leave a sticky hover.

## Imagery

Only real Barber-OS material: the logo, the B mark, the hardware render on its own `#F7F7F7` ground, and product thumbnails cropped from app screenshots. Every raster carries its provenance (`impeccable embed-prompt --scan public/img`).

## Inner pages

Every inner page (`/pricing`, `/app-download`, `/contact-us`, `/get-started`, `/login`) follows the same structure:

- **Hero** (`.page-hero`): a soft colour field behind it, a blue pill label, a centred Title Case h1 and a lede, rising in sequence on load.
- **Content:** glass panels (`.glass`) for cards and forms.
- **Footer:** the shared footer.

Shared pieces:

- **Links:** all outbound links (plan sign-ups, admin and POS login, app stores, demo calendar, support portal) live in `src/data/site.ts`.
- **Forms** (`.form`, `.field`, handled by `src/data/forms.ts`):
  - Validation messages appear inline.
  - A hidden honeypot field filters out spam.
  - Forms post JSON to `FORM_ENDPOINTS`. If an endpoint is empty, the form says it isn't connected rather than pretending to send.
- **Device images:** shown whole at fixed heights. Never crop a phone to its notch.
- **App cards** (`src/components/AppCard.astro`): a glass card with the device floating in an inset stage, an accent glow (`--accent`, RGB channels) and a role chip, then the B-mark tile, name and one line of copy. Actions go in the slot. `/app-download` uses it with glass store buttons. `/login` uses it for Admin (blue) and POS (green), with a solid accent login button beside a glass "Get the App" button.
