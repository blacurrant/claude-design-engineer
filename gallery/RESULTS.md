# Slop gallery: plain default output vs the auditor

Five screens, written as a plain Claude would by default (React + Tailwind), from short prompts. No audit hints were given while writing them. Each file was audited with `npx @blacurrant/claude-design-engineer@latest audit <file>` (published 1.0.1). Raw CLI output is in `raw/`.

| Screen | Prompt used | File | Score | Grade | Errors | Warnings | Info |
| :--- | :--- | :--- | ---: | :---: | ---: | ---: | ---: |
| Pricing page | "a pricing page" | `pricing-page.jsx` | 34 | F | 2 | 3 | 0 |
| Dashboard | "a dashboard" | `dashboard.jsx` | 0 | F | 5 | 6 | 4 |
| Settings page | "a settings page" | `settings-page.jsx` | 0 | F | 5 | 5 | 0 |
| Login page | "a login page" | `login-page.jsx` | 32 | F | 1 | 5 | 0 |
| Landing page | "a landing page for a productivity app" | `landing-productivity.jsx` | 0 | F | 7 | 8 | 0 |

## Flags by rule

| Screen | CDE001 border | CDE002 transition | CDE003 active feedback | CDE004 layout anim | CDE005 tabular nums |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Pricing page | 2 | 2 | 1 | 0 | 0 |
| Dashboard | 2 | 5 | 4 | 0 | 4 |
| Settings page | 4 | 5 | 1 | 0 | 0 |
| Login page | 2 | 1 | 3 | 0 | 0 |
| Landing page | 2 | 7 | 6 | 0 | 0 |

CDE004 (layout animation) never fired. None of the five screens animates `height`, `width`, `top`, or `margin`.

## Reference points

- Bad fixture in the repo (`tests/fixtures/bad-component.jsx`): 40/100 F.
- Good fixture in the repo (`tests/fixtures/good-component.jsx`): 100/100 S, 0 violations.

## Verdict

Mostly dull. Every screen grades F, and two screens hit 0/100. The reason is predictable: `transition-all` (CDE002) and hover without `active:` (CDE003) appear on nearly every interactive element a default Tailwind build produces. Each error costs 18 points and each warning 10, so the score mostly counts how many buttons and links there are. It says little about how the screen looks. The one screen that scores higher (pricing, 34) has fewer interactive elements per screen, not better design.

## Caveats

- The gallery files were written by the same model family the skill targets, so this is one sample of default output, not a survey.
- Scores depend on the weights in `src/auditor/index.js`. Changing them changes every grade.
- The CDE002 message says `transition-all` "triggers layout calculations". That is not measured here. Treat it as the rule's opinion.
- The raw outputs are kept unedited. The prompts were not tuned to get any score.

## Post image

`post-capture-bad-vs-good.txt` is a text capture of the landing page audit (0/100, 7 errors) beside the repo's good fixture (100/100 S). The good side is the existing fixture, not a rewrite of the landing page, so it is not a like-for-like redesign. No PNG was rendered.
