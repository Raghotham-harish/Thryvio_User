---
name: Executive Kinetic Editorial
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002116'
  on-tertiary-container: '#009671'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#59fdc8'
  tertiary-fixed-dim: '#2fe0ad'
  on-tertiary-fixed: '#002116'
  on-tertiary-fixed-variant: '#00513c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system positions itself at the intersection of elite credentialed executive mentorship and high-velocity digital talent acquisition. The brand personality is authoritative, rigorously professional, discerning, and empowering. It targets mid-to-senior executives, transitioning high-growth operators, founders, and credentialed coaching professionals who expect academic legitimacy without sacrificing modern, streamlined software performance.

The visual style blends **Corporate Editorial** with **High-Utility Contemporary SaaS**. It takes the commanding typographical authority and fluid calligraphic underlines of accredited global coaching institutions, layered onto the crisp structured layouts, quick-filter bars, verified company badges, and modular booking cards seen in elite career accelerators. The UI conveys instant credibility, academic rigor, and swift transactional clarity through generous whitespace, razor-precise border contours, and deeply saturated oceanic backdrops.

## Colors
The palette balances prestige, cognitive clarity, and conversion vitality:

- **Primary (`#0A192F` - Deep Abyssal Navy):** Serves as the anchor for supreme authority, hero backgrounds, primary text hierarchy, footer foundations, and executive headers. It replaces harsh absolute blacks with an ink-like oceanic depth.
- **Secondary (`#2563EB` - Radiant Royal Blue):** The interactive engine. Powers primary action triggers, directional links, focus states, selected tab pill fills, and visual progress indicators.
- **Tertiary (`#1DD7A5` - Vibrant Mint):** The accent of modern innovation and forward momentum. Reserved for special highlights, interactive focal points, and energetic conversion badges.
- **Neutral Surface (`#F8FAFC` - Crisp Slate Cream):** Grounding canvas tone that provides a softer, glare-free reading experience compared to pure white, allowing elevated card surfaces (`#FFFFFF`) to float effortlessly.
- **System Semantic Emerald (`#10B981`):** Applied exclusively to live status tokens, real-time availability badges, and verified credential tags.

## Typography
The system employs an intentional pairing: **Newsreader** delivers the intellectual gravitas and academic distinction of established global coaching bodies, while **Plus Jakarta Sans** provides pristine legibility, balanced geometry, and friendly digital ergonomics for high-density directory parsing.

- **Editorial Emphasis:** Key display headings use italicized Newsreader spans with subtle, custom svg hand-drawn underlines (`border-b-2` wave or mint stroke) to draw eyes to transformative action words like *"Forward"* or *"You Wish You Had"*.
- **Data & Filters:** Metadata, metrics, pricing, tags, and company badges default strictly to Plus Jakarta Sans at medium-to-bold weights to guarantee readability across small dimensions.

## Layout & Spacing
The layout follows a 12-column adaptive fluid grid engineered for responsive directory browsing, with max-width constrained to `1280px` for optimal reading scan lines.

- **Desktop (1024px+):** 12 columns, 1.5rem (`gutter`) gutters, 3rem (`margin`) canvas margins. Search and multi-tier filters sit docked at top in a persistent horizontal surface container, while directory listings unfold in balanced 3-column card configurations or split 4/8 column faceted navigation layouts.
- **Tablet (768px - 1023px):** 8 columns, 1.25rem gutters, 2rem margins. The directory shifts into a responsive 2-column card arrangement.
- **Mobile (Below 768px):** 4 columns, 1rem (`gutter-mobile`) gutters, 1.25rem (`margin-mobile`) canvas margins. Filter matrices compress into a full-width bottom sheet or horizontal scrolling pill carousel. Component spacing strictly adheres to 4px base increments.

## Elevation & Depth
Depth is rendered through tonal layering paired with soft, tinted ambient shadows rather than stark structural outlines.

- **Level 0 (Flat Ground):** `#F8FAFC` base page canvas.
- **Level 1 (Card & Module Resting):** Pure `#FFFFFF` background with a subtle border tint (`rgba(15, 23, 42, 0.08)`) and ambient shadow: `0 4px 20px -2px rgba(10, 25, 47, 0.04), 0 2px 6px -1px rgba(10, 25, 47, 0.02)`.
- **Level 2 (Active Hover & Filter Bars):** Raised elevation for hover states on mentor cards: `0 12px 32px -4px rgba(10, 25, 47, 0.08), 0 4px 12px -2px rgba(10, 25, 47, 0.04)`, translated -2px on the Y-axis.
- **Level 3 (Modals, Overlays, and Booking Drawers):** `0 24px 48px -12px rgba(10, 25, 47, 0.18)` accompanied by a backdrop blur (`backdrop-filter: blur(8px)`) over a deep translucent navy scrim (`rgba(10, 25, 47, 0.6)`).

## Shapes
The design adopts a refined, balanced **Rounded** geometric rhythm (`roundedness: 2`). Interactive controls and content surfaces convey approachability while maintaining disciplined architectural rigor.

- **Cards and Containers:** Rounded with `1rem` (16px) corners (`rounded-lg`) for a soft, premium presentation.
- **Buttons, Form Inputs, and Select Drawers:** Formed with `0.5rem` (8px) corners (`rounded-md`) to ensure crisp alignment and tactile click surfaces.
- **Chips, Category Tags, and Availability Pills:** Shaped as full pill capsules (`9999px` radius) to signify categorical interactivity and real-time state distinction.

## Components

### Buttons
- **Primary:** Radiant royal blue (`#2563EB`) background, white text, bold weight, 8px corner radius. Elevated with an ambient blue shadow (`rgba(37, 99, 235, 0.25)`). Hover state darkens smoothly to `#1D4ED8`.
- **Secondary (Outline / White):** High-grade pure white background with slate border (`#E2E8F0`), primary navy text (`#0A192F`). On hover, background shifts to `#F1F5F9` with refined border engagement.
- **Editorial Action:** Deep Abyssal Navy (`#0A192F`) fill with vibrant mint hover transitions, used for premier booking calls-to-action and institutional certification signups.

### Chips & Badges
- **Availability Pill:** Emerald green pill with soft background (`#ECFDF5`), bold emerald text (`#059669`), and an animated emerald pulse dot indicator signaling active booking capacity.
- **Company Affiliation Badge:** White capsule with light outline (`#E2E8F0`), displaying company logo/text paired with verified checkmarks (e.g., Google, Microsoft, Meta).
- **Skill & Domain Chips:** Soft muted slate background (`#F1F5F9`), deep navy label (`#334155`), transitioning to royal blue outline upon active filtering.

### Mentor Cards
- **Structure:** Split two-zone card layout. Top zone features coach avatar, circular corporate credentials, rating score in vibrant mint (`#1DD7A5`), and real-time availability banner.
- **Body Zone:** Executive headline in Newsreader medium, current title and company badge, quick metric pills (e.g., *10+ Yrs Exp*, *120+ Mentored*), pricing anchor callout (*Starts at $X*), and dual-action triggers (*View Profile* outline, *Book Intro Call* solid royal blue).

### Input Fields & Multi-Tier Filter Bar
- **Search Console:** Elevated, pill or rounded-lg search field with inset iconography, subtle gray placeholder typography, and instantaneous keyboard shortcut hinting.
- **Dropdown Filters:** Clean white selects with chevron indicators, highlighting active selection counts via small royal blue numerical badges.

### Checkboxes & Radio Buttons
- Precision 18px boxes with 4px border radius. When checked, filled with royal blue (`#2563EB`) displaying a crisp white micro checkmark. Soft 3px radiant focus ring on keyboard navigation.

### Metric Callout Tiles
- Institutional trust blocks leveraging deep navy or subtle glassmorphic slate backgrounds, displaying large metric numerals paired with vibrant mint-tinted accents and clean editorial micro-copy.