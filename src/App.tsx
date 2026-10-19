const Arrow = ({ down = false }: { down?: boolean }) => (
  <svg
    className={`arrow-icon ${down ? "down" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M5 19 19 5M5 5h14v14" />
  </svg>
);
const Star = () => (
  <svg
    className="star-icon"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6 26.6 5.4" />
  </svg>
);

const projects = [
  {
    name: "BeemaBot",
    discipline: "INSURANCE / CONVERSATIONAL AI",
    number: "01",
    description: "Making the fine print a conversation.",
    detail:
      "Insurance is only useful when people understand it. BeemaBot explores a more approachable way to explain policies, support customers, and connect insurance workflows.",
    image: "beemabot",
    width: 550,
    height: 801,
    tags: ["Policy understanding", "Insurance workflows", "Conversational AI"],
    href: "mailto:subasj0@gmail.com?subject=Tell%20me%20about%20BeemaBot",
    action: "Discuss the project",
    color: "lime",
  },
  {
    name: "Suchak AI",
    discipline: "ANALYTICS / DECISION SUPPORT",
    number: "02",
    description: "From a mountain of data to a clearer answer.",
    detail:
      "An AI analyst for enterprise data: SQL agents, dashboards, and modeling workflows in one place. Built around the questions people need to answer, not just the charts they can create.",
    image: "suchak",
    width: 960,
    height: 519,
    tags: ["Data exploration", "SQL agents", "Business intelligence"],
    href: "https://studio-427767455-d34c4.web.app/",
    action: "Explore the app",
    color: "lavender",
  },
  {
    name: "LearnForge",
    discipline: "SIDE PROJECT / LEARNING",
    number: "03",
    description: "Curiosity deserves a little structure.",
    detail:
      "A learning experiment that turns a book, PDF, or learning goal into a structured course. Guided lessons and personalized study paths help turn a pile of material into a place to start.",
    image: "learnforge",
    width: 960,
    height: 540,
    tags: ["Generative AI", "Personalized learning", "Product thinking"],
    href: "https://learnforge-28280253296.asia-south1.run.app/",
    action: "Explore the app",
    color: "peach",
  },
];

function RiskLab() {
  return (
    <section
      className="lab-section section"
      id="playground"
      aria-labelledby="lab-title"
    >
      <div className="wrap">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">02 / A LITTLE APPLIED CURIOSITY</p>
            <h2 id="lab-title">
              Small changes.
              <br />
              <em>Different outcomes.</em>
            </h2>
          </div>
          <p>
            Risk isn’t a single number.
            <br />
            Move the assumptions. Watch the story change.
          </p>
        </div>
        <div className="risk-lab reveal">
          <fieldset className="lab-controls" disabled>
            <legend className="sr-only">Pricing model assumptions</legend>
            <div className="lab-topline">
              <span className="live-dot" /> INTERACTIVE / PRICING LAB
            </div>
            <h3>What does risk cost?</h3>
            <p>
              Start with two ingredients: how often a claim happens, and how
              much it costs.
            </p>
            <div
              className="presets"
              role="group"
              aria-label="Pricing scenarios"
            >
              <button type="button" data-preset="base" aria-pressed="true">
                Base case
              </button>
              <button type="button" data-preset="stress" aria-pressed="false">
                Stress test <span aria-hidden="true">↗</span>
              </button>
            </div>
            <label className="range-label" htmlFor="frequency">
              Claim frequency{" "}
              <output id="frequency-value" htmlFor="frequency">
                12%
              </output>
            </label>
            <input
              id="frequency"
              name="frequency"
              type="range"
              min="5"
              max="30"
              step="1"
              defaultValue="12"
              aria-describedby="frequency-help"
            />
            <p className="range-help" id="frequency-help">
              Expected claims per 100 policies per year
            </p>
            <label className="range-label" htmlFor="severity">
              Average claim{" "}
              <output id="severity-value" htmlFor="severity">
                NPR 50,000
              </output>
            </label>
            <input
              id="severity"
              name="severity"
              type="range"
              min="10000"
              max="100000"
              step="5000"
              defaultValue="50000"
              aria-describedby="severity-help"
            />
            <p className="range-help" id="severity-help">
              Average cost of each claim, in Nepalese rupees
            </p>
            <button type="button" className="reset-lab" id="reset-lab">
              Reset assumptions <span aria-hidden="true">↺</span>
            </button>
            <noscript>
              <p className="no-js-note">
                Enable JavaScript to adjust this illustrative model. The base
                case is shown.
              </p>
            </noscript>
          </fieldset>
          <div className="lab-visual">
            <div className="lab-visual-heading">
              <span className="eyebrow">EXPECTED CLAIMS / PREMIUM</span>
              <span className="model-badge">ILLUSTRATIVE MODEL</span>
            </div>
            <div className="ratio-readout">
              <span id="loss-ratio">60</span>
              <span className="ratio-unit">
                %<small>expected loss ratio</small>
              </span>
            </div>
            <div
              className="risk-chart"
              role="img"
              aria-label="Expected claims cost 6 million NPR against 10 million NPR in premiums"
              id="risk-chart"
            >
              <div className="chart-grid" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="bar-row">
                <span>Premium</span>
                <div className="bar-track">
                  <div className="premium-bar" style={{ width: "33.333%" }} />
                  <span>NPR 10m</span>
                </div>
              </div>
              <div className="bar-row">
                <span>Claims</span>
                <div className="bar-track">
                  <div
                    className="claims-bar"
                    id="claims-bar"
                    style={{ width: "20%" }}
                  />
                  <span id="claims-total">NPR 6m</span>
                </div>
              </div>
              <div className="chart-axis">
                <span>0</span>
                <span>NPR 30m</span>
              </div>
            </div>
            <div className="lab-results" aria-live="polite" aria-atomic="true">
              <div>
                <span>PURE PREMIUM / POLICY</span>
                <strong id="pure-premium">NPR 6,000</strong>
              </div>
              <p id="model-insight">
                Expected claims use 60% of premium, before expenses and other
                costs.
              </p>
            </div>
            <p className="lab-footnote">
              1,000 policies · NPR 10,000 premium per policy · Annual view
              <br />
              Frequency × average claim = expected cost per policy. Simplified
              illustration, excluding expenses, profit, and uncertainty margins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header wrap">
        <a href="#" className="wordmark" aria-label="sj. — Subash Joshi home">
          sj<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#projects">
            Work <span>01</span>
          </a>
          <a href="#playground">
            Playground <span>02</span>
          </a>
          <a href="#about">
            About <span>03</span>
          </a>
        </nav>
        <div className="header-actions">
          <button
            id="motion-toggle"
            className="motion-toggle"
            type="button"
            aria-pressed="false"
            hidden
          >
            <span className="motion-symbol" aria-hidden="true">
              <svg
                viewBox="0 0 12 12"
                width="12"
                height="12"
                fill="currentColor"
              >
                <path className="pause-symbol" d="M2 2h2v8H2zm6 0h2v8H8z" />
                <path className="play-symbol" d="m3 1 8 5-8 5z" />
              </svg>
            </span>
            <span id="motion-label">Pause motion</span>
          </button>
          <a href="#contact" className="header-contact">
            Let’s talk <Arrow />
          </a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Menu — Open navigation">
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#projects">Selected work</a>
            <a href="#playground">Playground</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-meta">
            <span className="eyebrow">
              <span className="live-dot" /> SUBASH JOSHI / ACTUARIAL ANALYST
            </span>
            <span className="eyebrow">
              BASED IN NEPAL <span aria-hidden="true">↗</span>
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-intro">
                A head for numbers. An instinct to question.
              </p>
              <h1 id="hero-title">
                Making sense
                <br />
                of <em>uncertainty.</em>
              </h1>
              <p className="hero-description">
                I connect actuarial thinking, data, and a builder’s mindset to
                turn complex risks into clearer decisions.
              </p>
              <div className="hero-actions">
                <a className="button" href="#projects">
                  Discover my work <Arrow />
                </a>
                <a className="text-link" href="#playground">
                  Play with the numbers <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-specialties">
                <span>PRICING</span>
                <i />
                <span>RESERVING</span>
                <i />
                <span>ANALYTICS</span>
              </div>
            </div>
            <div className="portrait-stage" id="portrait-stage">
              <div className="portrait-orbit" aria-hidden="true" />
              <div className="portrait-cross cross-one" aria-hidden="true">
                +
              </div>
              <div className="portrait-cross cross-two" aria-hidden="true">
                +
              </div>
              <div className="portrait-card" id="portrait-card">
                <img
                  id="hero-portrait"
                  src="/media/portrait-800.webp"
                  srcSet="/media/portrait-480.webp 480w, /media/portrait-800.webp 800w"
                  sizes="(max-width: 760px) 86vw, 38vw"
                  width="800"
                  height="1000"
                  alt="AI-styled editorial portrait of Subash Joshi"
                  fetchPriority="high"
                />
                <div className="portrait-card-footer">
                  <span>SUBASH JOSHI</span>
                  <span id="portrait-caption">THE ANALYTICAL SIDE</span>
                </div>
              </div>
              <div className="portrait-sticker" aria-hidden="true">
                <Star />
                <span>
                  CURIOUS
                  <br />
                  BY DEFAULT.
                </span>
              </div>
              <div
                className="portrait-switch"
                role="group"
                aria-label="Portrait style"
                hidden
              >
                <button
                  type="button"
                  data-portrait="studio"
                  aria-pressed="true"
                >
                  Studio
                </button>
                <button
                  type="button"
                  data-portrait="outside"
                  aria-pressed="false"
                >
                  Off duty <Arrow />
                </button>
              </div>
              <p className="portrait-note" id="portrait-note">
                AI-styled portrait, based on my photo.
              </p>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              <span className="index-mark">↳</span> LESS GUESSWORK. MORE
              PERSPECTIVE.
            </span>
            <a href="#projects">
              TAKE A LOOK AROUND <Arrow down />
            </a>
          </div>
        </section>
        <div
          className="marquee"
          aria-label="Actuarial thinking, data curiosity, human perspective"
        >
          <div className="marquee-track">
            {[0, 1].map((i) => (
              <div
                className="marquee-group"
                key={i}
                aria-hidden={i === 1 ? true : undefined}
              >
                <span>Actuarial thinking</span>
                <Star />
                <span>Data curiosity</span>
                <Star />
                <span>Human perspective</span>
                <Star />
              </div>
            ))}
          </div>
        </div>
        <section
          className="work-section wrap section"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / SELECTED EXPLORATIONS</p>
              <h2 id="work-title">
                Thinking is good.
                <br />
                <em>Making is better.</em>
              </h2>
            </div>
            <p>
              A few ways I’ve turned questions into tools.
              <br />
              Insurance first. Curiosity everywhere.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((p, index) => (
              <details
                className={`project-item ${p.color} reveal`}
                key={p.name}
                name="selected-project"
                open={index === 0}
              >
                <summary>
                  <span className="project-number">{p.number}</span>
                  <h3>{p.name}</h3>
                  <span className="project-discipline">{p.discipline}</span>
                  <span className="project-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="project-expanded">
                  <div className={`project-preview ${p.image}`}>
                    <div className="preview-grid" aria-hidden="true" />
                    <span className="preview-caption">
                      {p.discipline.split(" / ")[0]} / IN PRACTICE
                    </span>
                    <img
                      src={`/media/${p.image}.webp`}
                      alt={`${p.name} application interface`}
                      width={p.width}
                      height={p.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="preview-stamp" aria-hidden="true">
                      <Star />
                    </span>
                  </div>
                  <div className="project-story">
                    <p className="eyebrow">THE IDEA</p>
                    <h4>{p.description}</h4>
                    <p>{p.detail}</p>
                    <ul className="tags" aria-label="Project topics">
                      {p.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={p.href}
                      target={p.href.startsWith("https") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {p.action}
                      <Arrow />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <a
            className="github-link"
            href="https://github.com/subasj0"
            target="_blank"
            rel="noreferrer"
          >
            <span>More experiments, less polish.</span> Behind the scenes on
            GitHub <Arrow />
          </a>
        </section>
        <RiskLab />
        <section
          className="about-section wrap section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-heading reveal">
            <p className="eyebrow">03 / THE WAY I SEE IT</p>
            <h2 id="about-title">
              The model matters.
              <br />
              <em>So does the judgment.</em>
            </h2>
            <div className="about-signature">
              Subash Joshi <Star />
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="about-lead">
              I’m an actuarial analyst who likes to get beyond the spreadsheet.
            </p>
            <p>
              Based in Nepal and working at Plantsat, I bring an analytical lens
              to insurance: understanding risk, questioning assumptions, and
              finding the story in the data.
            </p>
            <p>
              My interests span non-life pricing, reserving, and predictive
              modeling. I also build tools, because good analysis becomes more
              useful when people can actually work with it.
            </p>
            <p>
              AI and automation are part of that toolkit. The goal stays the
              same: clearer thinking and better-informed decisions.
            </p>
            <div className="credentials">
              <div>
                <span>CURRENTLY</span>
                <a href="https://plantsat.com" target="_blank" rel="noreferrer">
                  Actuarial Analyst · Plantsat <Arrow />
                </a>
              </div>
              <div>
                <span>ALSO IN THE TOOLKIT</span>
                <p>Google Advanced Data Analytics</p>
              </div>
            </div>
            <a
              className="text-link"
              href="/media/CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          className="expertise-section wrap"
          id="expertise"
          aria-label="Areas of focus"
        >
          {[
            [
              "01",
              "Price the risk.",
              "Non-life pricing",
              "Frequency and severity analysis, segmentation, and predictive modeling to understand the cost of risk.",
            ],
            [
              "02",
              "Look ahead.",
              "Reserving & uncertainty",
              "Claims development, reserve estimates, and scenario analysis to explore what the numbers might become.",
            ],
            [
              "03",
              "Make it useful.",
              "Analytics & tools",
              "Clear dashboards, practical models, and thoughtful automation that bring analysis into everyday decisions.",
            ],
          ].map(([n, title, label, text]) => (
            <article className="expertise-card reveal" key={n}>
              <div className="expertise-top">
                <span>
                  {n} / {label}
                </span>
                <Star />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap section">
            <p className="eyebrow reveal">
              04 / GOOD WORK STARTS WITH A CONVERSATION
            </p>
            <a
              href="mailto:subasj0@gmail.com"
              className="contact-heading reveal"
              aria-label="Let’s make sense of it. — Email Subash Joshi"
            >
              <h2 id="contact-title">
                Let’s make
                <br />
                sense of it<span>.</span>
              </h2>
              <span className="contact-arrow">
                <Arrow />
              </span>
            </a>
            <div className="contact-bottom">
              <p>
                A risk question, a data challenge, or something
                <br />
                you haven’t quite figured out yet. I’m listening.
              </p>
              <div className="email-actions">
                <a href="mailto:subasj0@gmail.com">
                  subasj0@gmail.com <Arrow />
                </a>
                <button
                  id="copy-email"
                  type="button"
                  hidden
                  aria-label="Copy email address"
                >
                  Copy
                </button>
                <span id="copy-status" className="sr-only" role="status" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a href="#" className="wordmark" aria-label="sj. — Back to top">
            sj<span>.</span>
          </a>
          <p>Analytical mind. Curious human.</p>
          <nav aria-label="Social links">
            <a
              href="https://github.com/subasj0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/subash-joshi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a href="/media/CV.pdf" target="_blank" rel="noreferrer">
              Résumé <Arrow />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SUBASH JOSHI / MADE WITH INTENTION
          </span>
          <div>
            <a href="/privacy-policy.html">Privacy</a>
            <a href="/terms-of-service.html">Terms</a>
            <a href="#">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
