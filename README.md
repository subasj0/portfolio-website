# Subash Joshi — actuarial portfolio

An interactive portfolio focused on actuarial analysis, insurance, and data. Dark editorial design, an AI-styled portrait, expandable project stories, and a working pricing playground.

## Development

Node.js 22.12+ (validated with Node.js 24) and npm:

```sh
npm ci
npm run dev
```

No API keys, backend, or database are required. Content lives in `src/App.tsx`, styling in `src/index.css`, browser interactions in `src/interactions.ts`, and static assets in `public/`.

## Production architecture

```sh
npm run lint
npm run build
npm run preview
```

Vite builds the page and a standalone interaction entry. `scripts/prerender.tsx` renders complete HTML, removes the React browser entry and its module preload links, then adds only the small interaction script using Vite's manifest. Production visitors do not download React. Fonts are local; the hero portrait uses responsive WebP assets and high fetch priority. Other images are lazy-loaded.

The interaction layer provides portrait switching, bounded pointer tilt, motion controls, pricing calculations, mobile-menu closing, and clipboard copying where supported. Native project disclosures and navigation work without JavaScript. Without JavaScript, the pricing model shows its base case with disabled controls. Motion honors the visitor's OS preference and can be paused explicitly.

### Pricing playground

The model is an illustration, not a quoting engine or a client result:

- 1,000 annual policies with NPR 10,000 premium per policy.
- Frequency is expected annual claims per policy (5–30%).
- Average claim severity ranges from NPR 10,000 to NPR 100,000.
- Pure premium = frequency × average claim severity.
- Expected claims = policy count × pure premium.
- Expected loss ratio = expected claims / total premium.
- Expenses, profit, and uncertainty margins are excluded and disclosed in the UI.
- Both chart bars use the same fixed 0–30m NPR scale.

The base case (12%, NPR 50,000) gives a NPR 6,000 pure premium and 60% loss ratio. The stress case (20%, NPR 75,000) gives NPR 15,000 and 150%.

### Cloudflare deployment

Deploy **dist/** with build command `npm run build` from the repository root. Pushing `main` triggered the previous deployment, confirmed by the owner. `public/_headers` supplies cache and security headers for Cloudflare Pages. Verify each new release separately.

After deployment, check the portrait switch, project expansion, model sliders/presets, mobile menu, `/media/CV.pdf`, `/privacy-policy.html`, and `/terms-of-service.html`. Contact opens an email application; there is no message-submission backend.

### Portrait and content

The hero is an AI-styled editorial portrait generated from the owner's existing photo with permission. The UI identifies it as AI-styled. “Off duty” switches to the actual original mountain photo. Responsive derivatives are `portrait-480.webp` and `portrait-800.webp`; `subash.webp` is the original-photo derivative. Existing original assets are preserved.

Professional claims remain based on existing portfolio content: Actuarial Analyst at Plantsat, Google Advanced Data Analytics, and the documented projects. No additional qualifications, client outcomes, or employment history are invented. The CV path is case-sensitive: `/media/CV.pdf`.

## Browser tests

```sh
npx playwright install chromium
npm test
```

To use an installed Chromium, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable. Tests cover desktop/mobile layouts with JavaScript disabled, portrait switching, project disclosures, model calculations and boundaries, keyboard inputs, reduced motion, accessibility in desktop/mobile states, asset types, and the production JavaScript budget. Run `npm run lint` separately for TypeScript.
