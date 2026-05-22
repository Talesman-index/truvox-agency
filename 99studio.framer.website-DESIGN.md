# Design System Inspired by 99Studio

## 1. Visual Theme & Atmosphere

99Studio's design system embodies cutting-edge digital agency aesthetics through a bold, high-contrast dark-first approach. The visual identity leverages vibrant neon accents against deep, sophisticated neutrals to create an energetic yet professional atmosphere. The typography hierarchy is commanding and geometric, with serif display fonts anchoring premium brand messaging while clean sans-serif body text ensures readability at scale. Geometric elements, layered depth, and strategic use of negative space create a modern, tech-forward impression that communicates innovation and creative excellence. The overall mood is aspirational, confident, and forward-thinking—designed to elevate brands through cutting-edge digital solutions.

**Key Characteristics:**
- Dark theme with pure black backgrounds and deep charcoal neutrals
- High-contrast neon lime accent for emphasis and calls-to-action
- Premium geometric serif display typography paired with humanist sans-serif bodies
- Bold, minimalist layout with generous whitespace
- High visual hierarchy through color and scale contrast
- Contemporary digital-first aesthetic with premium polish
- Emphasis on clarity, boldness, and directional focus

## 2. Color Palette & Roles

### Primary
- **Primary Brand Blue** (`#0000EE`): Primary interactive elements, links, and brand accent; used extensively for clickable elements and brand identity reinforcement
- **Neon Lime** (`#CEFE55`): High-visibility accent for CTAs, highlights, and brand emphasis; creates energetic focal points against dark backgrounds

### Accent Colors
- **Deep Blue Accent** (`#2266FF`): Secondary interactive state; subtle brand variation for hover and focus states
- **Navy Brand Tone** (`#273186`): Deep brand reinforcement; used sparingly for sophisticated brand messaging
- **Muted Blue-Gray** (`#4B4B62`): Tertiary accent for secondary UI elements and supportive information

### Interactive
- **Primary CTA Blue** (`#0000EE`): Link text, primary button backgrounds, and interactive element defaults
- **Interactive Hover** (`#2266FF`): State change indicator for interactive element feedback
- **Active State** (`#CEFE55`): Bold feedback for pressed, active, or highlighted states

### Neutral Scale
- **Pure Black** (`#000000`): Primary text, backgrounds, and structural elements; dominant color providing contrast
- **Near-Black Surface** (`#0D0D18`): Subtle background variation; used for cards, sections, and depth differentiation
- **Very Dark Gray** (`#10121D`): Alternative dark surface for layered depth
- **Dark Charcoal** (`#1A1A1A`): Secondary dark surface for panel and card backgrounds
- **Medium Gray** (`#4B4B62`): Text and UI element coloration for secondary information
- **Mid-Gray** (`#ADAAAA`): Disabled state text and low-priority information
- **Light Gray** (`#D8D8D8`): Borders, dividers, and subtle UI separators
- **Off-White Surface** (`#F0F0F0`): Light backgrounds and minimal contrast surfaces
- **Cream** (`#F6F5F2`): Warm neutral for card backgrounds and alternative surfaces
- **Warm White** (`#F4F1E6`): Primary light surface; used for content containers and elevated surfaces
- **Pure White** (`#F1F1F1`): Clean, minimal backgrounds and maximum contrast elements

### Surface & Borders
- **Primary Surface** (`#F4F1E6`): Main light background for cards, buttons, and elevated content
- **Secondary Surface** (`#F6F5F2`): Alternative light surface for differentiation and layering
- **Border Color** (`#D8D8D8`): Lines, dividers, and container borders for subtle definition

## 3. Typography Rules

### Font Family
**Primary Display Font:** BioRhyme Expanded, BioRhyme, Georgia, serif
**Secondary Font:** BioRhyme, Georgia, serif
**Body Font:** DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
**UI/Navigation Font:** sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | BioRhyme Expanded | 60px | 800 | 72px | 0px | Hero headlines, flagship statements |
| Heading 2 | BioRhyme | 48px | 600 | 66px | 0px | Section titles, major content headers |
| Heading 3 | BioRhyme | 40px | 600 | 54px | 0px | Subsection headers, feature titles |
| Heading 4 | BioRhyme | 34px | 600 | 42px | 0px | Card titles, strong emphasis |
| Heading 5 | BioRhyme | 28px | 600 | 36px | 0px | Minor section headers, feature callouts |
| Heading 6 | BioRhyme | 24px | 600 | 32px | 0px | Tertiary headers, sidebar titles |
| Body Text | DM Sans | 16px | 400 | 25px | 0px | Primary content, descriptions, paragraphs |
| Body Small | DM Sans | 14px | 400 | 22px | 0px | Secondary text, helper copy, metadata |
| Navigation Link | sans-serif | 12px | 400 | normal | 0px | Menu items, nav labels |
| UI Label / Button | sans-serif | 12px | 400 | normal | 0px | Button text, form labels, UI labels |
| Caption | DM Sans | 12px | 400 | 18px | 0px | Image captions, footnotes |
| Code / Monospace | monospace | 13px | 400 | 20px | 0px | Code blocks, technical text |

### Principles
- Display fonts (BioRhyme family) command attention through scale and weight; reserved for headlines and hero messaging
- Body copy uses DM Sans for optimal readability and modern humanist character
- Maintain consistent line height ratios (1.2× for display, 1.5-1.6× for body) for vertical rhythm
- Use weight contrast (800 vs 600 vs 400) to establish clear hierarchy rather than size alone
- Navigation and UI labels use system sans-serif for consistency and performance
- Neon accent colors (`#CEFE55`) applied to key words or phrases within headlines for visual emphasis
- Letter spacing remains at 0px to maintain geometric precision
- All heading fonts derive from the serif family to establish premium, design-forward tone

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#CEFE55`
- Text Color: `#000000`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: `sans-serif`
- Padding: `16px 24px`
- Border Radius: `24px`
- Border: `0px none`
- Box Shadow: `none`
- Hover State: Opacity `0.9`, Scale `1.02`
- Active State: Opacity `0.85`

**Secondary Button**
- Background: `#F4F1E6`
- Text Color: `#000000`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: `sans-serif`
- Padding: `16px 24px`
- Border Radius: `24px`
- Border: `1px solid #D8D8D8`
- Box Shadow: `none`
- Hover State: Background `#F6F5F2`
- Active State: Background `#F0F0F0`

**Ghost Button**
- Background: `transparent`
- Text Color: `#0000EE`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: `sans-serif`
- Padding: `16px 24px`
- Border Radius: `24px`
- Border: `1px solid #0000EE`
- Box Shadow: `none`
- Hover State: Background `rgba(0, 0, 238, 0.08)`
- Active State: Background `rgba(0, 0, 238, 0.12)`

### Cards & Containers

**Primary Card**
- Background: `#F4F1E6`
- Border: `0px none`
- Border Radius: `12px`
- Padding: `40px`
- Box Shadow: `0px 4px 12px rgba(0, 0, 0, 0.08)`

**Dark Card**
- Background: `#0D0D18`
- Border: `1px solid #1A1A1A`
- Border Radius: `12px`
- Padding: `40px`
- Box Shadow: `0px 8px 24px rgba(0, 0, 0, 0.32)`

**Bordered Container**
- Background: `transparent`
- Border: `1px solid #D8D8D8`
- Border Radius: `12px`
- Padding: `40px`
- Box Shadow: `none`

### Inputs & Forms

**Text Input**
- Background: `#F4F1E6`
- Text Color: `#000000`
- Border: `1px solid #D8D8D8`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font Size: `16px`
- Font Family: `DM Sans`
- Focus State: Border `1px solid #0000EE`
- Focus State: Box Shadow `0px 0px 0px 3px rgba(0, 0, 238, 0.12)`

**Dark Input**
- Background: `#0D0D18`
- Text Color: `#F4F1E6`
- Border: `1px solid #1A1A1A`
- Border Radius: `8px`
- Padding: `12px 16px`
- Font Size: `16px`
- Font Family: `DM Sans`
- Focus State: Border `1px solid #2266FF`
- Focus State: Box Shadow `0px 0px 0px 3px rgba(34, 102, 255, 0.12)`

**Form Label**
- Font Size: `14px`
- Font Weight: `500`
- Color: `#000000`
- Margin Bottom: `8px`
- Font Family: `DM Sans`

### Navigation

**Header Navigation (Desktop)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Height: `57px`
- Padding: `16px 0px`
- Font Size: `12px`
- Font Weight: `400`
- Font Family: `sans-serif`
- Color: `#000000`
- Border Radius: `24px`
- Box Shadow: `none`

**Navigation Link**
- Font Size: `12px`
- Font Weight: `400`
- Color: `#0000EE`
- Padding: `0px`
- Background: `transparent`
- Border: `0px none`
- Hover State: Opacity `0.7`
- Active State: Color `#CEFE55`

**Navigation Link (Dark Mode)**
- Font Size: `12px`
- Font Weight: `400`
- Color: `#000000`
- Padding: `0px`
- Background: `transparent`
- Hover State: Color `#4B4B62`

## 5. Layout Principles

### Spacing System
**Base Unit:** `4px`

**Spacing Scale:**
- `4px` — micro gaps between nested elements
- `8px` — tight spacing between related items
- `12px` — component internal spacing
- `16px` — standard padding for containers and components
- `20px` — comfortable spacing between components
- `24px` — gaps between major content sections
- `28px` — section separation
- `40px` — card and container padding
- `44px` — gap between major layout blocks
- `48px` — large section spacing
- `60px` — hero section padding
- `68px` — maximum padding for oversized containers

**Usage Context:**
- `4px–8px`: Icon spacing, badge gaps
- `12px–16px`: Component padding, form field spacing
- `20px–24px`: Card margins, section dividers
- `40px–60px`: Container padding, hero sections
- `44px–68px`: Full-width section gaps

### Grid & Container
- **Max Width:** `1200px` for standard content
- **Columns:** 12-column flexible grid for responsive scaling
- **Gutter:** `24px` standard horizontal spacing
- **Section Pattern:** Full-width hero sections with centered content containers
- **Container Padding:** `60px` horizontal padding for desktop, `20px` for mobile

### Whitespace Philosophy
99Studio embraces generous negative space as a design principle. Whitespace creates visual breathing room and emphasizes hierarchy. Dark backgrounds dominate with light surfaces reserved for key content, allowing neon accents to puncture the darkness and command attention. Vertical rhythm is maintained through consistent spacing multiples, creating predictable, elegant layouts. Horizontal whitespace around text ensures legibility and premium feel.

### Border Radius Scale
- `0px` — sharp edges for technical UI elements
- `8px` — subtle rounding for form inputs and minor components
- `12px` — standard rounding for cards and containers
- `24px` — pill-shaped rounding for buttons and full-height interactive elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow; solid color only | Primary text, icons, minimal backgrounds |
| Level 1 | `0px 2px 4px rgba(0, 0, 0, 0.08)` | Form inputs, small components |
| Level 2 | `0px 4px 12px rgba(0, 0, 0, 0.12)` | Standard cards, modals, dropdowns |
| Level 3 | `0px 8px 24px rgba(0, 0, 0, 0.20)` | Elevated cards, floating panels |
| Level 4 | `0px 12px 32px rgba(0, 0, 0, 0.32)` | Floating modals, popover overlays |
| Level 5 | `0px 16px 48px rgba(0, 0, 0, 0.40)` | Fixed headers on scroll, premium overlays |

**Shadow Philosophy:**
99Studio's shadow system uses soft, diffused shadows to create subtle depth without visual noise. Shadows are built from black at low opacity to maintain the dark aesthetic integrity. Shadows increase in blur radius and spread as elevation rises, creating clear visual hierarchy. Most UI elements remain flat or use minimal shadow (Level 1–2) to maintain modern minimalism. Full-page modals and persistent overlays use stronger shadows (Level 4–5) for clear separation from background content.

## 7. Do's and Don'ts

### Do
- Use `#CEFE55` neon lime to highlight critical CTAs and brand moments—it's your most distinctive color
- Apply the full BioRhyme family (Expanded, regular) for all headlines to establish premium typography authority
- Maintain high contrast between text and backgrounds; ensure WCAG AA compliance minimum
- Use generous padding (`40px–60px`) to create premium whitespace and breathing room
- Keep dark backgrounds (`#000000`, `#0D0D18`) as primary surfaces; light (`#F4F1E6`) for elevated, secondary content
- Round button corners to `24px` for soft, contemporary feel
- Stack typography sizes logically: no skipping hierarchy levels
- Apply consistent `24px` gaps between major sections
- Use the pure blue (`#0000EE`) for all interactive links and states by default
- Layer cards and containers with subtle borders or shadows for depth perception

### Don't
- Avoid mixing serif and sans-serif in body text; maintain clear font role separation
- Don't use `#CEFE55` as a background for large text areas; it fatigues the eye
- Don't apply multiple shadow levels to the same element; pick one elevation and commit
- Avoid borders and shadows simultaneously; choose one technique for visual definition
- Don't use colors outside the defined palette; consistency is critical for brand recognition
- Avoid padding under `16px` on interactive elements; minimum touch target is `44px × 44px`
- Don't apply rounded corners below `8px` radius; it looks unintentional
- Avoid using gray text (`#ADAAAA`) on dark backgrounds without WCAG testing; contrast is critical
- Don't override the typography hierarchy with arbitrary size changes; use semantic roles
- Avoid cluttering layouts with elements; embrace negative space as a design tool

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 320px–640px | Single column, `20px` padding, `28px` section gaps, heading sizes reduced 20–30% |
| Tablet | 641px–1024px | Two-column grid, `40px` padding, `40px` section gaps, full heading sizes |
| Desktop | 1025px–1440px | Three-column grid, `60px` padding, `48px` section gaps, premium spacing |
| Wide | 1441px+ | Four-column grid, `60px` padding, max-width `1200px` enforced, centered |

### Touch Targets
- **Minimum Interactive Size:** `44px × 44px` for buttons, links, and touch elements
- **Padding Around Targets:** `8px` minimum to prevent accidental activation
- **Spacing Between Targets:** `12px` minimum to avoid misclicks
- **Dense UI Threshold:** `32px` minimum for dense lists and grids (with appropriate touch adjustment)

### Collapsing Strategy
- **Navigation:** Horizontal menu collapses to vertical mobile drawer at `640px` breakpoint
- **Multi-Column Grids:** Collapse from 3 columns to 2 at tablet, 1 at mobile
- **Hero Sections:** Reduce padding from `60px` to `40px` at tablet, `20px` at mobile; shrink heading font sizes
- **Card Layout:** Stack cards vertically on mobile instead of horizontal grid
- **Images:** Scale responsively with `max-width: 100%`; maintain aspect ratio with CSS aspect-ratio property
- **Typography:** Maintain heading weight and family; adjust size scale proportionally (80–90% on tablet, 60–75% on mobile)
- **Form Inputs:** Full-width on mobile; inline on desktop with minimum `150px` width per field

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Neon Lime (`#CEFE55`) for buttons and emphasis
- **Interactive Links:** Primary Blue (`#0000EE`) for navigation and links
- **Background:** Pure Black (`#000000`) for primary surfaces
- **Card Background:** Warm White (`#F4F1E6`) for light content
- **Dark Variant Background:** Near-Black (`#0D0D18`) for dark cards
- **Text on Light:** Pure Black (`#000000`)
- **Text on Dark:** Warm White (`#F4F1E6`)
- **Borders & Dividers:** Light Gray (`#D8D8D8`)
- **Disabled/Secondary Text:** Mid-Gray (`#ADAAAA`)
- **Hover State:** Secondary Blue (`#2266FF`)

### Iteration Guide

1. **Always start with typography:** Apply BioRhyme Expanded for H1, BioRhyme for H2–H6, and DM Sans for body. This establishes premium tone immediately.

2. **Contrast is hierarchy:** Dark backgrounds receive light text; light backgrounds receive dark text. No exceptions. Use `#F4F1E6` on `#000000` and vice versa.

3. **Neon lime (`#CEFE55`) is the brand punctuation:** Use it sparingly for CTAs, accent words in headlines, and active states. Overuse dilutes impact.

4. **Spacing multiplier of 4px:** Every dimension (padding, margin, gap) must be a multiple of `4px`. This maintains rhythm and simplifies responsive adjustments.

5. **Buttons are always `24px` border radius:** No exceptions. This soft pill shape is core to the visual identity.

6. **Shadows require blur radius proportional to elevation:** Use `0px 4px 12px` for standard cards, `0px 8px 24px` for elevated panels. Match spread to blur (blur ÷ 3 = spread).

7. **Cards need padding:** Minimum `40px` internal padding. Content should never touch container edges. This is a premium design principle.

8. **Dark mode is default:** Design backgrounds as dark first (`#000000` or `#0D0D18`). Light surfaces (`#F4F1E6`) are accent layers.

9. **Mobile first, then scale up:** Define mobile breakpoint at `640px` max-width. Responsive means reducing complexity and padding, not hiding content.

10. **Test all color combinations for WCAG AA:** Ensure all text-to-background pairings meet minimum contrast ratios. Dark text on light, light text on dark. Mid-grays only on white or near-black, never in isolation.