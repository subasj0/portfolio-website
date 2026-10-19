# Subash Joshi — portfolio

A responsive portfolio for actuarial analysis, AI engineering, and automation. Built with React and Vite, then prerendered to HTML so the published homepage needs **no client JavaScript**. Native links and the mobile disclosure menu also work with JavaScript disabled.

## Development

Node.js 22.12+ (validated with Node.js 24) and npm:

```sh
npm ci
npm run dev
```

No API keys, backend, or database are required. Content lives in `src/App.tsx`, styling in `src/index.css`, and static files in `public/`.

## Production

```sh
npm run lint
npm run build
npm run preview
```

The build runs Vite and then `scripts/prerender.tsx`. Deploy **dist/**, including its generated HTML. Fonts are self-hosted. Project images are lazy-loaded WebP files with explicit dimensions. The original image files remain available for social metadata and existing links. `public/_headers` supplies caching and basic security headers for Cloudflare Pages.

### Cloudflare Pages

Use build command `npm run build` and output directory `dist`, with the repository root as the build directory. The production branch and Git integration must be checked in the existing Cloudflare project; this repository does not declare them. A Git push alone is not evidence of a successful deployment.

After deployment, check the homepage, mobile navigation, `/media/CV.pdf`, `/privacy-policy.html`, and `/terms-of-service.html`. View source should contain the portfolio content and no module script. The only script is structured SEO data. Contact actions open the visitor's email application; there is no message-submission backend.

## Content and design

The visual direction uses warm paper tones, ink, orange accents, local Manrope and DM Mono fonts, and an inline SVG systems diagram. Project descriptions are based on the existing repository content; no unverified usage figures or additional credentials are claimed. The CV path is case-sensitive: `/media/CV.pdf`.

When adding interactive React components, update prerendering and hydration deliberately: production currently strips the runtime by design.

## Browser tests

```sh
npx playwright install chromium
npm test
```

For an existing Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path. Tests build the production site, then verify mobile and desktop layouts without JavaScript, navigation, images, CV and legal content types, and automated accessibility. Run `npm run lint` separately for TypeScript.
