import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 1440]) {
  test(`portfolio works without JavaScript at ${width}px`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4175");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "useful things.",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.locator('script:not([type="application/ld+json"])'),
    ).toHaveCount(0);
    // Force lazy images to decode so offscreen assets are covered too.
    await page.evaluate(async () => {
      for (const image of document.images) {
        image.loading = "eager";
        await image.decode();
      }
    });
    if (width < 760) {
      await page.getByLabel("Open navigation").click();
      await page
        .getByRole("navigation", { name: "Mobile navigation", exact: true })
        .getByRole("link", { name: "Selected work" })
        .click();
      await expect(page).toHaveURL(/#projects$/);
    }
    await expect(
      page.getByRole("link", { name: "Download CV" }),
    ).toHaveAttribute("href", "/media/CV.pdf");
    await expect(
      page.getByRole("link", { name: "Email Subash Joshi", exact: true }),
    ).toHaveAttribute("href", "mailto:subasj0@gmail.com");
    await context.close();
  });
}

test("homepage has no automated accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("CV, legal pages, and image assets are served as the correct file types", async ({
  request,
}) => {
  for (const [path, type] of [
    ["/media/CV.pdf", "application/pdf"],
    ["/privacy-policy.html", "text/html"],
    ["/terms-of-service.html", "text/html"],
    ["/media/subash.webp", "image/webp"],
    ["/media/suchak.webp", "image/webp"],
    ["/media/learnforge.webp", "image/webp"],
    ["/media/beemabot.webp", "image/webp"],
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain(type);
  }
});
