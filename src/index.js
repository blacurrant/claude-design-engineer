/**
 * Programmatic API for claude-design-engineer
 */

const { auditCodebase, rules } = require('./auditor');
const motion = require('./tokens/motion');
const surfaces = require('./tokens/surfaces');
const tailwindPreset = require('./tokens/tailwind-preset');

module.exports = {
  auditCodebase,
  rules,
  motion,
  surfaces,
  tailwindPreset
};
