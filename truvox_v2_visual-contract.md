# TRUVOX V2 — VISUAL CONTRACT
> Basé sur le design system Karam Agency, adapté à Truvox.
> Utiliser les librairies UI/UX Pro Max + Awesome Antigravity.
> Chaque règle est une contrainte stricte.

---

## IDENTITÉ

Studio : Truvox — Digital Agency for Small Businesses
Ton : Modern, bold, premium. Pas fun/playful. Pas corporate.
Émotion cible : "Ces gens sont pro, modernes, et ils vont faire croître mon business."

---

## 1. COULEURS

```
/* Backgrounds */
--bg-primary    : #FFFFFF
--bg-dark       : #0B0C16
--bg-navy       : #11004B
--bg-card       : #FFFFFF
--bg-card-tint  : rgba(97, 87, 248, 0.08)
--bg-section-alt: #F8F8F8

/* Brand */
--brand-purple  : #6157F8
--brand-violet  : #4F46CE
--accent-bright : #6F6AFF
--accent-lavend : #8389FF

/* Text */
--text-primary  : #11004B
--text-body     : #5E5E5E
--text-muted    : #8A8A8A
--text-white    : #FFFFFF

/* Borders */
--border-light  : #EBEBEB
--border-purple : #6157F8

/* Gradients */
--gradient-brand: linear-gradient(135deg, #6157F8, #6F6AFF)
--gradient-hero : radial-gradient(ellipse at 65% 40%, rgba(97,87,248,0.18) 0%, transparent 65%)
```

Règles :
- Sections claires (blanc #FFFFFF) alternent avec sections dark (#11004B ou #0B0C16)
- Mots-clés dans H1/H2 en gradient text : `background: var(--gradient-brand); -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- CTA primaires toujours en #6157F8
- Jamais plus de 2 couleurs par composant

---

## 2. TYPOGRAPHIE

Famille unique : **Poppins** (Google Fonts)
`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap')`

```
Display H1 : 64px / weight 800 / line-height 1.0 / color #11004B
H2 section : 52px / weight 700 / line-height 1.0 / color #11004B
H3 card    : 32px / weight 500 / line-height 1.1 / color #11004B
Body large : 18px / weight 400 / line-height 1.5 / color #5E5E5E
Body reg   : 12px / weight 400 / line-height 1.5 / color #8A8A8A
Label      : 12px / weight 600 / uppercase / tracking 0.12em / color #6157F8
Button     : 18px / weight 400 / line-height 1.5
```

Responsive scale :
- Desktop : valeurs ci-dessus
- Tablet  : H1 → 40px / H2 → 32px
- Mobile  : H1 → 28px / H2 → 24px / body reste 12–18px

---

## 3. BOUTONS

**Primaire**
```
background    : #6157F8
color         : #FFFFFF
font          : Poppins 18px weight 400
padding       : 16px 32px
border-radius : 1440px
border        : none
box-shadow    : 0px 4px 12px rgba(97,87,248,0.3)
hover         : background #4F46CE / shadow 0px 6px 16px rgba(97,87,248,0.4)
transition    : all 200ms ease
```

**Secondaire**
```
background    : #FFFFFF
color         : #6157F8
border        : 2px solid #6157F8
border-radius : 1440px
padding       : 16px 32px
hover         : background #F8F8F8 / border #4F46CE / color #4F46CE
transition    : all 200ms ease
```

**Ghost (dark sections)**
```
background    : transparent
color         : #FFFFFF
border        : 1px solid rgba(255,255,255,0.4)
border-radius : 1440px
padding       : 14px 28px
hover         : border rgba(255,255,255,0.8) / background rgba(255,255,255,0.08)
```

---

## 4. CARTES

**Service Card**
```
background    : #FFFFFF
padding       : 32px 28px
border-radius : 16px
border        : 1px solid #EBEBEB
box-shadow    : 0px 4px 12px rgba(0,0,0,0.08)
hover         : box-shadow 0px 6px 16px rgba(0,0,0,0.12) / border-color #6157F8
transition    : all 200ms ease
```

**Feature Card (dark)**
```
background    : rgba(97,87,248,0.08)
border        : 1px solid rgba(97,87,248,0.2)
border-radius : 16px
padding       : 32px 28px
hover         : box-shadow 0px 8px 32px rgba(97,87,248,0.25)
```

**Élévations**
```
Elevation 1 : 0px 2px 8px rgba(0,0,0,0.04)   — nav, subtle
Elevation 2 : 0px 4px 12px rgba(0,0,0,0.08)  — cards standard
Elevation 3 : 0px 6px 16px rgba(0,0,0,0.12)  — hover states
Elevation 4 : 0px 8px 24px rgba(0,0,0,0.15)  — hero containers
Elevation 5 : 0px 8px 32px rgba(97,87,248,0.25) — branded CTAs
```

---

## 5. LAYOUT

```
Max-width content : 1440px
Side padding      : 56px desktop / 40px tablet / 24px mobile
Section padding   : 96px haut/bas desktop / 64px tablet / 40px mobile
Grid              : 12 colonnes, 24px gutter
Card grid         : 3 col desktop / 2 col tablet / 1 col mobile / gap 24px
```

---

## 6. NAVIGATION

```
height          : 56px
background      : #FFFFFF
box-shadow      : 0px 2px 8px rgba(0,0,0,0.04)
position        : sticky top 0
logo            : "TRUVOX" Poppins 700 color #11004B
nav links       : 18px Poppins 400 color #11004B / hover color #6157F8
CTA nav         : bouton primaire réduit (padding 12px 24px)
mobile          : hamburger → drawer full-width overlay
```

---

## 7. ANIMATIONS

Utiliser les skills Awesome Antigravity pour :

```
Scroll entrance  : fade-up — translateY(24px→0) opacity(0→1) 0.6s ease-out
Stagger cards    : délai 80ms entre chaque enfant
Count-up stats   : animation numérique à l'entrée viewport
Marquee ticker   : défilement horizontal continu, vitesse 40s linear infinite
Float 3D objects : translateY(0→-14px→0) 3s ease-in-out infinite
Hover cards      : transition 200ms ease sur shadow + border
Button hover     : transition 200ms ease sur background + shadow
```

---

## 8. ÉLÉMENTS DÉCORATIFS

**Background hero**
```css
background: var(--bg-primary);
background-image: var(--gradient-hero);
```

**Noise texture sur cartes dark**
```css
.card-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("noise.svg");
  pointer-events: none;
  border-radius: inherit;
}
```

**Gradient separator entre sections**
```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #6157F8, transparent);
  opacity: 0.3;
}
```

**Glow sur CTA button**
```css
box-shadow: 0 4px 24px rgba(97, 87, 248, 0.4);
```

---

## 9. ASSETS 3D (à placer dans le projet)

Sources :
- Spline embeds : https://app.spline.design/community — chercher "orb purple", "rocket 3d", "shield 3d"
- Iconscout PNG transparent : https://iconscout.com/3d-illustrations — pack Business
- Lummi illustrations : https://www.lummi.ai

Règles d'utilisation :
```
Format        : PNG fond transparent ou Spline iframe embed
Float anim    : translateY 3s ease-in-out infinite
Drop shadow   : filter drop-shadow(0 20px 40px rgba(97,87,248,0.35))
Jamais encadrés dans un container ou card
Mobile        : réduire à 70% taille desktop
```

Placement par section :
```
Hero          : objet 3D flottant colonne droite (rocket ou orbe violet)
Services      : 1 icône 3D 64px au-dessus de chaque titre de card
Features      : icônes 3D 56px centrées (shield, diamond, rocket, lightning)
CTA finale    : illustration 3D large droite (150–200px)
```

---

## 10. CONTENU TRUVOX (adapter au design)

Remplacer tous les textes générés par l'IA par le contenu exact ci-dessous.

**HERO**
Label : "Digital Agency · Small Business"
H1 ligne 1 : "Websites designed"
H1 ligne 2 : "to attract more **clients**." (mot "clients" en gradient text)
Sub : "We create clean, strategic websites that build credibility and turn visitors into clients."
CTA 1 : "Book a Free Consultation" (bouton primaire)
CTA 2 : "View Our Services" (bouton secondaire)

**SERVICES**
Titre : "What we **create**" (mot "create" en gradient)
01 — Website Creation : "Clean and professional websites tailored to your business"
02 — UI/UX Design : "Simple, intuitive, and user-friendly interfaces"
03 — Website Redesign : "Transform outdated websites into modern experiences"
04 — Strategy : "Structure, messaging, and user flow designed for conversion"

**PROCESS**
Titre : "A **simple** and clear process" (mot "simple" en gradient)
01 Discovery / 02 Strategy / 03 Design / 04 Development / 05 Launch

**STATS**
15+ Projects · 100% Satisfaction · 2 Specialists · 3 Packages

**PRICING**
Titre : "Simple pricing, adapted to **your needs**" (gradient sur "your needs")
Basic $500 / Standard $1,200 (featured) / Premium $2,500
CTA cartes : "Get a Quote"

**FINAL CTA** (section dark)
Titre : "Ready to build a website that **works**?" (gradient sur "works")
CTA : "Book a Free Consultation" (bouton ghost blanc)

---

## 11. INTERDICTIONS

- Pas de fond crème #F5F0E8
- Pas de typo autre que Poppins
- Pas d'illustration cartoon fun/playful
- Pas de border-radius < 8px sur les cartes
- Pas de couleurs pastels multicolores sur les cartes
- Pas de titres en uppercase bold condensé
- Pas de Warning Gold (#FBBB07) à des fins décoratives
- Pas de fond bordeaux ou brun dans le footer
- Pas de texte < 12px
