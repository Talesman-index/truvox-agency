# Design System Inspired by Nuvara Agency

## 1. Visual Theme & Atmosphere

Nuvara embodies a bold, minimalist aesthetic rooted in stark contrast and purposeful simplicity. The design system leverages a deep black foundation as its dominant spatial element, punctuated by vibrant neon accents that create electric focal points. This dramatic interplay conveys sophistication, modernity, and technical precision—ideal for a design-forward digital agency. The typography is deliberately oversized and commanding, employing geometric sans-serif typefaces that communicate confidence and clarity. Every element serves a functional purpose, with whitespace used generously to ensure visual breathing room. The overall atmosphere is progressive, unapologetically digital, and optimized for high-impact communication that demands attention without sacrificing legibility or user experience.

**Key Characteristics**
- Extreme contrast between deep blacks and bright whites
- Neon accent colors that pop against neutral backgrounds
- Geometric, bold typography with generous sizing
- Minimal ornamentation; functional design philosophy
- Strategic use of whitespace for visual hierarchy
- Premium, modern aesthetic suitable for tech and creative industries
- High legibility prioritized in all contexts

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): Dominant background, structural foundation, and primary text color; creates spatial depth and visual anchor points
- **White** (`#FFFFFF`): Primary text on dark backgrounds, surface highlights, interactive states, and essential contrast elements
- **Off-White / Light Gray** (`#F5F5F5`): Subtle background tints, disabled states, and secondary surface treatments

### Accent Colors
- **Neon Green** (`#33FF0D`): Success state indicator, call-to-action highlights, and energetic focal points; represents progress and affirmation
- **Neon Blue** (`#0099FF`): Secondary accent for interactive elements, links, and supporting visual callouts
- **Electric Blue** (`#0000EE`): Primary link color and interactive text; highest contrast against dark backgrounds

### Interactive
- **Ghost Blue** (`#0000EE`): Link text default state; maintains legibility and web standard conventions
- **Neon Green** (`#33FF0D`): Primary button backgrounds and success confirmations; signals action and positive states

### Neutral Scale
- **Charcoal** (`#505250`): Secondary text, subtle borders, and muted UI elements
- **Medium Gray** (`#A4A4A4`): Placeholder text, disabled inputs, and tertiary interface components
- **Dark Charcoal** (`#0D0D0D`): Deep shadow tones and ultra-high contrast overlays
- **Slate Gray** (`#575757`): Border strokes and divider lines

### Surface & Borders
- **Off-White** (`#F5F5F5`): Card backgrounds and light surface treatments
- **Slate** (`#C0C4BF`): Subtle border lines and edge definition

### Semantic / Status
- **Success Green** (`#33FF0D`): Positive confirmations, successful actions, and progress indicators
- **Transparent Black 12%** (`#000C`): Overlay tints and modal darkenings
- **Transparent Black 1%** (`#0003`): Minimal overlay for subtle depth layering

## 3. Typography Rules

### Font Family
**Primary: Staatliches**
- Fallback stack: `'Staatliches', 'Arial Black', sans-serif`
- Usage: Display headings, hero text, and primary navigation emphasis
- Character: Bold, geometric, highly distinctive and attention-commanding

**Secondary: Inter Display**
- Fallback stack: `'Inter Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Usage: Subheadings, body text, and form labels
- Character: Professional, modern, exceptionally legible at all sizes

**Tertiary: Geist**
- Fallback stack: `'Geist', 'Inter', sans-serif`
- Usage: UI labels, metadata, and compact text elements
- Character: Minimal, neutral, optimized for technical clarity

**Fallback: Sans-serif**
- Used for buttons, links, and utility text when specific fonts unavailable

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Staatliches | 172px | 400 | 172px | Normal | Hero statements, primary page titles |
| Heading / H2 | Inter Display | 24px | 500 | 28.8px | Normal | Section headers and subsection titles |
| Heading / H3 | Staatliches | 48px | 400 | 52.8px | Normal | Card titles and major section breaks |
| Heading / H4 | Staatliches | 28px | 400 | 30.8px | Normal | Secondary card headers and emphatic labels |
| Body Text | Inter Display | 18px | 500 | 25.2px | Normal | Primary paragraph content and descriptions |
| Input / Form Text | Inter Display | 16px | 400 | 19.2px | Normal | Form fields, input placeholders |
| Label / UI Text | Geist | 14px | 500 | 16.8px | Normal | Form labels, badge text, metadata |
| Link / Button Text | Sans-serif | 12px | 400 | Normal | Normal | Interactive text, secondary buttons |

### Principles
- **Scale-driven clarity**: Typography sizes span a wide range (12px to 172px) to establish unmistakable hierarchy
- **Weight modulation**: Lighter weights (400) for display and headers create elegance; heavier weights (500) for body and UI enhance readability
- **Line height breathing**: Generous line heights (1.5× to 1.0× of font size) ensure comfortable reading on screen
- **Functional distinction**: Each role has unique size + weight + family combination to prevent cognitive ambiguity
- **Geometric preference**: Staatliches' bold geometry reinforces brand personality; Inter Display provides modern professionalism
- **Accessibility first**: Minimum 12px base size; sufficient contrast ratios on all backgrounds maintained

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#33FF0D` (Neon Green)
- Text Color: `#000000` (Black)
- Font: Sans-serif, 12px, 400 weight
- Padding: `16px 28px`
- Border Radius: `0px` (Sharp corners)
- Border: None
- Height: `57px`
- Width: Auto (minimum 192px)
- Line Height: Normal
- Hover: Background darkens to `#2DD90D`, text remains black
- Active: Background becomes `#1FA006`
- Disabled: Background becomes `#A4A4A4`, text becomes `#505250`, cursor: not-allowed

**Secondary Button**
- Background: `#F5F5F5` (Off-White)
- Text Color: `#000000` (Black)
- Font: Sans-serif, 12px, 400 weight
- Padding: `16px 28px`
- Border Radius: `0px`
- Border: `2px solid #000000`
- Height: `57px`
- Width: Auto (minimum 179px)
- Line Height: Normal
- Hover: Background becomes `#FFFFFF`, border darkens to `#333333`
- Active: Background becomes `#E0E0E0`
- Disabled: Background becomes `#D0D0D0`, border becomes `#A4A4A4`

**Ghost Button (Icon)**
- Background: `transparent`
- Text Color: `#000000` (Black)
- Font: Sans-serif, 12px, 400 weight
- Padding: `0px`
- Border Radius: `40px`
- Border: None
- Height: `40px`
- Width: `40px`
- Display: Flex, align-items center, justify-content center
- Hover: Background becomes `rgba(0, 0, 0, 0.05)`
- Active: Background becomes `rgba(0, 0, 0, 0.1)`

**Text Link Button**
- Background: `#000000` (Black)
- Text Color: `#0000EE` (Electric Blue)
- Font: Sans-serif, 12px, 400 weight
- Padding: `10px 20px`
- Border Radius: `0px`
- Border: None
- Height: `40px`
- Line Height: Normal
- Hover: Text becomes `#0099FF`, background remains black
- Active: Text becomes `#0085CC`
- Underline: None by default; appears on hover

### Cards & Containers

**Standard Card**
- Background: `#FFFFFF` (White) or `#F5F5F5` (Off-White)
- Border: None or `1px solid #C0C4BF` (Subtle border)
- Border Radius: `0px` (Sharp corners align with brand aesthetic)
- Padding: `32px` to `160px` (context-dependent)
- Box Shadow: None (flat design preferred)
- Text Color: `#000000` (Black)

**Overlay / Modal Container**
- Background: `rgba(0, 0, 0, 0.8)` (Dark transparent overlay)
- Backdrop Blur: `8px` (optional, enhances depth)
- Border Radius: `0px`
- Padding: `40px` to `80px`
- Text Color: `#FFFFFF` (White for contrast on dark background)

**Image Container**
- Border Radius: `100px` (Circular or highly rounded)
- Overflow: Hidden
- Aspect Ratio: Context-dependent (1:1 for avatars, variable for media)

### Inputs & Forms

**Text Input (Light Background)**
- Background: `#FFFFFF` (White)
- Text Color: `#000000` (Black)
- Font: Inter Display, 16px, 400 weight
- Padding: `0px` (Optional: `8px 12px` if needed for breathing room)
- Border: `2px inset #767676` (Subtle 3D inset effect)
- Border Radius: `0px`
- Height: `40px`
- Line Height: `19.2px`
- Placeholder Color: `#A4A4A4`
- Focus: Border becomes `2px solid #0000EE`, outline: none
- Disabled: Background becomes `#F5F5F5`, border becomes `#C0C4BF`, cursor: not-allowed

**Text Input (Dark Background)**
- Background: `transparent`
- Text Color: `#FFFFFF` (White)
- Font: Inter Display, 16px, 400 weight
- Padding: `0px`
- Border: None
- Border Bottom: `2px solid #FFFFFF` (Minimal underline style)
- Border Radius: `0px`
- Height: `40px`
- Line Height: `19.2px`
- Placeholder Color: `rgba(255, 255, 255, 0.5)`
- Focus: Border Bottom becomes `2px solid #33FF0D`, outline: none
- Disabled: Border Bottom becomes `#505250`, cursor: not-allowed

**Form Label**
- Font: Geist, 14px, 500 weight
- Color: `#000000` (Black) on light backgrounds; `#FFFFFF` (White) on dark backgrounds
- Margin Bottom: `8px`
- Display: Block

### Navigation

**Header Navigation**
- Background: `#000000` (Black) or transparent with black text
- Height: `100px`
- Padding: `30px 0px`
- Display: Flex, align-items center, justify-content space-between
- Border Bottom: Optional `1px solid #C0C4BF`

**Navigation Link**
- Font: Sans-serif, 12px, 400 weight
- Color: `#000000` (Black) or `#0000EE` (Blue for active/hover)
- Text Decoration: None
- Padding: `8px 16px`
- Hover: Text Color becomes `#33FF0D` (Neon Green) or `#0099FF`
- Active: Text Color becomes `#33FF0D`
- Transition: `color 0.2s ease`

**Mobile Menu**
- Background: `#000000` (Black)
- Position: Fixed or absolute
- Width: 100% or 280px (context-dependent)
- Padding: `20px`
- Border: None
- Menu Item: `18px` line-height, `20px` vertical spacing

### Badges & Tags

**Success Badge**
- Background: `#33FF0D` (Neon Green)
- Text Color: `#000000` (Black)
- Font: Geist, 14px, 500 weight
- Padding: `4px 8px`
- Border Radius: `0px`
- Display: Inline-block

**Default Badge**
- Background: `#F5F5F5` (Off-White)
- Text Color: `#000000` (Black)
- Font: Geist, 14px, 500 weight
- Padding: `4px 8px`
- Border Radius: `0px`
- Border: `1px solid #C0C4BF`

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Scale with Usage Contexts**:
- Micro spacing (component internals): `4px`, `8px`
- Small spacing (UI gaps): `12px`, `16px`
- Medium spacing (section padding): `20px`, `32px`, `40px`
- Large spacing (section gaps): `52px`, `80px`
- Extra large spacing (page-level padding): `152px`, `160px`, `200px`

**Application Guidance**:
- Button padding: `16px 28px`
- Card padding: `32px` standard; `152px–200px` for hero/full-bleed sections
- Navigation gap: `16px–20px` between menu items
- Section margin: `52px–80px` between major content blocks
- Input padding: Minimal (`0px–8px`) to maintain baseline alignment

### Grid & Container

**Max Width**: `1440px` (desktop viewport maximum)

**Column Strategy**: 
- Desktop: 12-column grid with `16px` gutters
- Tablet: 8-column grid with `12px` gutters
- Mobile: 4-column grid with `8px` gutters

**Container Padding**:
- Desktop: `40px–80px` left/right margin from viewport edge
- Tablet: `20px–40px`
- Mobile: `16px`

**Section Patterns**:
- Full-bleed hero: No horizontal padding; extends edge-to-edge
- Contained section: Max width `1440px`, centered, with horizontal padding
- Split layout: Two equal columns, gap `40px–80px` between

### Whitespace Philosophy

Whitespace is treated as a design material, not empty space. Generous vertical spacing between sections (52px–80px) ensures visual hierarchy and cognitive separation. Horizontal spacing within components remains tight (8px–16px) to maintain information density. Negative space around text elements—especially large display typography—breathes confidence and premium positioning. The system favors asymmetrical whitespace distributions to create visual interest while preserving clarity.

### Border Radius Scale

- **Sharp Corners**: `0px` (buttons, cards, containers, inputs)
- **Rounded Corners**: `40px` (icon buttons, image overlays)
- **Fully Rounded**: `100px` (circular images, badges)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | No shadow; flat plane | Primary surfaces, main content |
| Raised (1) | `0px 2px 8px rgba(0, 0, 0, 0.1)` | Cards, lightweight overlays |
| Elevated (2) | `0px 8px 24px rgba(0, 0, 0, 0.15)` | Modals, prominent cards, popovers |
| Modal (3) | `0px 16px 40px rgba(0, 0, 0, 0.25)` | Full-screen overlays, dialogs |

**Shadow Philosophy**: Nuvara's design system embraces flat design principles with minimal shadows. Shadows are reserved for critical moments—modal overlays, elevated cards, and interactive feedback states. The shadows employ low opacity black with moderate blur radii to suggest depth subtly without creating visual clutter. This restraint reinforces the clean, minimalist aesthetic while maintaining spatial hierarchy through scale and color contrast primarily.

**Note**: Extracted data contained no shadow specifications; these values are inferred from modern flat design practices and the brand's minimalist positioning.

## 7. Do's and Don'ts

### Do
- **Do use extreme contrast** between black backgrounds and white text or neon accents for maximum legibility and impact
- **Do employ Staatliches for attention-grabbing display text** and hero statements; its geometric boldness commands presence
- **Do maintain sharp corners** (`0px` border radius) on buttons, cards, and containers to preserve the angular, technical aesthetic
- **Do apply Neon Green** (`#33FF0D`) to primary calls-to-action and success states; it's the brand's most distinctive accent
- **Do use generous padding and margins** (32px–80px) around content blocks to create visual breathing room
- **Do prioritize typography scale** over decorative elements to establish hierarchy
- **Do respect the whitespace** around oversized headings; resist the urge to fill empty areas
- **Do test color contrast ratios** to ensure WCAG AAA compliance, especially with small text on colored backgrounds
- **Do use transparent overlays** (`rgba(0, 0, 0, 0.8)`) for modals and depth layering rather than solid colors

### Don't
- **Don't use rounded buttons or cards** (radius > 4px) unless specifically calling for circular image containers; sharp corners define the brand
- **Don't mix more than two accent colors** in a single interface section; Neon Green and Neon Blue should feel purposeful, not chaotic
- **Don't undersize typography** below 12px for interactive elements; the brand prioritizes bold, readable text
- **Don't apply shadows liberally**; reserve elevation for modals and critical interactive states
- **Don't use serif typefaces** or script fonts; maintain the geometric, modern aesthetic throughout
- **Don't reduce line height** below 1.4× font size; readability suffers and the premium feel diminishes
- **Don't add decorative gradients or patterns** to solid color backgrounds; the flat, minimalist approach is intentional
- **Don't nest more than two levels of hierarchy** in navigation or menus; keep structures flat and scannable
- **Don't apply padding asymmetrically** within buttons or inputs unless there's a specific functional reason (e.g., icon offset)
- **Don't use more than three distinct font families** in any single design; Staatliches, Inter Display, and Geist suffice

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single column layout, full-width containers, `16px` padding, font size reductions (H1: 96px), touch targets `44px` minimum |
| Tablet | 768px–1024px | Two-column grid, `20px–40px` padding, font sizes moderate (H1: 120px), `40px` spacing between sections |
| Desktop | 1025px–1440px | Full 12-column layout, `40px–80px` padding, all typography at full scale, `80px` section gaps |
| Large Desktop | 1441px+ | Max width `1440px` container, centered with equal side margins |

### Touch Targets

- **Minimum interactive element size**: `44px × 44px` (buttons, links, icon buttons)
- **Recommended spacing between targets**: `8px` minimum gap to prevent mis-taps
- **Form input height**: `40px` (accommodates touch without scaling)
- **Navigation items**: `40px` minimum height on mobile, `48px` on tablet/desktop

### Collapsing Strategy

- **Hero Typography**: H1 scales from `172px` (desktop) → `120px` (tablet) → `96px` (mobile)
- **Section Headings**: H3 scales from `48px` → `36px` → `28px`
- **Spacing**: Large gaps (80px) collapse to `40px` (tablet) → `20px` (mobile)
- **Layout**: Multi-column grids collapse to single column; section padding reduces by 50% on mobile
- **Navigation**: Horizontal navigation becomes hamburger menu toggle below `768px`; menu items stack vertically with `20px` spacing
- **Form Inputs**: Width remains flexible; padding adjusted for thumb-friendliness on mobile (consistent `40px` height)
- **Images**: Maintain aspect ratio; max width `100%` with flexible container widths

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Neon Green (`#33FF0D`)
- **Secondary CTA**: Off-White (`#F5F5F5`)
- **Background**: Black (`#000000`)
- **Text (on dark)**: White (`#FFFFFF`)
- **Text (on light)**: Black (`#000000`)
- **Links**: Electric Blue (`#0000EE`)
- **Success State**: Neon Green (`#33FF0D`)
- **Disabled**: Gray (`#A4A4A4`)

### Iteration Guide

1. **Use Staatliches for all display text 24px and above** — its geometric boldness is the brand's visual signature; fallback: Arial Black
2. **Apply Inter Display for body, inputs, and subheadings** — ensures modern legibility and UI clarity
3. **Set border-radius to 0px for buttons, cards, and inputs** — sharp corners reinforce the technical, angular aesthetic
4. **Primary buttons always use Neon Green (#33FF0D) background with black text** — highest visual priority and fastest cognitive recognition
5. **Maintain black (#000000) as the dominant background color** — creates stark contrast and premium positioning
6. **Use generous spacing (32px–80px) between major sections** — whitespace is design; do not fill empty areas
7. **Every interactive element must be minimum 44px × 44px** — touch target accessibility and desktop click precision
8. **Typography line heights must be ≥1.4× font size** — ensures readable, premium appearance
9. **Apply shadows only to modals and elevated cards** — use `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15)` as the standard elevation shadow
10. **Links are Electric Blue (#0000EE) by default; turn Neon Green (#33FF0D) on hover** — clear interactive feedback and brand cohesion
11. **Form inputs on dark backgrounds use white text with transparent background and white bottom border** — minimal, elegant aesthetic
12. **Test all color combinations for WCAG AAA compliance** — particularly critical for small text (12px) on colored backgrounds
13. **Mobile viewports collapse to single column, 16px padding, and reduced typography (H1: 96px)** — maintain readability on small screens
14. **Avoid decorative elements—typography and whitespace carry the design** — restraint reinforces premium positioning
15. **When in doubt, increase whitespace and reduce complexity** — this brand favors clarity, boldness, and strategic simplicity