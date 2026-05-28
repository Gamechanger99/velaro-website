# Handoff — Velaro Catering & Foodtruckservice (Website Redesign)

## Overview
This bundle is the full visual redesign for **velaro-website.netlify.app** — a German food-truck and catering business based in Haldensleben. The redesign aims for a premium "high-end street food meets elegant catering" feel while keeping all existing content, page structure, navigation labels, business hours, contact data, and the Banketmappe wizard functionality 100 % intact. The four pages are:

1. **Startseite** (Home) – `index.html`
2. **Catering** (with interactive Banketmappe) – `catering.html`
3. **Märkte** (Markets) – `maerkte.html`
4. **Kontakt** (Contact) – `kontakt.html`

## About the Design Files
The files in this bundle are **design references created in HTML** — interactive prototypes that demonstrate the intended look, motion, and behaviour. They are **not production code to ship directly.**

The existing codebase is an **Astro** project (see the `website/` folder the user attached during the design conversation). The task is to **port these HTML designs into the Astro codebase**, replacing the styling of the existing `*.astro` page files and components — using Astro's component model, the project's Tailwind setup, and any existing tokens. Keep the existing Astro Content Collection for Märkte (`src/content/maerkte/*.json`) — only the rendering layer changes.

## Fidelity
**High-fidelity.** Colors, spacing, typography, motion, and micro-interactions are all final and meant to be matched closely. Specific values are listed in the *Design Tokens* section.

---

## Pages

### 1 · Startseite (`index.html`)

| Section | Purpose / Layout |
|---|---|
| **Cinematic hero** | Full-viewport (`min-height: 100svh`). Background photo with Ken-Burns animation (`scale(1.06) → scale(1.16)`, 26 s alternate). Two-column grid (`1.3fr 1fr`): left = eyebrow tag + 3-line italic headline ("Frisch gekocht. / Stilvoll serviert. / Unvergesslich.") + paragraph + 2 CTAs. Right = three stat cards (12+ Jahre / 400+ Events / 100 % Regional) in glass cards (`rgba(8,17,29,0.55)` + `backdrop-filter: blur(10px)`). Headline lines reveal with `translateY(110%) → 0` on a 250 ms / 400 ms / 550 ms stagger. Scroll-hint at bottom with vertical line that drips. Heavy left-side darkening overlay (`rgba(8,17,29,0.92)` → `0.55`) so headline always sits on a near-solid background — see notes. |
| **Marquee strip** | Full-bleed band, dark `#08111d`, list of services in italic serif with teal dot separators, scrolls horizontally 38 s linear. Mask-image edges for fade. |
| **Feature cards (2-up)** | Two large hero cards (480 px tall, span half-width) — Catering and Märkte. Each: full-bleed image, dark gradient overlay, "— 01 / 02" small label, italic headline ("Catering & *Buffet*", "Märkte & *Truck*"), short paragraph, "→" link with hover-grow gap. Hover: card lifts 6 px, image scales 1.08, link gap widens to 1.2 rem, link color → accent teal. |
| **About split** | Two-column grid (`1fr 1.2fr`). Left = "Kulinarik mit *Charakter* — seit Tag eins." with body copy and a 2-up `100 % / 2012` stat row. Right = portrait image with floating glass quote card overlapping the bottom ("Ein Catering, das Persönlichkeit hat …"). |
| **Values trio** | Dark band, three cards in equal-width grid, each numbered "— 01 / 02 / 03" with italic accent in the title. Hover: card translates up 4 px, top-border accent line draws in from 0 → 100 % width. |
| **Instagram grid** | 6-column grid. First tile is `span 2 / span 2` (large square). Remaining are 1×1 squares. Hover: image scales 1.08 + dark gradient and IG glyph fade in. Heading "Folgt uns auf *Instagram*." with handle line. |
| **Big CTA band** | Full-bleed image bg with 0.92/0.7 dark overlay. Centered: eyebrow, headline "Lassen Sie uns Ihre Idee *servieren*.", paragraph, two CTAs. |

### 2 · Catering (`catering.html`)

| Section | Purpose / Layout |
|---|---|
| **Page hero** | Dark image bg (`brightness(0.5)`) with bottom fade. Two-column: left headline "Catering & *Buffet*" + lead paragraph + Banketmappe-anchor CTA. Right side = glass card "Im Service enthalten" with 4 check-bullets. |
| **Category cards (4-up flip)** | Grid of 4 cards, 480 px tall, `perspective: 1200px`. Cards: Klassisches Buffet / Grillbuffet / Kleine Speisen / Food Truck. Front face is image card with overlay, "— 01 / 02 / 03 / 04" number, italic accent title, tease paragraph, and "Karte umdrehen" hint with rotating refresh icon. Click flips card 180 ° (0.9 s) revealing list of menu items on a `--bg-card` back face with teal dot bullets and a "← Zurück" button. Tap-anywhere closes. |
| **Pricing tiers (3-up)** | Empfang Light (18 €), Bankett Klassik (42 €, featured), Food Truck Event (28 €). Featured tier has a "Beliebt" pill in accent and a faint teal gradient. Price is large serif italic-feeling. Check-list with teal checkmarks. CTA at bottom. |
| **Banketmappe wizard** | Centered max 900 px card with circular step-number indicator + step label/title + progress bar (6 segments). Steps: Welcome → Kategorie → Eckdaten → Menü → Getränke → Wünsche → Zusammenfassung. Validation between steps. Submit reveals success card. Logic in `assets/banketmappe.js` (must be preserved verbatim — the data structures map to the original site). |

### 3 · Märkte (`maerkte.html`)

| Section | Layout |
|---|---|
| **Page hero** | Two-column. Left headline "Märkte & *Veranstaltungen*". Right = image card 540 px with "Aktuell unterwegs" pulsing badge top-left and a 3-up stats overlay at the bottom (3 Termine / 2 Städte / 10h Service). Parallax on image. |
| **"Offen für alle"** | Split with image right, italic blockquote with left-border accent. |
| **Timeline** | Vertical timeline. Left column = date block (3.5 rem serif day, weekday + month/year). Center line is a faded vertical rule with circular accent-bordered dots; dot scales 1.2 on row hover. Right column = card with type-tag pill, italic title, meta (Uhrzeit + Ort), small address line, and "Auf Karte" pill CTA. Card translates right 6 px on hover. Three example rows render from existing Märkte content. |
| **Map** | Stylized region map: rounded card with abstract SVG road paths, three pin markers (teardrop shape, rotated −45 °, accent fill, dark-blue inner dot). Hover reveals tooltip above. Legend in bottom-left glass card. |
| **CTA card** | Teal-tinted gradient card "Neue Termine, *frische* Gerichte." with Instagram + Kontakt buttons. |

### 4 · Kontakt (`kontakt.html`)

| Section | Layout |
|---|---|
| **Page hero** | Headline "Kontakt *aufnehmen*." + lead. Right side = 2×2 grid of stat tiles (`< 24h` Antwortzeit / `100 %` Persönlich / `DE` Region / `7 Tage` Eventfähigkeit). Soft teal glow blur in background. |
| **Form card** | Large card on `--bg-card`. Fields: Name + Email row, Telefon (optional pill), Anliegen textarea. Inputs use `--bg-deep` fill, `--border` 1 px outline, teal 4 px focus ring (`box-shadow: 0 0 0 4px var(--accent-glow)`). Privacy line at bottom + primary submit. Success state replaces form with check + italic headline. |
| **Sidebar** | Stack: 1) animated dot "antworten in **< 24 h**" callout. 2) Three contact cards (Email, Telefon, Instagram) — circular accent icon left, label + value, arrow right. Card translates right 4 px on hover; icon swap to filled accent. 3) Hours card with dotted-line leader between day and time. 4) Address card with teal radial glow + "Auf Karte ansehen" link. |

---

## Interactions & Behavior

| Pattern | Details |
|---|---|
| **Scroll-reveal** | `.reveal` fades + translates Y(28 px) over 900 ms with cubic-bezier `.2,.7,.2,1`. `.reveal-stagger > *` repeats with 90 ms stagger up to 6 children. Triggered by `IntersectionObserver` (threshold 0.12, rootMargin -40 px bottom), unobserves once shown. See `assets/script.js`. |
| **Parallax** | `.parallax` containers transform their inner `<img>` based on viewport midpoint distance, max ±28 px. RAF-throttled. |
| **Header scroll state** | Adds `.scrolled` past 24 px → adds blurred background, shrinks padding, soft bottom border. |
| **Nav underline** | Each `.nav-link::before` is a 1 px accent line that `scaleX(0) → scaleX(1)` from left on hover, 280 ms. Active state stays at 1. |
| **Hero headline** | Each line wrapped in `<span class="line"><span>…</span></span>`, inner span animates `translateY(110%) → 0` over 1.1 s with delays 250 ms / 400 ms / 550 ms; outer `.line` is `overflow:hidden`. |
| **Marquee** | `transform: translateX(0) → -50%` 38 s linear infinite. Track is duplicated; mask-image fades edges. |
| **Catering flip cards** | `.cat-card.flipped .cat-inner { transform: rotateY(180deg); }` over 900 ms. Click anywhere on card toggles; click on `.back-btn` removes. Faces use `backface-visibility: hidden`. |
| **Banketmappe** | 6-step wizard with `IntersectionObserver`-style validation (in-step `alert` if invalid). Maintains `S` state object. Submit hides card and shows success block. Code is self-contained vanilla JS in `assets/banketmappe.js` and is the single source of truth for the menu / category / drink data. |
| **Form** | Front-end validation only; on submit hides form and shows success. (Wire to real endpoint in production.) |
| **Mobile nav** | Hamburger toggles `.is-open` on `.mobile-nav` (positioned `absolute` below header). Closes on any link click. Activates ≤ 860 px. |
| **`prefers-reduced-motion`** | All animations / transitions / reveals disabled via global override at end of `assets/style.css`. |

---

## State management
- **Banketmappe** (`assets/banketmappe.js`): single in-memory `S` object — `{ step, category, persons, date, location, name, email, phone, menuSel, drink, wishes }`. No persistence in the prototype; in production, post the final object to your backend on the submit step.
- **Contact form**: no state beyond the success toggle. In production, post to backend / email service.
- **Header scroll**: derived from `window.scrollY`.
- **Hamburger / flip-card / wizard step**: DOM-class toggles, no global store needed.

No data fetching required in the prototypes. In the Astro target codebase, Märkte content is sourced from `src/content/maerkte/*.json` Content Collection — keep that source of truth and only update the rendering template.

---

## Design Tokens (CSS custom properties in `assets/style.css`)

### Color — backgrounds
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0e1827` | Body background |
| `--bg-deep` | `#08111d` | Footer, value section, deeper bands |
| `--bg-card` | `#182a40` | Card surface |
| `--bg-card-2` | `#1f3550` | Hover / featured card surface |
| `--bg-nav` | `#0b1421` | Header on scrolled state |

### Color — accents & lines
| Token | Hex | Use |
|---|---|---|
| `--accent` | `#5ac3cf` | Primary teal (CTAs, italics, lines) |
| `--accent-deep` | `#488d94` | Secondary teal (filled progress) |
| `--accent-darker` | `#3a7880` | Reserved |
| `--accent-glow` | `rgba(90,195,207,0.22)` | Glow shadows + focus rings |
| `--cream` | `#f3ebdc` | Warm hover state on primary CTA |
| `--border` | `#233a55` | Solid borders |
| `--border-soft` | `rgba(255,255,255,0.06)` | Hairlines |

### Color — text
| Token | Hex | Use |
|---|---|---|
| `--text` | `#f6f2ea` | Primary text |
| `--text-2` | `#c9d1dc` | Body / secondary |
| `--text-mute` | `#8693a4` | Labels, captions |

### Typography
- **Serif (headlines):** Cormorant Garamond — weights 400/500/600/700, italics 400/500/600/700. Used for all `h1–h4`, large numerals, italic accent words.
- **Sans (UI / body):** Montserrat — weights 300/400/500/600/700.
- **Loaded via** Google Fonts URL at top of `assets/style.css`.
- **Sizes (clamp):**
  - h1 `clamp(3rem, 7vw, 6.25rem)`; hero variant up to `clamp(3.5rem, 9vw, 8rem)`
  - h2 `clamp(2.25rem, 4.5vw, 3.75rem)`
  - h3 `clamp(1.4rem, 2.2vw, 1.8rem)`
  - Body `1rem / 1.65`; lead `1.05rem / 1.75`
- **Eyebrow style:** Montserrat 600, 0.72 rem, `letter-spacing: 0.22em`, uppercase, accent color, with a 28 px-wide 1 px hairline before the text.
- **Italic accents:** every page uses isolated `<span class="it">word</span>` in italic teal — e.g. *Buffet*, *Veranstaltungen*, *aufnehmen*, *Charakter*. Apply sparingly to elevate single words.

### Spacing & radius
- Section padding: `clamp(4rem, 8vw, 8rem)` vertical, `clamp(1.25rem, 4vw, 2.5rem)` horizontal container padding
- Container max-widths: `--max: 1240px`, `--max-narrow: 980px`
- Radii: `--r-sm: 8px`, `--r: 14px`, `--r-lg: 22px`. Pills: `999px`

### Motion
- Default ease `cubic-bezier(.2, .7, .2, 1)`
- Default transition `220 ms`; slow `600 ms`; reveals `900 ms`
- Ken Burns 26 s alternate; marquee 38 s linear; reduce-motion respected globally

### Shadows
- Card hover lift: `0 18px 40px -10px rgba(243,235,220,0.25)` (cream CTA) / `0 18px 40px -10px rgba(0,0,0,0.4)` (cards)
- Pin (markets): `0 8px 24px rgba(90,195,207,0.4)`
- Focus ring: `0 0 0 4px var(--accent-glow)` (forms) / `0 0 0 3px var(--accent-glow)` (Banketmappe inputs)

---

## Assets

| File | Source | Notes |
|---|---|---|
| `assets/logo.svg` | Existing — copied from `website/public/logo.svg` | Used in header + footer. `mix-blend-mode: screen` is currently applied so the logo prints in cream on dark; if you ship a single-color version, drop that filter. |
| `assets/buffet-hero.jpeg` | Existing — copied from `website/public/images/buffet-hero.jpeg` | Used as Startseite hero background. Other photography in the prototype uses **Unsplash placeholder URLs** for category / Instagram / market images — these MUST be replaced with real Velaro photography before launch. List of placeholder URLs is inlined in the HTML files; grep for `images.unsplash.com`. |
| `assets/besteck.png`, `assets/imbiss-stand.png` | Existing icon set | Not currently used in the redesign but copied from `website/public/icons` for parity. |
| Icons | Inline SVG (Lucide-style 24×24 stroke) | All icons are inline in the HTML — no icon font. Stroke-width 2. |

---

## Files in this bundle

```
design_handoff_velaro_redesign/
├── README.md             ← this document
├── index.html            ← Startseite prototype
├── catering.html         ← Catering page + Banketmappe wizard
├── maerkte.html          ← Märkte page (timeline + map)
├── kontakt.html          ← Kontakt page (form + sidebar)
└── assets/
    ├── style.css         ← Design system + all shared styles
    ├── script.js         ← Header scroll, mobile nav, scroll-reveal, parallax
    ├── partials.js       ← Inline header + footer markup injected at runtime
    ├── banketmappe.js    ← 6-step wizard logic + menu / category / drink data
    ├── logo.svg
    ├── buffet-hero.jpeg
    ├── besteck.png
    └── imbiss-stand.png
```

---

## Implementation notes for the Astro codebase

- **Replace `partials.js`** with the existing `<Header />` and `<Footer />` Astro components — copy the markup from `partials.js` and adapt to Astro syntax. Active-state logic should switch from `location.pathname` to `Astro.url.pathname`.
- **Move `style.css` content** into either Astro's global stylesheet (`src/styles/global.css`) or break apart into component-scoped `<style>` blocks. The Google Fonts `@import` at the top should stay in the global stylesheet (or move into `<link>` tags in the Layout).
- **Banketmappe** can stay as vanilla JS for now — drop `banketmappe.js` into `public/` and load with a `<script>` tag inside the Catering page. If you want to migrate to a framework, the `S` object plus the `MENU` / `CATS` / `DRINKS` constants are the entire data model.
- **Märkte** rendering should iterate over the existing Content Collection. The timeline row markup is roughly:
  ```astro
  ---
  import { getCollection } from 'astro:content';
  const markets = await getCollection('maerkte');
  ---
  {markets.map(m => <TimelineRow entry={m} />)}
  ```
- **Tailwind**: if the project uses Tailwind, the existing CSS custom properties can be exposed via `tailwind.config.js → theme.extend.colors` so utilities like `text-accent` map back to `--accent`.
- **Replace Unsplash placeholder URLs** — grep `images.unsplash.com` across all four HTML files and swap for production photography before launching.
- **Forms** are front-end-only mocks. Wire `<form>` submissions on Catering (Banketmappe step 6) and Kontakt to a real backend (Astro endpoint, Netlify Forms, or third-party).

---

## Hand-off checklist for the developer

- [ ] Replace placeholder Unsplash imagery with Velaro photography
- [ ] Wire contact form + Banketmappe submission to backend / email
- [ ] Add Impressum + Datenschutz pages and link from footer
- [ ] Verify nav active-state logic uses Astro routing, not `location.pathname`
- [ ] Test mobile breakpoints (≤ 860 px and ≤ 600 px have layout adjustments)
- [ ] Confirm `prefers-reduced-motion` behaviour in QA
- [ ] Lighthouse / CLS check after real images are in (hero Ken Burns + parallax can shift layout if image dimensions change)
