# Design System — TRUVOX V3 (Terracotta)

## 1. Visual Theme & Atmosphere

TRUVOX V3 embodies a bold, premium digital aesthetic centered around a warm "Terracotta" palette and a sophisticated dark theme. The visual language emphasizes high-end editorial clarity, purposeful whitespace, and a "Floating 3D" icon signature. This system is designed for high-conversion agency websites, balancing professional authority with modern, creative energy.

**Key Characteristics**
- **Primary Palette:** Warm Terracotta (#C94B2D) and Near-Black (#1A0800)
- **Visual Style:** Editorial Magic — clean, bold, and high-fidelity
- **Iconography:** 3D "Floating" editorial icons with subtle shadows
- **Typography:** Poppins (Geometric Sans) for all hierarchy levels
- **Interactions:** Smooth Framer Motion reveals, magnetic elements, and hover-responsive cards
- **Atmosphere:** Professional yet vibrant; "Chill but Sharp"

## 2. Color Palette & Roles

### Brand Colors
- **Brand Main** (`#C94B2D`): Primary identity color; used for CTAs, key highlights, and primary gradients.
- **Brand Hover** (`#A83820`): Deep terracotta for interactive states and hover effects.
- **Brand Light** (`#E8682A`): Bright terracotta for accents and secondary gradients.
- **Brand Secondary** (`#0DB4B4`): Turquoise accent for secondary features and visual variety.
- **Brand Secondary Hover** (`#099A9A`): Deep turquoise for secondary interactive states.

### Backgrounds
- **Primary Background** (`#FFFFFF`): Standard surface for light sections.
- **Section Alt** (`#FBF8F6`): Very light warm tint for section separation.
- **Dark Background** (`#1A0800`): Primary dark theme color; used for Hero, CTA, and Footer sections.
- **Dark Alt** (`#120600`): Deepest dark for subtle layering within dark sections.
- **Card Background** (`#FFFFFF`): Base surface for service and pricing cards.
- **Card Tint** (`rgba(201, 75, 45, 0.06)`): Subtle terracotta tint for hover states and backgrounds.

### Typography & Borders
- **Text Primary** (`#1A0800`): Main heading color on light backgrounds.
- **Text Body** (`#5E5E5E`): Standard readability color for paragraphs.
- **Text Muted** (`#8A8A8A`): Muted information, labels, and metadata.
- **Text White** (`#FFFFFF`): All text on dark backgrounds.
- **Border Light** (`#EBEBEB`): Standard divider and border color.
- **Border Brand** (`#C94B2D`): Featured card borders and focus rings.

## 3. Typography Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display | Poppins | 80px | 900 | Hero headlines, ultra-bold tracking-tighter |
| Heading 1 | Poppins | 52px | 800 | Main section titles |
| Heading 2 | Poppins | 32px | 700 | Component/Card titles |
| Body Large | Poppins | 18px | 500 | Intro text, prominent descriptions |
| Body Regular| Poppins | 14px | 400 | Standard paragraph copy |
| Label | Poppins | 10px | 800 | Badges, tags, uppercase tracking-widest |

## 4. Component Stylings

### Buttons
- **Primary:** Terracotta background, white text, fully rounded (pill), brand shadow.
- **Secondary:** White background, Terracotta border/text, fully rounded.
- **Ghost:** Transparent background, white border/text (on dark bg).

### Cards
- **Service Card:** White background, Elevation 2 shadow, subtle border, hover lift.
- **Featured Card:** Top border [3px] brand-main, shadow elevation 5 (brand tint).

## 5. Depth & Elevation (Shadow System)

| Level | Shadow Value | Use Case |
|-------|--------------|----------|
| Elevation 1 | `0px 2px 8px rgba(0,0,0,0.04)` | Navbar, small UI elements |
| Elevation 2 | `0px 4px 12px rgba(0,0,0,0.08)` | Standard cards |
| Elevation 3 | `0px 6px 16px rgba(0,0,0,0.12)` | Hover states |
| Elevation 4 | `0px 8px 24px rgba(0,0,0,0.15)` | Interactive containers |
| Elevation 5 | `0px 8px 32px rgba(201, 75, 45, 0.20)` | Branded highlights |

## 6. Logo Handling
The TRUVOX logo is stored as a purple asset but transformed into the Terracotta brand color via CSS filters (`.logo-terracotta`) for maximum flexibility and performance.
- **Light Theme:** Colored logo (#C94B2D)
- **Dark Theme:** White or Terracotta logo (depending on section contrast)
 on full-width sections. Reduce or remove shadows to prevent visual noise on dark surfaces.