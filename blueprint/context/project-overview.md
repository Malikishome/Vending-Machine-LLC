# Pop & Drop Vending - Project Overview

> Marketing and lead-capture site for a real Orlando, FL vending machine
> business.

## Problem

Pop & Drop Vending had no dedicated web presence for potential host
locations to learn about the service or request a machine. This site is the
company's primary web presence: it explains the offering and captures leads
from businesses that want a vending machine installed on-site.

## Users

- **Prospective host businesses** - decision-makers at offices, apartment
  complexes, gyms, warehouses, schools, and hospitals considering hosting a
  vending machine. They browse the site and submit the request form.
- **Pop & Drop team** - receives each submission as an email notification
  and via the `leads` table; no login or dashboard exists yet.

No access tiers - the whole site is public/anonymous.

## Features

1. **Landing page shell** - responsive nav with hamburger menu, hero
   section, footer with payment-method badges. *(shipped)*
2. **About/FAQ section** - animated accordion content. *(shipped)*
3. **Why choose us section** - value-proposition content. *(shipped)*
4. **Service-area locations** - cards by location type (office, gym,
   apartment, warehouse, school, hospital). *(shipped)*
5. **Lead capture form** - the headline feature. Validated multi-field
   request form with phone-number formatting, loading/success states,
   Supabase `leads` persistence, and an EmailJS notification email.
   *(shipped)*
6. **Production deployment** - choose a host (Render or Vercel), set
   build/start config and env vars, verify the production build, ship to a
   real domain. *(next)*
7. **Expand site content** - additional location entries, testimonials or
   pricing/FAQ content. *(planned)*

## Data model

### Lead

Inserted into Supabase Postgres table `leads` from the request form
(`RequestMachineForm.jsx`).

- `company_name` (string, required) - the requesting business's name
- `name` (string, required) - contact person's name
- `email` (string, required) - contact email
- `phone` (string, required) - formatted client-side as `(XXX) XXX-XXXX`
  before insert
- `reason` (string, required) - one of `request-machine`,
  `customer-support`, `partnership`, `other`
- `message` (string, optional) - free-text details
- `created_at` (timestamp, database-set) - not sent from the client; used
  for lead triage ordering

No relationships; single flat table. No auth, no user accounts.

## Tech stack

- **React 19 + Vite 7** - frontend framework and build tool (JavaScript,
  not TypeScript)
- **Tailwind CSS v4** - styling, CSS-first config (no `tailwind.config.js`)
- **Supabase** (`@supabase/supabase-js`) - Postgres persistence for the
  `leads` table, called directly from components (no backend/API layer)
- **EmailJS** (`@emailjs/browser`) - sends the lead-notification email
  directly from the client after a successful Supabase insert
- **motion** - section-level animation, paired with a custom
  `useScrollEffect` hook for scroll-triggered fade/slide-in
- **react-icons** - iconography
- **ESLint** (flat config, `react-hooks` + `react-refresh` plugins) - the
  only configured lint/quality gate; no test runner yet

Client-side env vars (Vite-style, `import.meta.env.VITE_*`):
`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_EMAILJS_SERVICE_ID`,
`VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

## Monetization

Not in the site itself. The business makes money by placing vending
machines at partner/host locations and taking a revenue share of on-site
vending sales. This site exists to generate leads for that placement
pipeline.

## UI/UX

Warm, professional small-business look: amber accent color on a gray/white
base, `font-serif` for headings and form copy, rounded-2xl cards with soft
shadows, scroll-triggered fade/slide-in animations per section, mobile-first
responsive layout with a hamburger nav.

Single-page app, one route (`/`), composed as an ordered stack of sections
in `App.jsx`: nav, hero, about, why-choose-us, locations, request form,
footer.

## Deployment

> TODO: not yet deployed. No host, build/start command, or domain has been
> chosen. Production deployment is build-plan item 6 - run `/release` when
> ready to configure Render or Vercel.

Known build inputs for whichever host is chosen:
- App type: static frontend (Vite build output, no server runtime needed)
- Build command: `npm run build` (run from `PopNDrop/`)
- Output directory: `PopNDrop/dist`
- Env vars: the five `VITE_*` vars listed under Tech stack, set at build
  time
- No database/storage to provision beyond the existing Supabase project
- No workers, cron jobs, or health-check path (static site)
