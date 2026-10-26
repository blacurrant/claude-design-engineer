# `claude-design-engineer`

> **Design Engineering Token System, Tactile Physics, and AI UI Slop Auditor for Claude Code and Modern Frontend Workflows.**
> Eliminate generic robotic AI code generation. Inject compositor-only animation rules (transform and opacity), specular surface depth, and organic spring micro-interactions into your codebase.

[![npm version](https://img.shields.io/badge/npm-v1.0.1-00f0ff.svg)](https://www.npmjs.com/package/@blacurrant/claude-design-engineer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author: Nishant Choudhary](https://img.shields.io/badge/Author-Nishant%20Choudhary-00f0ff.svg)](https://nishant.world)
[![Solana Sponsor](https://img.shields.io/badge/Solana-Sponsor-9945FF.svg)](https://explorer.solana.com/address/F9DJTXa6xP7mdG1niMNDhqcM3vDq8LZvg25JqJXGvDTf)

---

## Why `claude-design-engineer`?

When AI coding assistants generate frontend code, they default to predictable, robotic habits:
- Flat gray borders (`border border-zinc-800` or `border-gray-200`) with zero optical depth or specular highlights.
- Lazy blanket transitions (`transition-all duration-300 ease-in-out`) that cause layout jank on viewport resize.
- Hover states with **zero active press feedback**, making web apps feel like static cardboard rather than responsive physical software.
- Animating layout geometry (`height`, `width`, `top`, `margin`), which forces layout work on every frame and can make animations stutter on mobile.

`claude-design-engineer` provides a standardized **Design Engineering Skill** for AI agents (Claude Code, OpenBot, Cursor), accompanied by a **zero-dependency CLI & Token Preset Library** to audit and elevate any React/Tailwind/CSS project.

---

## Quick Start (Zero Install CLI)

### 1. Audit Your Codebase for AI UI Slop
Scan your components and stylesheets for robotic anti-patterns:

```bash
npx @blacurrant/claude-design-engineer audit ./src
# or with alias
npx cde audit ./src
```

### 2. Initialize Design Engineering Tokens
Inject calibrated CSS tokens and Tailwind presets into your project:

```bash
npx cde init ./src
```

This generates:
- `design-tokens/design-tokens.css`: Core CSS custom properties (asymmetric curves, specular borders, duration tiers).
- `design-tokens/tailwind-preset.js`: Drop-in Tailwind theme extension.

### 3. Eject Tactile Component Primitives
Drop pre-built components that animate only `transform` and `opacity` directly into your codebase:

```bash
npx cde eject card ./src/components      # TactileCard with pointer radial glow
npx cde eject button ./src/components    # MagneticButton with spring pull & active compression
npx cde eject drawer ./src/components    # FluidDrawer with zero layout reflow
```

---

## The 5 Design Engineering Directives

| Directive | Violation | Design Engineering Contract |
| :--- | :--- | :--- |
| **Compositor Isolation** | Animating `height`, `top`, `margin` | Only animate `transform: translate3d/scale` and `opacity`. Pre-promote with `will-change: transform`. |
| **Curve Asymmetry** | `transition-all duration-300 ease-in-out` | Enter: `cubic-bezier(0.05, 0.7, 0.1, 1)`. Exit: `cubic-bezier(0.3, 0, 0.8, 0.15)`. Fast: 150ms. |
| **Surface Depth** | Flat solid border (`border-gray-200`) | Multi-stop translucent borders with inner ambient highlight: `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]`. |
| **Micro-Compression** | Button with hover but no active state | Physical press feedback: `active:scale-[0.98]` or `active:scale-[0.96]`. |
| **Tabular Typography** | Number counter without tabular font | Enforce `tabular-nums` and `font-mono` on all prices, timers, and metrics. |

---

## Claude Code & OpenBot Skill Integration

Install as a global or project-level skill for AI coding assistants:

```bash
# Add to Claude Code or OpenBot skills directory
cp SKILL.md ~/.claude/skills/claude-design-engineer/SKILL.md
```

Once installed, simply prompt your agent:
> *"Build a settings drawer using the claude-design-engineer skill standards."*

The agent will automatically follow the compositor rules (animate only `transform` and `opacity`), specular borders, and tactile spring physics.

---

## Programmatic API

You can also import tokens and rules in Node.js scripts:

```javascript
const { auditCodebase, motion, surfaces } = require('@blacurrant/claude-design-engineer');

// Run automated audits in custom CI pipelines
const report = auditCodebase('./src/components');
console.log(`Design Score: ${report.score}/100 [Grade: ${report.grade}]`);
```

---

## Attribution & Sponsorship

Created by **Nishant Choudhary** — Design Engineer & Creative Developer specializing in GPU shaders, motion systems, and SaaS frontend architecture.

- **Portfolio**: [https://nishant.world](https://nishant.world)
- **Twitter / X**: [@nishantcy](https://x.com/nishantcy)
- **GitHub**: [@blacurrant](https://github.com/blacurrant)
- **Solana Tip Jar / Sponsor**: `F9DJTXa6xP7mdG1niMNDhqcM3vDq8LZvg25JqJXGvDTf`
