# Design

## Brand

- Public name: **Miguel Calzada**
- Wordmark: `CALZADA.` with a cobalt period
- Descriptor: `Software & Data Systems`
- Positioning: software, datos e IA que llegan a producción
- Voice: first person, short sentences, concrete nouns, no hype

## World

A production record, not a showcase of effects. Ink on paper, technical metadata, editorial scale and one cobalt signal. The interface recedes; the work and the record lead.

Anti-reference: the previous neo-brutalist orange/paper portfolio, the typographic brand monolith, the generic project-card grid and the chatbot-first identity.

## Color

| Token | Value | Use |
|---|---|---|
| `--ink` | `#10110F` | Primary text, dark fields, rules |
| `--paper` | `#E9E5DA` | Page ground |
| `--chalk` | `#F7F4EB` | Raised surfaces, assistant, plates |
| `--cobalt` | `#1937FF` | Primary accent, links, focus, action |
| `--oxide` | `#A33A22` | Secondary accent / counterpoint |
| `--graphite` | `#45463F` | Secondary text and metadata |
| `--line` | `rgba(16,17,15,0.16)` | Hairline rules |
| `--line-strong` | `rgba(16,17,15,0.38)` | Stronger dividers and borders |
| `--line-inverse` | `rgba(233,229,218,0.18)` | Rules on ink |
| `--success` | `#2F6B4F` | Public status |

Rules:
- No gradients, glass, purple/pink AI palettes, or decorative blobs.
- Cobalt is an accent, not a background wash, except for primary actions and the contact email hover.
- Text on paper uses ink or graphite. Text on ink uses paper or chalk.
- Focus rings are cobalt on light surfaces and chalk on dark surfaces.

## Typography

- Display: **Gloock** — headlines, project titles, email, monogram context.
- Text: **Archivo** — body, navigation, controls, long copy.
- Data: **IBM Plex Mono** — dates, indices, stacks, statuses, technical labels.
- Body base: 18px desktop, 16px mobile; line-height 1.55.
- Display tracking floor: `-0.035em`; headings are balanced, never hyphenated.
- Mono is reserved for real data and measurement, never for decorative “technical” copy.

## Grid and spacing

- 12-column grid, fluid gutters, max width 1440px.
- Section padding: `clamp(5rem, 10vw, 10rem)`.
- Page gutter: `clamp(1.25rem, 4vw, 5rem)`.
- Asymmetric compositions: 7/5, 8/4, 5/7.
- Hairline rules define rhythm; cards do not.
- Radius: 0.
- Depth: a single soft float shadow for overlays (`0 30px 80px rgba(16,17,15,0.16)`); no hard offset shadows.

## Components

- **Masthead**: sticky, 72px desktop / 64px mobile, brand, descriptor, nav, availability and index trigger.
- **Index overlay**: full-screen ink field, large editorial nav, system list and contact; focus trap and Escape close.
- **Hero**: 8/4 split; three-line claim, factual line, primary action, intro, availability and a four-row public-system register.
- **Ledger**: project rows with number, name, domain, status and arrow; preview plate on desktop; thumbnail inline on mobile.
- **Section head**: heading and short intro; no kicker and no decorative section numbers.
- **Practice**: sticky heading and four capability rows with hairline separators.
- **Record**: job and education ledger with dates, locations, tags and availability.
- **Dossier**: project header, facts, full-bleed screenshot, context, features, architecture, decisions, stack and next system.
- **Contact**: ink field, large email, direct channels and availability.
- **Assistant**: fixed ink-bordered panel, bot/user messages, suggestions, input, pending state and Escape close.

## Motion

- Page transition: 360ms fade and 10px rise with `cubic-bezier(0.16,1,0.3,1)`.
- Hero claim: three clipped lines rise in sequence, 900ms each, 80ms stagger.
- Scroll reveals: 700ms opacity + 18px rise, once per section.
- Ledger preview: 200ms crossfade; no layout shift.
- Micro-interactions: 180ms for color, border and small transforms.
- Motion is transform/opacity only; no scroll hijacking, canvas or WebGL.
- `prefers-reduced-motion`: no entrance, no page fade, no transition; final states immediately.

## Accessibility

- WCAG 2.2 AA target.
- Contrast: ink/paper 15.04:1, cobalt/paper 5.5:1, white/cobalt 6.93:1, graphite/paper 7.58:1.
- Semantic landmarks, one `h1` per page, ordered headings.
- Skip link to `#main`; `main` is focusable.
- Visible focus, keyboard-operable index overlay, focus trap and Escape.
- Alt text for project screenshots; decorative marks are hidden from assistive tech.
- Minimum 44px touch targets for primary controls.
- Responsive at 375, 768, 1024 and 1440; no horizontal overflow.

## Routes

- `/` — home
- `/work` — system index
- `/work/[slug]` — dossiers: impactdb, ai-lab, sqlsense, madrid-transit
- `/about` — profile, experience, education, principles
- `/contact` — direct contact
- Existing demos remain at `/impactdb`, `/ai-lab`, `/sqlsense`, `/madrid-transit`.

## Content rules

- `content.md` is the source of truth.
- Do not invent role, outcomes, clients, testimonials, services or metrics.
- Omit missing facts instead of filling them with placeholders.
- The four project dossiers use documented features, architecture and stack only.
- The assistant is retained and answers from the documented FAQ.
