/**
 * Test Suite for claude-design-engineer
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');
const { auditCodebase } = require('../src/auditor');
const motion = require('../src/tokens/motion');
const surfaces = require('../src/tokens/surfaces');

console.log('Running claude-design-engineer test suite...\n');

const fixturesDir = path.join(__dirname, 'fixtures');

// 1. Test scanning bad component
const badResults = auditCodebase(path.join(fixturesDir, 'bad-component.jsx'));
console.log(`Bad component audit score: ${badResults.score}/100 [Grade: ${badResults.grade}]`);
console.log(`Detected ${badResults.issues.length} issues.`);

const ruleIds = badResults.issues.map(i => i.ruleId);
assert(ruleIds.includes('CDE001'), 'Must flag CDE001: generic-ai-border');
assert(ruleIds.includes('CDE002'), 'Must flag CDE002: robotic-transition');
assert(ruleIds.includes('CDE003'), 'Must flag CDE003: missing-active-feedback');
assert(ruleIds.includes('CDE004'), 'Must flag CDE004: layout-reflow-animation');
assert(ruleIds.includes('CDE005'), 'Must flag CDE005: non-tabular-metrics');
assert(badResults.score < 60, 'Score should be low for bad component');
console.log('✔ Bad fixture correctly flagged all AI UI anti-patterns.');

// 2. Test scanning good component
const goodResults = auditCodebase(path.join(fixturesDir, 'good-component.jsx'));
console.log(`Good component audit score: ${goodResults.score}/100 [Grade: ${goodResults.grade}]`);
assert(goodResults.score >= 95, 'Good component must achieve Grade S or A');
assert.strictEqual(goodResults.issues.length, 0, 'Good component should have 0 violations');
console.log('✔ Good fixture passed with score >= 95 and 0 violations.');

// 3. Test token generator functions
const motionCss = motion.generateMotionCSS();
assert(motionCss.includes('--motion-ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1)'), 'Motion CSS must include enter curve');
assert(motionCss.includes('prefers-reduced-motion: reduce'), 'Motion CSS must include reduced motion override');

const surfacesCss = surfaces.generateSurfacesCSS();
assert(surfacesCss.includes('--surface-glass'), 'Surfaces CSS must include surface glass variable');
assert(surfacesCss.includes('surface-tactile-card'), 'Surfaces CSS must include tactile card utility');
console.log('✔ Motion and surface token generators produce valid responsive CSS.');

// 4. Test eject primitive template exists
const cardTemplate = path.join(__dirname, '../src/templates/TactileCard.jsx');
assert(fs.existsSync(cardTemplate), 'TactileCard.jsx template must exist');
const buttonTemplate = path.join(__dirname, '../src/templates/MagneticButton.jsx');
assert(fs.existsSync(buttonTemplate), 'MagneticButton.jsx template must exist');
const drawerTemplate = path.join(__dirname, '../src/templates/FluidDrawer.jsx');
assert(fs.existsSync(drawerTemplate), 'FluidDrawer.jsx template must exist');
console.log('✔ Component primitives (Card, Button, Drawer) validated.');

console.log('\nAll claude-design-engineer tests passed successfully! 🚀\n');
