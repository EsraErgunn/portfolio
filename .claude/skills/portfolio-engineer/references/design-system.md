# Design System

## Overview

The design system defines the visual language of the portfolio.

Every page, section and component must follow this system to ensure consistency, accessibility and scalability.

The visual style should feel:

- Premium
- Minimal
- Elegant
- Modern
- Calm
- Fast
- Professional

The design inspiration comes from:

- Apple
- Linear
- Vercel
- Stripe
- Notion

---

# Design Principles

Always prioritize:

- Simplicity
- Readability
- Consistency
- Accessibility
- Performance
- Spacious layouts
- Meaningful animations

Avoid:

- Visual clutter
- Excessive gradients
- Heavy glassmorphism
- Unnecessary shadows
- Over-animated interfaces

---

# Color System

## Primary

Used for:

- Primary buttons
- Links
- Interactive elements

Light

```
#2563EB
```

Dark

```
#60A5FA
```

---

## Neutral

Background

```
#FFFFFF
```

Surface

```
#F8FAFC
```

Border

```
#E2E8F0
```

Text Primary

```
#0F172A
```

Text Secondary

```
#475569
```

---

## Dark Theme

Background

```
#020617
```

Surface

```
#0F172A
```

Border

```
#1E293B
```

Text

```
#F8FAFC
```

Muted

```
#94A3B8
```

---

## Semantic Colors

Success

```
#22C55E
```

Warning

```
#F59E0B
```

Danger

```
#EF4444
```

Info

```
#3B82F6
```

---

# Typography

Font Family

Primary

```
Inter
```

Fallback

```
system-ui
```

Monospace

```
JetBrains Mono
```

---

## Font Scale

Display

```
60px
```

H1

```
48px
```

H2

```
36px
```

H3

```
30px
```

H4

```
24px
```

Body Large

```
20px
```

Body

```
16px
```

Small

```
14px
```

Caption

```
12px
```

---

# Font Weight

Light

300

Regular

400

Medium

500

SemiBold

600

Bold

700

---

# Spacing

The project follows an 8px spacing system.

Available spacing:

```
4
8
12
16
24
32
40
48
64
80
96
128
```

Never invent arbitrary spacing values.

---

# Border Radius

Small

```
8px
```

Medium

```
12px
```

Large

```
16px
```

Extra Large

```
24px
```

Full

```
9999px
```

---

# Shadows

Small

```
0 1px 3px rgba(0,0,0,.08)
```

Medium

```
0 8px 24px rgba(0,0,0,.10)
```

Large

```
0 20px 60px rgba(0,0,0,.15)
```

Avoid extremely strong shadows.

---

# Layout

Maximum Content Width

```
1280px
```

Reading Width

```
720px
```

Section Padding

Desktop

```
120px
```

Tablet

```
80px
```

Mobile

```
48px
```

---

# Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

# Responsive Breakpoints

Mobile

```
640px
```

Tablet

```
768px
```

Laptop

```
1024px
```

Desktop

```
1280px
```

Large Desktop

```
1536px
```

Always design mobile-first.

---

# Buttons

Primary

Filled

Secondary

Outlined

Ghost

Minimal

Icon Button

Circular

Buttons must always include:

- Hover state
- Active state
- Focus state
- Disabled state

---

# Cards

Cards should use:

- Rounded corners
- Soft shadows
- Comfortable padding
- Clear hierarchy

Avoid noisy borders.

---

# Icons

Use:

Lucide Icons

Do not mix icon libraries.

---

# Motion

Motion should improve understanding.

Never animate for decoration alone.

Preferred duration:

Fast

150ms

Normal

250ms

Slow

400ms

Preferred easing:

ease-out

Spring animations only where appropriate.

---

# Animation Principles

Animate:

- Opacity
- Position
- Scale

Avoid animating:

- Width
- Height
- Large layout shifts

Prefer GPU-friendly transforms.

---

# Images

Use:

- WebP
- AVIF

Always lazy-load non-critical images.

Avoid oversized assets.

---

# Accessibility

Target

WCAG AA

Requirements

- Keyboard navigation
- Focus indicators
- Semantic HTML
- Color contrast
- Reduced motion support
- Screen reader compatibility

Accessibility is required.

---

# Dark Mode

The application must support:

- Light Theme
- Dark Theme

Theme switching should be instantaneous.

No visual flickering.

---

# Component Philosophy

Components should be:

- Reusable
- Independent
- Accessible
- Predictable
- Small
- Easy to test

Avoid large all-in-one components.

---

# UI Inspiration

Every interface should resemble the quality of:

- Apple
- Linear
- Vercel
- Stripe
- Raycast

Not through copying visuals, but through:

- Clean hierarchy
- Smooth interactions
- Excellent typography
- Thoughtful spacing
- High attention to detail

The final impression should be premium, modern and highly polished.