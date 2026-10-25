/**
 * Scanner Engine for AI UI Auditor
 */

const fs = require('fs');
const path = require('path');
const rules = require('./rules');

const VALID_EXTENSIONS = new Set(['.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.html', '.css']);
const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'coverage']);

function collectFiles(targetPath, list = []) {
  if (!fs.existsSync(targetPath)) return list;
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    if (VALID_EXTENSIONS.has(path.extname(targetPath).toLowerCase())) {
      list.push(targetPath);
    }
    return list;
  }

  if (stat.isDirectory()) {
    if (IGNORED_DIRS.has(path.basename(targetPath))) return list;
    for (const entry of fs.readdirSync(targetPath)) {
      collectFiles(path.join(targetPath, entry), list);
    }
  }

  return list;
}

function auditCodebase(targetPaths) {
  const startTime = Date.now();
  const files = [];
  const targets = Array.isArray(targetPaths) ? targetPaths : [targetPaths];
  for (const t of targets) collectFiles(t, files);

  const issues = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');

      let inTag = false;
      let tagInteractive = false;
      let tagActive = false;

      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        const clean = line.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/, '');

        // Check if new tag starts
        if (/<(?:button|a|div|span|header|section|main|article)\b/i.test(clean)) {
          inTag = true;
          tagInteractive = /<(?:button|a)\b/i.test(clean) || /onClick=/i.test(clean);
          tagActive = /\bactive:scale-|\bactive:/.test(clean);
        } else if (inTag) {
          if (/onClick=/i.test(clean)) tagInteractive = true;
          if (/\bactive:scale-|\bactive:/.test(clean)) tagActive = true;
        }

        const tagContext = {
          isInteractive: inTag && tagInteractive,
          hasActive: inTag && tagActive
        };

        for (const rule of rules) {
          const iss = rule.check(line, lineNum, file, tagContext);
          if (iss) {
            issues.push({
              ...iss,
              severity: rule.severity,
              ruleName: rule.name,
              file
            });
          }
        }

        // Tag ends when line has closing > not part of => fat arrow
        if (inTag && /(?<!=)>(?![=])/.test(clean)) {
          inTag = false;
          tagInteractive = false;
          tagActive = false;
        }
      });
    } catch(e) {}
  }

  const durationMs = Date.now() - startTime;
  let score = 100;
  issues.forEach(i => {
    if (i.severity === 'error') score -= 18;
    else if (i.severity === 'warning') score -= 10;
    else score -= 4;
  });
  score = Math.max(0, Math.min(100, score));

  let grade = 'F';
  if (score >= 95) grade = 'S';
  else if (score >= 85) grade = 'A';
  else if (score >= 70) grade = 'B';
  else if (score >= 50) grade = 'C';

  return {
    filesCount: files.length,
    durationMs,
    issues,
    score,
    grade,
    files
  };
}

module.exports = {
  auditCodebase,
  rules
};
