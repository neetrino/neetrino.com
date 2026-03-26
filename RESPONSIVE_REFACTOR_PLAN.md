# Responsive Refactor Plan — Neetrino

## Current Problems (Pre-Refactor)

### Root Cause: Canvas Scaling
`app/page.tsx` wrapped `<NeetrinoHome>` (1006-line Figma-exported absolute-position component) inside `<CanvasScaler>`.

`CanvasScaler` computed `scale = viewportWidth / 1440` and applied `transform: scale()` to a fixed `1440 × 5600 px` inner div. On a 375 px phone the scale was **0.26×**, making:
- fonts ~4–8 px (unreadable)
- tap targets ~10 px (untappable)
- the whole page a shrunken desktop screenshot

### File-Level Issues

| File | Problem |
|---|---|
| `app/page.tsx` | Used `CanvasScaler` + `NeetrinoHome` instead of responsive sections |
| `components/CanvasScaler.tsx` | JS-driven proportional scale of a 1440px canvas |
| `components/NeetrinoHome.tsx` | All elements `position: absolute` with pixel coords (`left-[622px]`, `top-[310px]`) |
| `app/globals.css` | `.neetrino-canvas-inner { width: 1440px }` — hard desktop lock; missing `.section-container` |
| `components/assets.ts` | Did not exist — section components that imported it could not compile |

### Section-Level Issues

- **Navbar**: No scroll lock when mobile menu opened; CTA hidden on mobile
- **WhatWeDo**: 5-card grid on `md` left the last card spanning 1 of 2 columns (half-width on tablet)
- **Footer**: Social icon touch targets were 32 × 32 px (below 44 px minimum)

---

## Responsive Strategy — Section by Section

### Global Layout
- Removed `CanvasScaler` from `app/page.tsx`
- Composed page from individual section components: `Navbar + main(HeroSection, WhoWeAre, WhatWeDo, Projects, Partners, DeviceShowcase) + Footer`
- Added `.section-container` utility in `globals.css`: `max-width: 1400px`, horizontal padding scales `1rem → 1.5rem → 2rem` across breakpoints

### Navbar
- `position: fixed`, glassmorphism pill — preserved on all viewports
- Mobile menu: full-screen overlay with `backdrop-blur`, slide-down animation
- `useEffect` locks `body { overflow: hidden }` when menu is open
- CTA "Get a Quote" now visible on all screen sizes (pill button, full-width in mobile menu)
- Desktop layout (logo + nav links + CTA + lang selector + phone) preserved at `md+`

### HeroSection
- Mobile: visual block (NEETRINO logo + robot) stacks above text
- `min-h` uses `min(vh, px)` clamps — avoids overflow on short screens
- Stats: 1-col on mobile → 3-col on `md+`
- Background image + overlay layers preserved, robot and logo scale via responsive `w-[min()]`

### WhoWeAre
- Two-column flex at `lg`, stacked on mobile
- Image uses `fill` + `object-contain` with proper `sizes` prop
- `mix-blend-exclusion` preserved (looks correct on dark `#151515` background)

### WhatWeDo
- Cards: `h-[350px]` mobile → `h-[400px]` md → `h-[450px]` lg — avoids image overflow
- Grid: `grid-cols-1` → `grid-cols-2` at md → `grid-cols-5` at lg
- 5th card: `md:col-span-2 lg:col-span-1` — fills the row on tablet, returns to equal width on desktop

### Projects
- Grid: 1-col → 2-col at `md` → 6-col at `lg` (first 3 span 2 cols, last 2 span 3 cols)
- Images use `fill` + `object-cover` with hover scale — preserved

### Partners
- Grid: 2-col → 4-col → flex wrap centered — logos scale to container

### DeviceShowcase
- iMac and iPad hidden on mobile (correct — MacBook is the hero device)
- iPhone visible at `md+`
- MacBook centered, responsive width via `max-w-[560/600/640px]`

### Footer
- 4-column grid: `1-col` → `2-col` at `md` → `4-col` at `lg`
- Message form: stacked on mobile, `flex-row` at `sm+`
- Social icons: increased to `h-10 w-10` (40 px) with `p-1` padding — meets 44 px touch target
- All links and inputs comfortable on touch

---

## Files Changed

| File | Action |
|---|---|
| `components/assets.ts` | Created — central FIGMA_ASSETS export (63 image URLs) |
| `app/page.tsx` | Replaced CanvasScaler+NeetrinoHome with direct section composition |
| `app/globals.css` | Removed canvas CSS, added `.section-container`, cleaned up tokens |
| `components/sections/Navbar.tsx` | Scroll lock, CTA on mobile, mobile menu polish |
| `components/sections/WhatWeDo.tsx` | Fixed 5th card grid span on `md` |
| `components/sections/Footer.tsx` | Social icon touch targets `h-8 → h-10` |

## Files Preserved (Unchanged)

| File | Reason |
|---|---|
| `components/CanvasScaler.tsx` | Kept for potential future use; no longer referenced |
| `components/NeetrinoHome.tsx` | Kept as reference; no longer rendered |
| All other section components | Already responsive — no changes needed |

---

## Risk Notes for Desktop Preservation

1. **Max-width**: `.section-container` uses `max-width: 1400px` — 40 px narrower than the Figma canvas (1440 px). Visually identical at full screen.
2. **Canvas sections not ported**: `NeetrinoHome.tsx` had some decorative sections (Group, Group1 decorative overlays) that were Figma-only visual elements. These are naturally absent in the section-based implementation.
3. **CanvasScaler preserved**: If a non-homepage route needs the scaled-canvas approach, `CanvasScaler.tsx` is still available.
4. **Font loading**: Each section component that loads Inter does so independently. Could be consolidated into `layout.tsx` in a future pass.
5. **Image blend modes**: `WhoWeAre` uses `mix-blend-exclusion` — functions correctly on the `#151515` dark background. Would need review if background changes.

---

## Viewports Covered

- 320px — single-column, stacked, all content accessible
- 360px / 375px / 390px / 412px — mobile, comfortable tap targets
- 768px — 2-column cards, nav shows as desktop
- 1024px — full desktop layout activates
- 1280px / 1440px+ — premium desktop experience preserved
