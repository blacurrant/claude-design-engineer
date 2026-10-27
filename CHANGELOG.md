# Changelog

All notable changes to `@blacurrant/claude-design-engineer` are listed here.

## 1.0.2

- Added the repository, homepage, and bugs links to `package.json`, so the npm page links to the GitHub repo.
- The README npm badge now reads the live version from npm instead of static text.
- Softened the README wording on `transition-all`. It no longer claims a measured layout cost.
- Added `gallery/`: five default-output screens with the audit results (`gallery/RESULTS.md`). The folder is not in the npm package.

## 1.0.1

- `audit` on a missing path prints `Path not found` and exits 1. An empty or unscannable directory prints `No scannable files found` and exits 1. Before, both reported a clean score with exit 0.
- CDE002 now flags inline `style={{ transition: "all ... " }}`.
- The audit banner no longer claims a measured frame rate. It now lists the rules it checks.
- Removed unmeasured "120 FPS" and "18 FPS" claims from the README, SKILL.md, BLUEPRINT, and template headers.
- The help screen reads its version from `package.json`.

## 1.0.0

- First release: `cde audit`, `cde init`, and `cde eject` for card, button, and drawer templates.
- Design tokens: CSS variables, a Tailwind preset, and motion and surface token generators.
- `SKILL.md` for Claude Code and OpenBot agents.
