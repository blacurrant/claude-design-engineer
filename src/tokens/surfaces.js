/**
 * Surface Depth, Elevation & Luminosity Tokens
 * Eliminates flat solid AI UI grays by layering specular highlights,
 * multi-stop translucent borders, and ambient occlusion shadows.
 */

const SURFACE_TOKENS = {
  dark: {
    base: '#090d16',
    subtle: 'rgba(255, 255, 255, 0.03)',
    raised: 'rgba(255, 255, 255, 0.06)',
    glass: 'rgba(13, 19, 33, 0.72)',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderLuminous: 'rgba(0, 240, 255, 0.25)',
    borderGold: 'rgba(255, 190, 11, 0.35)',
    innerGlow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
    specularShadow: '0 12px 36px -8px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.06)'
  },
  light: {
    base: '#f8fafc',
    subtle: 'rgba(0, 0, 0, 0.02)',
    raised: '#ffffff',
    glass: 'rgba(255, 255, 255, 0.82)',
    borderSubtle: 'rgba(0, 0, 0, 0.08)',
    borderLuminous: 'rgba(0, 140, 255, 0.25)',
    innerGlow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
    specularShadow: '0 8px 30px -4px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)'
  }
};

function generateSurfacesCSS() {
  return `/* === Surface Depth & Luminosity Tokens by Nishant Choudhary (nishant.world) === */
:root {
  --surface-bg: ${SURFACE_TOKENS.dark.base};
  --surface-glass: ${SURFACE_TOKENS.dark.glass};
  --surface-border-subtle: ${SURFACE_TOKENS.dark.borderSubtle};
  --surface-border-luminous: ${SURFACE_TOKENS.dark.borderLuminous};
  --surface-inner-glow: ${SURFACE_TOKENS.dark.innerGlow};
  --surface-shadow-elevation: ${SURFACE_TOKENS.dark.specularShadow};
}

.surface-tactile-card {
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--surface-border-subtle);
  box-shadow: var(--surface-inner-glow), var(--surface-shadow-elevation);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: transform var(--motion-duration-fast) var(--motion-ease-standard),
              border-color var(--motion-duration-fast) ease,
              box-shadow var(--motion-duration-fast) ease;
}

.surface-tactile-card:hover {
  border-color: var(--surface-border-luminous);
  transform: translateY(-2px);
  box-shadow: var(--surface-inner-glow), 0 16px 40px -8px rgba(0, 240, 255, 0.12);
}

.surface-tactile-card:active {
  transform: translateY(0px) scale(0.99);
}
`;
}

module.exports = {
  SURFACE_TOKENS,
  generateSurfacesCSS
};
