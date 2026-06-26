---
name: Axonic Gold
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#fff9ef'
  on-secondary: '#3a3000'
  secondary-container: '#ffdb3c'
  on-secondary-container: '#725f00'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a premium AI landscape, merging the precision of high-technology with the timeless luxury of metallic gold. It targets an elite audience that values both cutting-edge performance and sophisticated aesthetics. 

The visual style is a fusion of **Dark Minimalism** and **Glassmorphism**. It utilizes pure black voids to create depth, punctuated by vibrant gold orbits and subtle light leaks that mirror the provided star-like logo. The interface should feel like a high-end physical instrument—tactile, responsive, and authoritative. Every interaction is designed to evoke a sense of "intelligence in the dark," where the AI provides clarity through glowing highlights and translucent surfaces.

## Colors

This design system is strictly **Dark Mode**. The palette is centered around deep charcoal and pure blacks to create an infinite canvas, allowing the metallic gold accents to function as primary sources of light and focus.

- **Primary Gold (#D4AF37):** Used for primary calls to action, active states, and structural borders. This is a muted, "old money" gold that feels stable and premium.
- **Vibrant Gold (#FFD700):** Reserved for highlights, hover states, and critical information markers to ensure high contrast against the dark base.
- **Background Tiers:** 
  - Base: `#000000` (Pure Black) for the deepest layer.
  - Surface: `#121212` (Deep Charcoal) for cards and containers.
  - Overlay: `#1E1E1E` for elevated modals and menus.

## Typography

The typography strategy balances the bold, geometric presence of **Montserrat** for headings with the utilitarian clarity of **Inter** for data-heavy body content. 

Headlines should utilize tight letter-spacing to feel more like a cohesive brand mark. For labels and metadata, the design system employs all-caps with generous tracking (letter-spacing) to evoke a premium, architectural feel. On mobile, display sizes are aggressively scaled down to maintain readability and avoid excessive line-breaking in portrait orientations.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a sense of controlled, editorial composition. A 12-column grid is used with generous margins to create "breathing room" around the gold-accented elements.

- **Desktop:** 12 columns, 24px gutters, 64px side margins.
- **Tablet:** 8 columns, 16px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 20px side margins.

Vertical rhythm is strictly maintained using multiples of 8px. Components are often center-aligned or use asymmetrical offsets to create a modern, tech-forward dynamic that avoids the staleness of traditional corporate layouts.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and **Subtle Gold Glows** rather than traditional shadows. 

1. **Backdrop Blurs:** Elevated surfaces (cards, sidebars) use a `20px` to `40px` blur with a semi-transparent charcoal fill (`rgba(30, 30, 30, 0.7)`).
2. **Inner Glow:** The highest elevation elements feature a 1px inner border in Primary Gold at 20% opacity to simulate light catching the edge of a glass pane.
3. **Orbital Glow:** Background elements may feature soft, large-radius radial gradients in Gold (`#D4AF37`) at very low opacities (5-10%) to create a sense of light emanating from behind the UI layers, echoing the star logo.

## Shapes

The design system uses **Soft (1)** roundedness. While the logo features organic, sweeping curves, the UI components remain grounded with tight `0.25rem` corners to maintain a professional, technological edge. 

Buttons and input fields use the base roundedness, while large containers and modals scale up to `rounded-lg` (0.5rem) to soften the overall composition without becoming "bubbly." The juxtaposition of sharp UI containers against the fluid orbital logo creates a distinctive visual tension.

## Components

- **Buttons:** Primary buttons feature a solid Primary Gold (#D4AF37) fill with black Montserrat text. Secondary buttons use a ghost style with a gold border and a subtle gold glow on hover.
- **Input Fields:** Dark charcoal backgrounds with a 1px bottom border in Primary Gold. The border should "ignite" (increase in brightness and thickness) when the field is focused.
- **Cards:** Glassmorphic surfaces with a 1px "glass edge" border. Content inside cards should be strictly aligned to a sub-grid to ensure the minimal aesthetic remains tidy.
- **Chips/Badges:** Small, all-caps labels with Primary Gold text and a faint gold background tint. Use these for categorizing AI model types or status indicators.
- **Progress Indicators:** Linear bars or circular rings using a gradient from #D4AF37 to #FFD700, simulating the "orbital" light trail from the brand's logo.