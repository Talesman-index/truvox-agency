# Truvox V2 Implementation Plan

## Overview
Implementation of the Truvox digital agency website using Next.js and the Karam-inspired design system.

## Prerequisites
- Node.js installed.
- Access to 3D assets in `icons 3d/`.

## Phase Summary
1. Environment & Base Configuration
2. Design System & Global Layout
3. Hero & Core Identity
4. Services & Process Sections
5. Portfolio & Social Proof
6. Contact & Lead Capture
7. Animations & Visual Polish

---

## Phase 1: Environment & Base Configuration

### Objective
Initialize the Next.js project with TypeScript and Tailwind CSS.

### Tasks
- [ ] Initialize Next.js project.
- [ ] Install dependencies (framer-motion, lucide-react).
- [ ] Configure `tailwind.config.ts` with brand colors and Poppins.
- [ ] Set up Google Fonts (Poppins).

### Success Criteria
- Development server running.
- Tailwind styles applying correctly.
- Poppins font loading.

---

## Phase 2: Design System & Global Layout

### Objective
Implement the global CSS variables and base layout components.

### Tasks
- [ ] Implement CSS variables in `globals.css` based on the visual contract.
- [ ] Create `Button` component (Primary, Secondary, Ghost).
- [ ] Create `Navbar` (Sticky, responsive).
- [ ] Create `Footer` component.
- [ ] Implement `Layout` wrapper with max-width (1440px).

### Success Criteria
- Navigation and Footer visible on all pages.
- Buttons match the "Visual Contract" (fully rounded).

---

## Phase 3: Hero & Core Identity

### Objective
Build the high-impact Hero section.

### Tasks
- [ ] Implement Hero section with gradient background.
- [ ] Add H1 with purple gradient text.
- [ ] Integrate floating 3D rocket/orb.
- [ ] Add Primary and Secondary CTAs.

### Success Criteria
- Hero section matches the visual specification.
- 3D asset floating animation working.

---

## Phase 4: Services & Process Sections

### Objective
Showcase Truvox services and working method.

### Tasks
- [ ] Create `ServiceCard` component with Elevation 2.
- [ ] Implement Services grid (4 services).
- [ ] Create Process section (5 steps).
- [ ] Implement `StatBar` with numeric animations.

### Success Criteria
- Service cards have correct hover effects.
- Process steps are clear and responsive.

---

## Phase 5: Portfolio & Social Proof

### Objective
Display selected work and testimonials.

### Tasks
- [ ] Create `ProjectCard` component.
- [ ] Implement "Selected Work" section (3 concepts).
- [ ] Implement Comparison section (Why choose Truvox).

### Success Criteria
- Portfolio items render correctly.
- Comparison list is clear.

---

## Phase 6: Contact & Lead Capture

### Objective
Enable clients to reach out.

### Tasks
- [ ] Implement Contact form on Homepage/Contact page.
- [ ] Add "Final CTA" section with dark background and white ghost button.

### Success Criteria
- Form is functional (client-side validation).
- Dark CTA section looks premium.

---

## Phase 7: Animations & Visual Polish

### Objective
Add the "magic" with advanced animations and polish.

### Tasks
- [ ] Implement Scroll Reveal (fade-up).
- [ ] Add Stagger effect to cards.
- [ ] Add Marquee ticker if needed.
- [ ] Final audit of responsiveness and contrast.

### Success Criteria
- Site feels alive and smooth.
- All visual rules from the contract are met.
