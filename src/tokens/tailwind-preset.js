/**
 * Tailwind CSS Preset for Design Engineering
 * Injects calibrated cubic-bezier curves, spring durations, and tactile elevation.
 */

const { EASING_CURVES, DURATION_TIERS } = require('./motion');
const { SURFACE_TOKENS } = require('./surfaces');

module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'enter': EASING_CURVES.emphasizedEnter,
        'exit': EASING_CURVES.emphasizedExit,
        'standard': EASING_CURVES.standard,
        'tactile': EASING_CURVES.tactileSettle
      },
      transitionDuration: {
        'instant': DURATION_TIERS.instant,
        'fast': DURATION_TIERS.fast,
        'moderate': DURATION_TIERS.moderate,
        'deliberate': DURATION_TIERS.deliberate
      },
      boxShadow: {
        'specular-card': `${SURFACE_TOKENS.dark.innerGlow}, ${SURFACE_TOKENS.dark.specularShadow}`,
        'inner-glow': SURFACE_TOKENS.dark.innerGlow,
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.25)',
        'glow-gold': '0 0 25px rgba(255, 190, 11, 0.3)'
      },
      colors: {
        surface: {
          dark: SURFACE_TOKENS.dark.base,
          glass: SURFACE_TOKENS.dark.glass
        }
      }
    }
  }
};
