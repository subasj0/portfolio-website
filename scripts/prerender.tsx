import { readFileSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import App from "../src/App";

// Keep complete content in HTML and ship only the small interaction module.
// React is used at build time, not downloaded by production visitors.
const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json", "utf8"));
const entry = manifest["src/interactions.ts"];
if (!entry || entry.imports?.length)
  throw new Error("Expected a standalone interaction entry");
const font =
  manifest[
    "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2"
  ];
if (!font) throw new Error("Missing heading font in build manifest");
const html = readFileSync("dist/index.html", "utf8")
  .replace(
    '<div id="root"></div>',
    `<div id="root">${renderToStaticMarkup(<App />)}</div>`,
  )
  .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, "")
  .replace(
    "</head>",
    `<link rel="preload" href="/${font.file}" as="font" type="font/woff2" crossorigin></head>`,
  )
  .replace(
    "</body>",
    `<script type="module" src="/${entry.file}"></script></body>`,
  );
writeFileSync("dist/index.html", html);
console.log(`Prerendered HTML with lightweight interactions: ${entry.file}`);
