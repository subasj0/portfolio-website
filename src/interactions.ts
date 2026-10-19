// A small enhancement layer over prerendered HTML; no client React runtime.
export function initializeInteractions() {
  if (document.documentElement.dataset.enhanced) return;
  document.documentElement.dataset.enhanced = "true";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  let motion = !reducedMotion.matches;
  const motionButton =
    document.querySelector<HTMLButtonElement>("#motion-toggle")!;
  const card = document.querySelector<HTMLElement>("#portrait-card")!;
  const setMotion = (enabled: boolean) => {
    motion = enabled;
    document.documentElement.dataset.motion = String(enabled);
    motionButton.setAttribute("aria-pressed", String(!enabled));
    document.querySelector("#motion-label")!.textContent = enabled
      ? "Pause motion"
      : "Enable motion";
    card.style.removeProperty("transform");
  };
  motionButton.hidden = false;
  setMotion(motion);
  motionButton.addEventListener("click", () => setMotion(!motion));
  reducedMotion.addEventListener("change", (event) =>
    setMotion(!event.matches),
  );

  const stage = document.querySelector<HTMLElement>("#portrait-stage")!;
  let pointerFrame = 0;
  stage.addEventListener("pointermove", (event) => {
    if (!motion || !finePointer.matches) return;
    cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      if (!motion) return;
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) rotateZ(${x * 2 + 3}deg)`;
    });
  });
  stage.addEventListener("pointerleave", () => {
    cancelAnimationFrame(pointerFrame);
    card.style.removeProperty("transform");
  });
  const portrait = document.querySelector<HTMLImageElement>("#hero-portrait")!;
  document.querySelector<HTMLElement>(".portrait-switch")!.hidden = false;
  document
    .querySelectorAll<HTMLButtonElement>("[data-portrait]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const studio = button.dataset.portrait === "studio";
        portrait.srcset = studio
          ? "/media/portrait-480.webp 480w, /media/portrait-800.webp 800w"
          : "";
        portrait.src = studio
          ? "/media/portrait-800.webp"
          : "/media/subash.webp";
        portrait.alt = studio
          ? "AI-styled editorial portrait of Subash Joshi"
          : "Subash Joshi exploring the snowy mountains of Nepal";
        portrait.classList.toggle("outside", !studio);
        document.querySelector("#portrait-caption")!.textContent = studio
          ? "THE ANALYTICAL SIDE"
          : "THE CURIOUS SIDE";
        document.querySelector("#portrait-note")!.textContent = studio
          ? "AI-styled portrait, based on my photo."
          : "Away from the models. Out in the mountains.";
        document
          .querySelectorAll<HTMLButtonElement>("[data-portrait]")
          .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      });
    });

  document.querySelector<HTMLFieldSetElement>(".lab-controls")!.disabled =
    false;
  const frequency = document.querySelector<HTMLInputElement>("#frequency")!;
  const severity = document.querySelector<HTMLInputElement>("#severity")!;
  const number = new Intl.NumberFormat("en-US");
  const updateModel = () => {
    const f = Number(frequency.value),
      s = Number(severity.value);
    const pure = (f / 100) * s,
      total = pure * 1000,
      ratio = (pure / 10000) * 100;
    document.querySelector("#frequency-value")!.textContent = `${f}%`;
    document.querySelector("#severity-value")!.textContent =
      `NPR ${number.format(s)}`;
    document.querySelector("#loss-ratio")!.textContent = number.format(
      Math.round(ratio),
    );
    document.querySelector("#pure-premium")!.textContent =
      `NPR ${number.format(Math.round(pure))}`;
    document.querySelector("#claims-total")!.textContent =
      `NPR ${number.format(total / 1000000)}m`;
    document.querySelector<HTMLElement>("#claims-bar")!.style.width =
      `${(total / 30000000) * 100}%`;
    document
      .querySelector("#risk-chart")!
      .setAttribute(
        "aria-label",
        `Expected claims cost ${number.format(total)} NPR against 10 million NPR in premiums`,
      );
    document
      .querySelector(".lab-visual")!
      .classList.toggle("over-budget", ratio > 100);
    document.querySelector("#model-insight")!.textContent =
      ratio > 100
        ? `Expected claims exceed premium by ${number.format(Math.round(ratio - 100))}%, before expenses and other costs.`
        : `Expected claims use ${number.format(Math.round(ratio))}% of premium, before expenses and other costs.`;
    document
      .querySelectorAll<HTMLButtonElement>("[data-preset]")
      .forEach((b) =>
        b.setAttribute(
          "aria-pressed",
          String(
            b.dataset.preset === "base"
              ? f === 12 && s === 50000
              : f === 20 && s === 75000,
          ),
        ),
      );
    [frequency, severity].forEach((input) =>
      input.style.setProperty(
        "--range-progress",
        `${((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100}%`,
      ),
    );
  };
  [frequency, severity].forEach((input) =>
    input.addEventListener("input", updateModel),
  );
  const setScenario = (stress: boolean) => {
    frequency.value = stress ? "20" : "12";
    severity.value = stress ? "75000" : "50000";
    updateModel();
  };
  document
    .querySelectorAll<HTMLButtonElement>("[data-preset]")
    .forEach((b) =>
      b.addEventListener("click", () =>
        setScenario(b.dataset.preset === "stress"),
      ),
    );
  document
    .querySelector("#reset-lab")!
    .addEventListener("click", () => setScenario(false));
  updateModel();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((node) => observer.observe(node));
  }
  document
    .querySelectorAll<HTMLAnchorElement>(".mobile-menu a")
    .forEach((link) =>
      link.addEventListener("click", () => {
        document.querySelector<HTMLDetailsElement>(".mobile-menu")!.open =
          false;
      }),
    );
  const copy = document.querySelector<HTMLButtonElement>("#copy-email")!;
  if (navigator.clipboard?.writeText) {
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("subasj0@gmail.com");
        copy.textContent = "Copied!";
        document.querySelector("#copy-status")!.textContent =
          "Email address copied.";
      } catch {
        copy.textContent = "Try email link";
        document.querySelector("#copy-status")!.textContent =
          "Could not copy. Use the email link instead.";
      }
    });
  }
}

if (document.querySelector("#hero-portrait")) initializeInteractions();
