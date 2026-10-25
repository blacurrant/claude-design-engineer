#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { auditCodebase } = require('../src/auditor');

const args = process.argv.slice(2);
const command = args[0] || 'help';

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  gold: '\x1b[38;5;214m'
};

if (command === '--help' || command === '-h' || command === 'help') {
  console.log(`
${colors.bold}${colors.cyan}CLAUDE DESIGN ENGINEER v1.0.0${colors.reset}
${colors.dim}Design Engineering Tokens, Spring Physics & AI UI Slop Auditor${colors.reset}

${colors.bold}USAGE:${colors.reset}
  npx claude-design-engineer <command> [options]
  npx cde <command> [options]

${colors.bold}COMMANDS:${colors.reset}
  ${colors.green}init${colors.reset} [dir]          Inject design engineering tokens & Tailwind preset into project
  ${colors.green}audit${colors.reset} [dir]         Scan components for AI UI anti-patterns and layout thrashing
  ${colors.green}eject${colors.reset} <template>    Eject component primitive: card | button | drawer
  ${colors.green}help${colors.reset}                Display this help screen
  ${colors.green}version${colors.reset}             Display version information

${colors.bold}EXAMPLES:${colors.reset}
  npx cde init ./src
  npx cde audit ./src/components
  npx cde eject card ./src/components

${colors.gold}Crafted by Nishant Choudhary (https://nishant.world)${colors.reset}
  `);
  process.exit(0);
}

if (command === '--version' || command === '-v' || command === 'version') {
  const pkg = require('../package.json');
  console.log(`claude-design-engineer v${pkg.version}`);
  process.exit(0);
}

if (command === 'init') {
  const targetDir = path.resolve(args[1] || process.cwd());
  console.log(`\n${colors.bold}${colors.cyan}◆ Initializing Claude Design Engineer in: ${targetDir}${colors.reset}\n`);

  const tokensDir = path.join(targetDir, 'design-tokens');
  fs.mkdirSync(tokensDir, { recursive: true });

  // Copy design-tokens.css
  const cssSrc = path.join(__dirname, '../src/templates/design-tokens.css');
  const cssDest = path.join(tokensDir, 'design-tokens.css');
  fs.copyFileSync(cssSrc, cssDest);
  console.log(`  ${colors.green}✔ Created ${path.relative(process.cwd(), cssDest)}${colors.reset}`);

  // Copy tailwind-preset.js
  const twSrc = path.join(__dirname, '../src/tokens/tailwind-preset.js');
  const twDest = path.join(tokensDir, 'tailwind-preset.js');
  fs.copyFileSync(twSrc, twDest);
  console.log(`  ${colors.green}✔ Created ${path.relative(process.cwd(), twDest)}${colors.reset}`);

  console.log(`\n${colors.bold}Next Steps:${colors.reset}`);
  console.log(`  1. Import tokens in your main CSS: @import './design-tokens/design-tokens.css';`);
  console.log(`  2. Add preset to tailwind.config.js: presets: [require('./design-tokens/tailwind-preset.js')]`);
  console.log(`  3. Eject tactile primitives: npx cde eject card\n`);
  process.exit(0);
}

if (command === 'eject') {
  const templateName = (args[1] || '').toLowerCase();
  const destDir = path.resolve(args[2] || process.cwd());

  const templateMap = {
    card: 'TactileCard.jsx',
    button: 'MagneticButton.jsx',
    drawer: 'FluidDrawer.jsx'
  };

  const filename = templateMap[templateName];
  if (!filename) {
    console.error(`${colors.red}Unknown template '${templateName}'. Available: card, button, drawer${colors.reset}`);
    process.exit(1);
  }

  const srcFile = path.join(__dirname, '../src/templates', filename);
  const destFile = path.join(destDir, filename);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcFile, destFile);

  console.log(`\n${colors.green}✔ Ejected ${filename} to ${path.relative(process.cwd(), destFile)}${colors.reset}\n`);
  process.exit(0);
}

if (command === 'audit') {
  const scanTarget = args[1] || process.cwd();
  const results = auditCodebase(scanTarget);

  console.log(`\n${colors.bold}${colors.cyan}◆ CLAUDE DESIGN ENGINEER // AI UI SLOP AUDIT${colors.reset}`);
  console.log(`${colors.dim}  Enforcing 120 FPS compositor contracts, specular depth & tactile physics${colors.reset}\n`);

  if (results.issues.length === 0) {
    console.log(`  ${colors.green}✔ Zero AI UI anti-patterns detected.${colors.reset} High tactile fidelity!`);
  } else {
    // Group by file
    const byFile = {};
    results.issues.forEach(iss => {
      byFile[iss.file] = byFile[iss.file] || [];
      byFile[iss.file].push(iss);
    });

    Object.keys(byFile).forEach(file => {
      console.log(`${colors.bold}${colors.cyan}● ${file}${colors.reset}`);
      byFile[file].forEach(iss => {
        const tag = iss.severity === 'error' ? `${colors.red}[ERROR]` : `${colors.yellow}[WARN]`;
        console.log(`  ${tag} L${iss.line}: ${colors.bold}${iss.ruleId}${colors.reset} — ${iss.message}`);
        console.log(`     ${colors.dim}› ${iss.snippet}${colors.reset}`);
        console.log(`     ${colors.green}→ Recommendation: ${iss.suggestion}${colors.reset}\n`);
      });
    });
  }

  const errors = results.issues.filter(i => i.severity === 'error').length;
  const warnings = results.issues.filter(i => i.severity === 'warning').length;

  console.log(`${colors.dim}----------------------------------------------------------------------${colors.reset}`);
  console.log(`${colors.bold}DESIGN FIDELITY SCORE:${colors.reset} ${colors.cyan}${results.score}/100 [Grade: ${results.grade}]${colors.reset}`);
  console.log(`  Scanned: ${results.filesCount} files in ${results.durationMs}ms`);
  console.log(`  Violations: ${errors > 0 ? colors.red : colors.green}${errors} errors${colors.reset}, ${warnings} warnings`);
  console.log('');
  console.log(`${colors.gold}⚡ Built by Nishant Choudhary (Creative Developer & Design Engineer)${colors.reset}`);
  console.log(`  Portfolio: ${colors.cyan}https://nishant.world${colors.reset}`);
  console.log(`  Solana Tip Jar / Sponsor: ${colors.yellow}F9DJTXa6xP7mdG1niMNDhqcM3vDq8LZvg25JqJXGvDTf${colors.reset}\n`);

  process.exit(errors > 0 ? 1 : 0);
}

console.error(`Unknown command '${command}'. Run 'claude-design-engineer help' for usage.`);
process.exit(1);
