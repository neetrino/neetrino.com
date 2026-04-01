# Desktop Restore Plan

## Source of Truth

Commit: `37bd480445e824457b2a03895310a90b5dcb90ac`

---

## What the Desktop Was in Commit 37bd480

In the reference commit, `app/page.tsx` rendered:

```tsx
<CanvasScaler>
  <NeetrinoHome />
</CanvasScaler>
```

`CanvasScaler` computes `scale = viewportWidth / 1440` and applies `transform: scale()` to a fixed
`1440 × 5600 px` inner div (`NeetrinoHome`). At 1440px viewport → scale = 1.0 (pixel-perfect).
At 1280px → scale = 0.89. This is the exact desktop behavior to restore.

The section components (`Navbar`, `HeroSection`, etc.) existed in the commit but were **not used
on desktop** — `NeetrinoHome` is a self-contained Figma export that includes all page sections.

---

## Current State (HEAD / commit 94e760f)

`app/page.tsx` renders only section components:

```tsx
<Navbar /> + <main>sections</main> + <Footer />;
```

`app/globals.css` has `.section-container` but is **missing** the canvas CSS:

- `.neetrino-canvas-wrap` (required by CanvasScaler)
- `.neetrino-canvas-inner` (required by CanvasScaler)

---

## Files That Differ from Commit

| File                               | Difference                                           | Action                   |
| ---------------------------------- | ---------------------------------------------------- | ------------------------ |
| `app/page.tsx`                     | No CanvasScaler/NeetrinoHome, sections only          | Add desktop canvas block |
| `app/globals.css`                  | Missing canvas CSS classes                           | Add back canvas CSS      |
| `components/sections/Navbar.tsx`   | scroll lock, CTA always visible, mobile menu changes | Keep (mobile only)       |
| `components/sections/WhatWeDo.tsx` | 5th card col-span                                    | Keep (mobile only)       |
| `components/sections/Footer.tsx`   | Larger social icons                                  | Keep (mobile only)       |
| `components/sections/Partners.tsx` | `unoptimized` on logos                               | Keep (mobile only)       |

---

## Restoration Strategy

### Breakpoint Discipline

- `base / sm / md` (< 1024px) → current section-based mobile layout (UNCHANGED)
- `lg / xl / 2xl` (≥ 1024px) → CanvasScaler + NeetrinoHome from commit 37bd480

### Implementation

**`app/page.tsx`** — two layout blocks, separated by `lg:hidden` / `hidden lg:block`:

```tsx
{
  /* Mobile: section-based (unchanged, hidden on lg+) */
}
<div className="lg:hidden">
  <Navbar />
  <main>...</main>
  <Footer />
</div>;

{
  /* Desktop: original canvas layout from commit 37bd480 (shown on lg+) */
}
<div className="hidden lg:block">
  <CanvasScaler>
    <NeetrinoHome />
  </CanvasScaler>
</div>;
```

**`app/globals.css`** — add back `.neetrino-canvas-wrap` and `.neetrino-canvas-inner` which are
required for CanvasScaler to function.

---

## Mobile Protection

- Section components are rendered inside `<div className="lg:hidden">` — invisible on desktop
- Base/sm/md styles in section components are not touched
- `display: none` via `lg:hidden` fully removes elements from layout and interaction

---

## How Canvas CSS Was in Commit

```css
.neetrino-canvas-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #151515;
}

.neetrino-canvas-inner {
  width: 1440px;
  min-height: 5600px;
  transform-origin: top left;
  background-color: #151515;
}
```

These are needed by `CanvasScaler.tsx` (JS sets `transform: scale()` on `.neetrino-canvas-inner`).

---

## Risk Notes

1. **Breakpoint boundary (1024px)**: At exactly 1024px, the canvas shows at `1024/1440 = 0.71x`
   scale — this is identical to how commit 37bd480 behaved at 1024px.
2. **Double DOM**: Both mobile sections and NeetrinoHome are in the HTML; only one is visible.
   This is standard practice and has no UX impact.
3. **NeetrinoHome Navbar**: NeetrinoHome contains its own Navbar (baked into the Figma export).
   On desktop the section Navbar is hidden (`lg:hidden`), so no duplication is visible.
4. **CSS `section-container`**: Kept in globals.css — needed by mobile sections. Does not affect
   the canvas layout.
