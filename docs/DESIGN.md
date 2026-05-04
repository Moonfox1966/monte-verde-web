---
name: Monte Verde Institutional
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424843'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#737973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4d6355'
  primary: '#051a0f'
  on-primary: '#ffffff'
  primary-container: '#1a2f23'
  on-primary-container: '#809787'
  inverse-primary: '#b4ccbb'
  secondary: '#446274'
  on-secondary: '#ffffff'
  secondary-container: '#c5e4fa'
  on-secondary-container: '#496679'
  tertiary: '#271100'
  on-tertiary: '#ffffff'
  tertiary-container: '#442200'
  on-tertiary-container: '#c98140'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d6'
  primary-fixed-dim: '#b4ccbb'
  on-primary-fixed: '#0a2014'
  on-primary-fixed-variant: '#364c3e'
  secondary-fixed: '#c8e7fd'
  secondary-fixed-dim: '#accbe0'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#2c4a5c'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77b'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding: 120px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies the intersection of deep-time archaeology and future-facing innovation. It is built upon a foundation of **Minimalist Editorial** design, prioritizing quiet authority over loud digital trends. The emotional response is one of reverence and intellectual curiosity—evoking the stillness of a Patagonian forest and the precision of scientific inquiry. 

The aesthetic avoids the ephemeral nature of "startup" vibrancy, instead utilizing high-contrast layouts and generous whitespace to create an atmosphere of permanence. Visual motifs include "misty" background blurs that simulate the foggy wetlands of southern Chile and subtle, hairline-thin geometric patterns inspired by archaeological site mappings.

## Colors
The palette is rooted in the natural landscape of Monte Verde. The **Deep Forest Green** serves as the primary anchor for backgrounds and heavy type, providing a sense of density and age. **Petroleum Blue** is used for secondary structural elements and interactive depth. 

**Muted Copper** is the system's "visionary" spark—used sparingly for high-value accents, call-to-actions, and highlights that represent the light of discovery. **Off-white** provides the editorial canvas, while **Stone Gray** handles utilitarian metadata and subtle borders. High-contrast sections (Forest Green backgrounds with Off-white text) should be used to demarcate major thematic shifts in content.

## Typography
Typography is the primary vessel for the institution’s prestige. **Noto Serif** is utilized for all headings to establish a connection to tradition, academia, and the written record. It should be typeset with generous leading to maintain an editorial feel.

**Manrope** provides a contemporary counterpoint for functional text. Its neutral but refined character ensures scientific data and body copy remain highly legible without distracting from the serif headlines. Use the uppercase **Label-sm** style for breadcrumbs, categories, and small navigational cues to introduce a sense of architectural structure to the page.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop to ensure a curated, editorial composition that honors whitespace. A 12-column grid is standard, but content should frequently be offset or centered within a 8-column span to create "breathing room" reminiscent of premium print journals.

Spacing is governed by a strict 8px rhythm, but vertical hierarchy is pushed to extremes. Large-scale section padding (120px+) is encouraged to separate distinct scientific concepts, ensuring the user is never overwhelmed by information density.

## Elevation & Depth
Depth is expressed through **Ambient Shadows** and **Misty Textures** rather than traditional material stacking. Shadows should be ultra-diffused (30-60px blur) with very low opacity (5-8%), using a slight Deep Forest Green tint instead of pure black to maintain a naturalistic feel.

To evoke the "misty" wetlands of the south, use backdrop blurs (Glassmorphism) on navigation bars and floating elements. Layering should feel organic; use semi-transparent Off-white over Petroleum Blue backgrounds to create a sense of archaeological layers being revealed.

## Shapes
The shape language is primarily **Soft (0.25rem)**. While the institution is visionary, sharp corners can feel overly aggressive or "tech-heavy," and fully rounded pills feel too "friendly/app-like." A subtle radius provides a sophisticated, tactile quality that mimics honed stone or archival paper.

Organic shapes inspired by the wetlands should be reserved for background decorative elements or image masks, never for functional UI components like buttons or inputs, which must remain geometric and disciplined.

## Components
### Buttons
Primary buttons use a solid Deep Forest Green fill with Off-white text. Secondary buttons utilize a Ghost style with a Stone Gray hairline border. All buttons feature a 1px transition to Muted Copper on hover to signify discovery.

### Elegant Cards
Cards feature a subtle Off-white background against the slightly darker off-white of the page, defined by a 1px Stone Gray border or a soft ambient shadow. Typography within cards should maintain a strong vertical hierarchy: a Noto Serif subtitle followed by a Manrope body.

### Refined Navigation
The navigation bar is height-generous (80px+) with a background blur effect. Links are typeset in Manrope Label-sm with wide letter spacing. The active state is indicated by a subtle Muted Copper dot beneath the label.

### Input Fields
Inputs are minimalist, using only a bottom border (Stone Gray) that transforms to Petroleum Blue on focus. This mimics the clean look of archival ledgers.

### Additional Components
*   **Vertical Timeline:** A hairline vertical stroke in Stone Gray used to denote chronological archaeological findings.
*   **Image Captions:** Italicized Manrope text placed in the margins of the grid, reinforcing the editorial nature of the design system.