/**
 * AI UI Anti-Pattern Ruleset
 * Detects generic robotic AI code generation habits and suggests design engineering upgrades.
 */

module.exports = [
  {
    id: 'CDE001',
    name: 'generic-ai-border',
    severity: 'warning',
    description: 'Detects flat single-tone borders lacking depth, specular inner glow, or dark-mode luminosity.',
    check(line, lineNum, filePath) {
      const stripped = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '').trim();
      if (/\bborder\s+(?:border-gray-[2-8]00|border-zinc-[7-9]00|border-slate-[7-9]00)\b/.test(stripped)) {
        if (!/shadow-\[inset|backdrop-blur/.test(stripped)) {
          return {
            ruleId: 'CDE001',
            line: lineNum,
            message: 'Flat robotic AI border. Lacks surface depth and ambient inner specular highlight.',
            suggestion: 'Add inner highlight glow: shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] and border-white/10.',
            snippet: stripped
          };
        }
      }
      return null;
    }
  },
  {
    id: 'CDE002',
    name: 'robotic-transition',
    severity: 'error',
    description: 'Flags transition-all or default 300ms ease-in-out that feels sluggish.',
    check(line, lineNum, filePath) {
      const stripped = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '').trim();
      if (/\btransition-all\b/.test(stripped) || /transition:\s*all\b/i.test(stripped)) {
        return {
          ruleId: 'CDE002',
          line: lineNum,
          message: "'transition-all' triggers layout calculations on unexpected DOM shifts.",
          suggestion: "Use specific compositor properties: 'transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]'",
          snippet: stripped
        };
      }
      if (/\bduration-300\s+ease-in-out\b/.test(stripped)) {
        return {
          ruleId: 'CDE002',
          line: lineNum,
          message: "'duration-300 ease-in-out' is the signature robotic AI easing curve. Sluggish deceleration.",
          suggestion: "Upgrade to fast tactile response: 'duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]' or spring physics.",
          snippet: stripped
        };
      }
      return null;
    }
  },
  {
    id: 'CDE003',
    name: 'missing-active-feedback',
    severity: 'warning',
    description: 'Flags clickable buttons/cards with hover states but lacking tactile active press compression.',
    check(line, lineNum, filePath, tagContext) {
      const stripped = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '').trim();
      // Check if interactive within tag context or on same line
      const isInteractive = tagContext.isInteractive || /<button\b|<a\b|onClick=|cursor-pointer/i.test(stripped);
      const hasHover = /\bhover:/.test(stripped);
      const hasActive = /\bactive:scale-|\bactive:/.test(stripped) || tagContext.hasActive;

      if (isInteractive && hasHover && !hasActive) {
        return {
          ruleId: 'CDE003',
          line: lineNum,
          message: 'Interactive element has hover state but lacks tactile active compression feedback.',
          suggestion: "Add tactile press feedback: 'active:scale-[0.98]' and 'transition-transform duration-150'.",
          snippet: stripped
        };
      }
      return null;
    }
  },
  {
    id: 'CDE004',
    name: 'layout-reflow-animation',
    severity: 'error',
    description: 'Prohibits animating geometric layout properties (height, width, top, margin).',
    check(line, lineNum, filePath) {
      const stripped = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '').trim();
      if (/animate=\{\s*\{\s*(?:height|width|top|left|margin|padding)\s*:/i.test(stripped)) {
        return {
          ruleId: 'CDE004',
          line: lineNum,
          message: 'Framer Motion animating layout property directly on main thread (triggers reflow).',
          suggestion: "Use 'scaleY/scaleX' with transform or GPU-accelerated 'layout' / 'layoutId' prop.",
          snippet: stripped
        };
      }
      if (/transition\s*:\s*(?:height|width|top|left|margin|padding)\b/i.test(stripped)) {
        return {
          ruleId: 'CDE004',
          line: lineNum,
          message: 'CSS transition on geometric layout property triggers browser reflow every frame.',
          suggestion: "Replace with 'transform: translate3d(x, y, 0)' or 'clip-path'.",
          snippet: stripped
        };
      }
      return null;
    }
  },
  {
    id: 'CDE005',
    name: 'non-tabular-metrics',
    severity: 'info',
    description: 'Flags stats, prices, or counters without tabular-nums causing jitter on updates.',
    check(line, lineNum, filePath) {
      const stripped = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '').trim();
      if (/(\$\d+|\d+\s*(?:%|ms|fps|USD|SOL))\b/i.test(stripped)) {
        if (!/tabular-nums|font-mono/i.test(stripped)) {
          return {
            ruleId: 'CDE005',
            line: lineNum,
            message: 'Metric, currency, or numerical statistic rendered without tabular numbers.',
            suggestion: "Add 'tabular-nums' or 'font-mono' to prevent visual jitter when numbers change.",
            snippet: stripped
          };
        }
      }
      return null;
    }
  }
];
