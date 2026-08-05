---
name: Digital Craftsman Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bdc9c6'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#879391'
  outline-variant: '#3d4947'
  surface-tint: '#72d7cb'
  primary: '#b5fff4'
  on-primary: '#003732'
  primary-container: '#81e6d9'
  on-primary-container: '#00675f'
  inverse-primary: '#006a62'
  secondary: '#bdc7dc'
  on-secondary: '#273141'
  secondary-container: '#3d4759'
  on-secondary-container: '#abb5cb'
  tertiary: '#ffefdc'
  on-tertiary: '#432c00'
  tertiary-container: '#ffcd7e'
  on-tertiary-container: '#795510'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8ff4e7'
  primary-fixed-dim: '#72d7cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d9e3f9'
  secondary-fixed-dim: '#bdc7dc'
  on-secondary-fixed: '#121c2c'
  on-secondary-fixed-variant: '#3d4759'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#efbf71'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 768px
  gutter: 1.5rem
  margin-mobile: 1rem
  section-gap: 4rem
---

## Brand & Style

This design system embodies the "Digital Craftsman" aesthetic—a blend of high-precision technical utility and warm, personal intentionality. It is designed for a personal portfolio portal that feels like a curated workshop.

The visual direction is **Minimalism** meets **AMOLED Noir**. By utilizing a true black background, the interface recedes, allowing project work and the vibrant teal accents to pop with high-fidelity clarity. The mood is professional yet intimate, prioritizing white space and "breathing room" to signify quality over quantity. It evokes a sense of calm, focused expertise, drawing inspiration from the tactile nature of physical tools translated into a digital space.

## Colors

The palette is anchored in a true **AMOLED Black (#000000)** base to maximize contrast and reduce visual noise. 

- **Primary:** A vibrant Mint/Teal (#81E6D9) acts as the single point of energy. It is used sparingly for interactive elements, links, and highlights.
- **Secondary:** A deep Charcoal (#2D3748) provides a bridge between the black background and UI elements.
- **Surface:** Components utilize a slightly lifted #1A1A1A to create subtle separation without breaking the dark immersion.
- **Text:** High-contrast white for headings, with muted grays for secondary information to establish a clear reading hierarchy.

## Typography

The typography strategy balances modern efficiency with a "hacker-craftsman" vibe.

- **Headings:** Use **Inter**. It provides a clean, neutral, and architectural feel. Tracking is tightened slightly for larger display sizes to create a more impactful, "locked-in" appearance.
- **Body:** Use **JetBrains Mono**. This choice reinforces the "craftsman" narrative, referencing the tools of digital creation (code) while remaining highly legible for long-form reading.
- **Hierarchy:** Use bold weight for section headers and lighter weights with generous line height for body text to ensure readability against the black background.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centered on a narrow 768px reading track to mimic the feel of a high-end editorial or specialized journal.

- **Rhythm:** A strict 8px base unit drives all padding and margins.
- **Sectioning:** Large vertical gaps (64px+) are used to separate major content areas, creating a sense of "gallery" pacing.
- **Responsive:** On mobile, margins shrink to 16px, and the single-column layout persists, ensuring the project cards remain the focal point. 
- **Alignment:** All text is left-aligned to maintain a strong vertical axis, reinforcing the clean, systematic look.

## Elevation & Depth

In an AMOLED environment, traditional shadows are ineffective. This design system uses **Tonal Layers** and **Low-contrast outlines** to communicate depth.

- **Layers:** The background is #000000. Interactive cards use a #1A1A1A surface color to appear "raised."
- **Borders:** Subtle, 1px solid borders using the Secondary color (#2D3748) define component boundaries. 
- **Hover States:** Instead of shadows, interactive elements use a subtle "glow" effect—a thin Primary color border or a faint teal backdrop blur—to indicate focus.

## Shapes

The shape language is **Pill-shaped (1.0rem)**. This generous rounding provides a polished, hardware-inspired aesthetic that softens the high-contrast AMOLED background. It suggests precision mixed with accessibility, moving away from a strictly brutalist feel.

- **Profiles:** The primary profile picture from the image should be contained in a circular mask (pill-shaped) to act as a soft organic counterpoint to the structured grid.
- **Buttons and Cards:** Use deep rounding (16px/1rem) to match the cards and input fields, maintaining a consistent fluid language.

## Components

- **Project Cards:** The core component. Features a #1A1A1A background, a 1px border (#2D3748), and a 200px height image area. Titles use Inter Semi-bold; descriptions use JetBrains Mono. All corners are heavily rounded (1rem).
- **Primary Buttons:** Solid Teal (#81E6D9) background with black text. Pill-shaped rounding. No shadows. Use a scale-up transition (1.02x) on hover.
- **Ghost Buttons:** Transparent background with a 1px Teal border. Used for secondary actions like "View Source."
- **Profile Header:** A dedicated section featuring the profile image (circular), the user's name in Headline-XL, and a short bio in Mono.
- **Links:** Inline links are Teal with a subtle underline that expands on hover.
- **Chips/Badges:** Small, dark gray (#2D3748) backgrounds with Teal text in `label-caps` for tech stack tags (e.g., "React", "TypeScript"). These are fully pill-shaped.