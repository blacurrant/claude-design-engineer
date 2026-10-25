/**
 * Calibrated Motion & Spring Physics Tokens
 * Crafted for 120 FPS compositor execution and natural organic tactile feedback.
 */

const EASING_CURVES = {
  // Asymmetric cubic-beziers: quick acceleration into viewport, gradual organic settle
  emphasizedEnter: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
  // Rapid deceleration out of viewport without lingering
  emphasizedExit: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
  // Standard interface transitions (drawers, modal backdrops)
  standard: 'cubic-bezier(0.16, 1, 0.3, 1)',
  // Subtle tactile press & spring-like micro-settle
  tactileSettle: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
};

const DURATION_TIERS = {
  instant: '75ms',
  fast: '150ms',
  moderate: '240ms',
  deliberate: '400ms',
  reduced: '0.01ms' // Accessibility fallback for prefers-reduced-motion
};

const SPRING_PHYSICS = {
  // Snappy micro-interactions (buttons, toggles, icon clicks)
  snappy: { stiffness: 450, damping: 28, mass: 0.8 },
  // Tactile press response (cards, actionable items)
  tactilePress: { stiffness: 500, damping: 30, mass: 0.5 },
  // Smooth modal & bottom sheet entry
  fluidSurface: { stiffness: 320, damping: 32, mass: 1 },
  // Playful notification toasts / pill badges
  bouncy: { stiffness: 400, damping: 22, mass: 0.9 }
};

function generateMotionCSS() {
  return `/* === Calibrated Motion Tokens by Nishant Choudhary (nishant.world) === */
:root {
  /* Durations */
  --motion-duration-instant: ${DURATION_TIERS.instant};
  --motion-duration-fast: ${DURATION_TIERS.fast};
  --motion-duration-moderate: ${DURATION_TIERS.moderate};
  --motion-duration-deliberate: ${DURATION_TIERS.deliberate};

  /* Curves */
  --motion-ease-standard: ${EASING_CURVES.standard};
  --motion-ease-enter: ${EASING_CURVES.emphasizedEnter};
  --motion-ease-exit: ${EASING_CURVES.emphasizedExit};
  --motion-ease-tactile: ${EASING_CURVES.tactileSettle};

  /* Pre-assembled transition aliases */
  --transition-action: transform var(--motion-duration-fast) var(--motion-ease-standard), opacity var(--motion-duration-fast) ease;
  --transition-surface: transform var(--motion-duration-moderate) var(--motion-ease-enter), opacity var(--motion-duration-fast) ease;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-instant: ${DURATION_TIERS.reduced};
    --motion-duration-fast: ${DURATION_TIERS.reduced};
    --motion-duration-moderate: ${DURATION_TIERS.reduced};
    --motion-duration-deliberate: ${DURATION_TIERS.reduced};
  }
}
`;
}

module.exports = {
  EASING_CURVES,
  DURATION_TIERS,
  SPRING_PHYSICS,
  generateMotionCSS
};
