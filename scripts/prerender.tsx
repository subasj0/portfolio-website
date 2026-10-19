import { readFileSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import App from "../src/App";

// This portfolio uses native links and a native disclosure menu. Ship HTML, not a
// React runtime: content is immediately visible and works with JavaScript off.
const template = readFileSync("dist/index.html", "utf8");
const html = template
  .replace(
    '<div id="root"></div>',
    `<div id="root">${renderToStaticMarkup(<App />)}</div>`,
  )
  .replace(/\s*<script type="module"[^>]*><\/script>/g, "");
writeFileSync("dist/index.html", html);
console.log("Prerendered portfolio: complete HTML, zero client JavaScript.");
