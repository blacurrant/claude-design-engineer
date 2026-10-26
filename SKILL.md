---
name: claude-design-engineer
description: Inject design engineering token systems, tactile spring physics, surface luminosity, and compositor-only animation contracts (transform and opacity) into AI code generation to eliminate generic robotic UI slop.
---

# `claude-design-engineer` Agent Skill

Use this skill whenever generating, auditing, or refactoring frontend interfaces in React, Next.js, Vue, Svelte, Tailwind CSS, or Framer Motion. It transforms generic, flat, robotic AI component outputs into world-class, tactile, fluid digital software.

## The 5 Design Engineering Directives (Anti-Robotic UI Contract)

### 1. The Compositor Contract (transform and opacity only)
- **Zero Layout Reflow**: Never animate `height`, `width`, `top`, `bottom`, `left`, `right`, `margin`, or `padding`. Every layout recalculation destroys frame rates on mobile hardware.
- **GPU Isolation**: Always animate `transform` (`translate3d`, `scaleX`, `scaleY`) and `opacity`.
- **Pre-Rasterization**: Declare `will-change: transform` or `will-change: transform, opacity` on interactive sheets, floating dialogs, and animated cards.

### 2. Tactile Asymmetry & Calibrated Curves
- **Ban `transition: all` and `duration-300 ease-in-out`**: They are the unmistakable signatures of generic AI code generation.
- **Enter Asymmetry**: Elements entering the viewport accelerate fast and settle gently:
  `cubic-bezier(0.05, 0.7, 0.1, 1)` (150ms–240ms).
- **Exit Asymmetry**: Elements leaving the viewport drop away quickly without lingering:
  `cubic-bezier(0.3, 0, 0.8, 0.15)` (120ms–150ms).
- **Interactive Micro-Transitions**: Rapid tactile response:
  `cubic-bezier(0.16, 1, 0.3, 1)` (150ms).

### 3. Surface Luminosity, Specular Highlights & Depth
- **Eliminate Flat Gray Borders**: Ban `border border-gray-200` or `border-zinc-800`.
- **Layered Specular Borders**:
  ```css
  /* Dark Mode Depth Stack */
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
              0 16px 40px -10px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  ```
- **Pointer Glow**: Overlay pointer-tracking radial gradient gradients on premium cards (`rgba(0, 240, 255, 0.12)`).

### 4. Interactive Micro-Compression & States
- **Every Clickable Element MUST have 4 distinct states**:
  1. Default: Crisp typography, subtle inner glow.
  2. Hover: `-translate-y-0.5` or `-translate-y-1` with increased border luminosity.
  3. Active (Press): Physical haptic compression `active:scale-[0.98]` or `active:scale-[0.96]`.
  4. Focus-Visible: High-contrast ring (`focus-visible:ring-2 focus-visible:ring-cyan-400`).

### 5. Typography & Numerical Optical Alignment
- **Tabular Numerics**: Always apply `tabular-nums` (`font-variant-numeric: tabular-nums`) and `font-mono` to prices, metrics, timestamps, and counters to prevent layout jitter on value changes.
- **Heading Tracking**: Always use `tracking-tight` (`letter-spacing: -0.025em`) on headings >= 24px.
- **Vestibular Accessibility**: Enforce global duration token collapse on `@media (prefers-reduced-motion: reduce)` to `0.01ms`.

---

## Token Reference

### CSS Variables (`design-tokens.css`)
```css
:root {
  --motion-duration-instant: 75ms;
  --motion-duration-fast: 150ms;
  --motion-duration-moderate: 240ms;
  --motion-duration-deliberate: 400ms;

  --motion-ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  --motion-ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1);
  --motion-ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);

  --inner-glow: inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
  --shadow-specular: inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 16px 40px -10px rgba(0, 0, 0, 0.65);
}
```

### Framer Motion Spring Presets
```js
export const springs = {
  snappy: { stiffness: 450, damping: 28, mass: 0.8 },
  tactilePress: { stiffness: 500, damping: 30, mass: 0.5 },
  fluidSurface: { stiffness: 320, damping: 32, mass: 1 },
  bouncy: { stiffness: 400, damping: 22, mass: 0.9 }
};
```

---

## How to Verify Code Quality

Run the auditor command on generated code:
```bash
npx @blacurrant/claude-design-engineer audit <path-to-files>
```
Verify that the output achieves **Grade S or A (Score >= 85/100)** before presenting code to users.
