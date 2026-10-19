import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 1440]) {
  test(`content and navigation work without JavaScript at ${width}px`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4175");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "uncertainty.",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator("#hero-portrait")).toBeVisible();
    expect(
      await page
        .locator("#hero-portrait")
        .evaluate((img) => img.getBoundingClientRect().top),
    ).toBeLessThan(width < 760 ? 700 : 400);
    await page.evaluate(async () => {
      for (const img of document.images) {
        img.loading = "eager";
        await img.decode();
      }
    });
    await page.locator(".project-item").nth(1).locator("summary").click();
    await expect(
      page.locator(".project-item").nth(1).locator(".project-story"),
    ).toBeVisible();
    if (width < 760) {
      await page.getByLabel("Menu — Open navigation").click();
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
      page.getByRole("link", { name: /Email Subash Joshi/ }),
    ).toHaveAttribute("href", "mailto:subasj0@gmail.com");
    await context.close();
  });
}

test("pricing model calculates base, stress, and boundary scenarios", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-enhanced", "true");
  await expect(page.locator("#loss-ratio")).toHaveText("60");
  await expect(page.locator("#pure-premium")).toHaveText("NPR 6,000");
  await page.getByRole("button", { name: "Stress test" }).click();
  await expect(page.locator("#frequency-value")).toHaveText("20%");
  await expect(page.locator("#severity-value")).toHaveText("NPR 75,000");
  await expect(page.locator("#loss-ratio")).toHaveText("150");
  await expect(page.locator("#claims-total")).toHaveText("NPR 15m");
  await expect(page.locator("#pure-premium")).toHaveText("NPR 15,000");
  await expect(page.locator("#model-insight")).toContainText(
    "exceed premium by 50%",
  );
  await page.getByLabel("Claim frequency", { exact: false }).fill("30");
  await page.getByLabel("Average claim", { exact: false }).fill("100000");
  await expect(page.locator("#loss-ratio")).toHaveText("300");
  await expect(page.locator("#claims-total")).toHaveText("NPR 30m");
  await page.locator("#frequency").focus();
  await page.keyboard.press("Home");
  await page.locator("#severity").focus();
  await page.keyboard.press("Home");
  await expect(page.locator("#loss-ratio")).toHaveText("5");
  await expect(page.locator("#pure-premium")).toHaveText("NPR 500");
  await page.getByRole("button", { name: "Reset assumptions" }).click();
  await expect(page.locator("#loss-ratio")).toHaveText("60");
  await expect(
    page.getByRole("button", { name: "Base case", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("portrait switch changes the image and project panels work on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.getByRole("button", { name: "Off duty" }).click();
  await expect(page.locator("#hero-portrait")).toHaveAttribute(
    "src",
    "/media/subash.webp",
  );
  await expect(page.locator("#hero-portrait")).toHaveAttribute("srcset", "");
  await expect(page.locator("#portrait-note")).toContainText("mountains");
  await page.getByRole("button", { name: "Studio", exact: true }).click();
  await expect(page.locator("#hero-portrait")).toHaveAttribute(
    "src",
    "/media/portrait-800.webp",
  );
  await expect(page.locator("#hero-portrait")).toHaveAttribute(
    "srcset",
    /portrait-480/,
  );
  await page.locator(".project-item").nth(2).locator("summary").click();
  await expect(page.locator(".project-item[open]")).toHaveCount(1);
  await expect(
    page.locator(".project-item").nth(2).locator(".project-story"),
  ).toBeVisible();
  await page.getByLabel("Menu — Open navigation").click();
  await page
    .getByRole("navigation", { name: "Mobile navigation", exact: true })
    .getByRole("link", { name: "Playground" })
    .click();
  await expect(page).toHaveURL(/#playground$/);
  await expect(page.locator(".mobile-menu")).not.toHaveAttribute("open", "");
  expect(errors).toEqual([]);
});

test("motion can be paused and reduced-motion preference is respected", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "true");
  await page.getByRole("button", { name: "Pause motion" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "false");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "false");
  expect(
    await page
      .locator(".marquee-track")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});

test("desktop and expanded mobile states have no automated accessibility violations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Stress test" }).click();
  await page.getByLabel("Menu — Open navigation").click();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test("production only downloads lightweight enhancement JavaScript", async ({
  page,
}) => {
  const scripts: string[] = [];
  page.on("request", (request) => {
    if (request.resourceType() === "script") scripts.push(request.url());
  });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-enhanced", "true");
  expect(scripts).toHaveLength(1);
  expect(scripts[0]).toMatch(/interactions-.*\.js$/);
  const script = await page.request.get(scripts[0]);
  expect((await script.body()).length).toBeLessThan(8000);
});

test("CV, legal pages, and images are served as the correct file types", async ({
  request,
}) => {
  for (const [path, type] of [
    ["/media/CV.pdf", "application/pdf"],
    ["/privacy-policy.html", "text/html"],
    ["/terms-of-service.html", "text/html"],
    ["/media/portrait-480.webp", "image/webp"],
    ["/media/portrait-800.webp", "image/webp"],
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
