# Feature: Production deployment (Vercel)

**From build-plan:** feature 6
**Status:** not started

## Goal

Get Pop & Drop Vending's site ready to run in production on Vercel, on a
provider-issued subdomain (no custom domain yet). The site is a static
Vite/React build with no server runtime, so "deployment" here means: correct
Vercel project configuration for the `PopNDrop/` subdirectory, a verified
production build, and a documented runbook for the parts that only happen
inside the Vercel dashboard (connecting the repo, entering env vars,
clicking deploy) - those are outside what this session can execute, since
they require your Vercel account.

## In scope

- Vercel project configuration (`vercel.json`) so Vercel builds the app out
  of `PopNDrop/` instead of the repo root
- Local verification that the production build (`npm run build` +
  `npm run preview`) actually works with real env vars, before trusting
  Vercel to build it
- A short deployment runbook documenting the exact manual steps (import
  repo, set env vars, deploy) so nothing gets missed or improvised
- Fixing the currently-uncommitted `console.log` removal in
  `supabaseClient.js` so debug output doesn't ship to production

## Out of scope

- Custom domain setup (deferred; provider subdomain is fine for now per
  project-overview.md)
- Actually creating the Vercel project, entering env vars in its dashboard,
  or clicking deploy - these require your Vercel account and happen outside
  this repo; the runbook in step 3 documents them, you execute them
- CI/automatic GitHub checks (`/ci`, separate from this feature)
- Any new site content (build-plan item 7)

## Build loop

Build one step at a time, never the whole feature at once.

1. Plan mode lays out the step before any code.
2. The AI implements just that step.
3. It shows the diff (not full files); you read it and understand it.
4. You approve, then choose whether to commit a checkpoint or roll straight on.
   Checkpoints are optional; `/complete` makes the real feature-level commit at the end.

Never accept a step you haven't read. If a diff is too big to review, the step was too big, so split it.

## Build steps

- [ ] **Step 1 - Remove debug logging from supabaseClient.js** - commit the
  already-made-but-uncommitted removal of the two `console.log` lines that
  print the Supabase URL/key on load. *Done when:* `git diff` shows no
  pending changes to `supabaseClient.js` and the file has no `console.log`
  calls.
- [ ] **Step 2 - Add vercel.json for the PopNDrop subdirectory** - add a
  `vercel.json` at the repo root (Vercel reads config from the repo root,
  not a subfolder) that sets the framework to Vite and points build/output
  at `PopNDrop/`: build command `cd PopNDrop && npm install && npm run
  build`, output directory `PopNDrop/dist`. *Done when:* `vercel.json`
  exists at repo root with those values, and `npm run build` still succeeds
  when run directly inside `PopNDrop/` (config doesn't change local dev).
- [ ] **Step 3 - Verify the production build locally** - run `npm run
  build` then `npm run preview` inside `PopNDrop/` with the real `.env`
  values present, and load the preview URL in a browser. Confirm the page
  renders fully (hero through footer), the request form still submits to
  Supabase successfully, and there are no console errors. *Done when:* a
  full page screenshot of the preview build shows the site rendering
  correctly, and a test form submission succeeds with no console errors.
- [ ] **Step 4 - Write the deployment runbook** - add
  `blueprint/context/deploy-runbook.md` with the exact manual steps to
  finish deployment in the Vercel dashboard: import the GitHub repo
  (`Malikishome/Vending-Machine-LLC`), confirm Root Directory reads from
  `vercel.json`, add the five `VITE_*` env vars (names only, no values) for
  Production, then deploy. *Done when:* the runbook file exists and lists
  every env var name and every dashboard step needed to go from "repo
  imported" to "live on a vercel.app subdomain."

## Files / areas

- `PopNDrop/src/supabaseClient.js` - remove debug logging
- `vercel.json` (new, repo root) - build/output config
- `blueprint/context/deploy-runbook.md` (new) - manual deployment steps

## Data / contracts

None - no schema or API shape changes. Env var names are already locked in
`project-overview.md` (Tech stack section); this feature doesn't add or
rename any.

## Testing

No test runner is configured (`coding-standards.md`), so this rides on
build and browser evidence, not unit tests:

- Step 1: `git diff` / grep evidence, no test needed (removes dead code).
- Step 2: build must still succeed locally after adding `vercel.json`
  (`npm run build` in `PopNDrop/`).
- Step 3: screenshot of the local production preview, plus a real form
  submission proving Supabase + EmailJS still work in the production
  build (not just dev mode).
- Step 4: documentation step, verified by review (are the steps complete
  and accurate), not by running code.

## Notes for the AI

- `vercel.json` lives at the **repo root**, not inside `PopNDrop/` - Vercel
  looks for it at the root of the connected repo regardless of where the
  app code lives.
- Don't attempt to run `vercel` CLI commands, create a Vercel project, log
  into any account, or push/deploy anything - none of that is reachable
  from this session. Step 4's runbook is where those actions get handed
  off to the user.
- Never commit `.env` or print its values; only variable *names* belong in
  the runbook.
- Step 3's local preview must use the real `.env` (already gitignored in
  `PopNDrop/`) so the check reflects a real production build, not a stub.
