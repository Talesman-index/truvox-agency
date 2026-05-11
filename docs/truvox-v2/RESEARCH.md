# Truvox V2 Research

## Overview
Truvox is a digital agency for small businesses, focusing on "Designing trust. Building digital presence." The agency is led by Aïda (Marketing Strategy) and Shalom (Development).

## Problem Statement
Small businesses often lack a professional online presence or have websites that don't convert. Truvox aims to provide clean, strategic, and professional websites that build credibility.

## User Stories / Use Cases
- A restaurant needs to improve visibility and simplify reservations.
- A beauty salon wants to build trust and simplify booking.
- A consultant needs to attract clients and present expertise.

## Technical Research

### Recommended Approach
- **Framework**: Next.js (App Router).
- **Styling**: Tailwind CSS, based on the Karam Agency design system.
- **Components**: Framer Motion for animations, custom UI components following the "Visual Contract".
- **Assets**: 3D icons (Rocket, Pen, etc.) and potentially Spline embeds.

### Required Technologies
- Next.js 14/15
- Tailwind CSS
- Framer Motion
- Lucide React (for icons)
- Poppins Font (Google Fonts)

### Data Requirements
- Static content for pages.
- Contact form submission (potentially integrated with a service or WhatsApp as per previous projects).

## UI/UX Considerations
- **Tone**: Modern, bold, premium. Not fun/playful, not corporate.
- **Colors**: Deep Navy (#11004B), Brand Purple (#6157F8), White (#FFFFFF).
- **Typography**: Poppins (all weights).
- **Components**: Fully rounded buttons (1440px radius), Elevation-based shadows.
- **Animations**: Fade-up entrance, staggered cards, count-up stats, marquee ticker.

## Integration Points
- Integration with 3D assets in `icons 3d/`.
- Potential future CMS or backend for portfolio management.

## Risks and Challenges
- Maintaining high performance with 3D assets/animations.
- Ensuring responsive design across all breakpoints (especially complex layouts).

## References
- `truvox_v2_contexte-contenu.md`
- `truvox_v2_visual-contract.md`
- `DESIGN.md`
