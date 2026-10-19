const Arrow = () => (
  <svg
    className="arrow-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
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
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M16 1v30M1 16h30M5.4 5.4l21.2 21.2M5.4 26.6 26.6 5.4" />
  </svg>
);
const projects = [
  {
    name: "Suchak AI",
    type: "DATA & INTELLIGENCE",
    number: "01",
    description: "Your data. A better conversation.",
    detail:
      "An AI analyst that connects enterprise data with SQL agents, dashboards, and modeling workflows. Built to make complex business questions easier to explore.",
    image: "suchak",
    tags: ["AI agents", "SQL", "Business intelligence"],
    href: "https://studio-427767455-d34c4.web.app/",
    color: "lavender",
  },
  {
    name: "LearnForge",
    type: "AI & EDUCATION",
    number: "02",
    description: "From curiosity to a learning path.",
    detail:
      "Turn a PDF, a book, or a learning goal into a structured course. Guided lessons and personalized study paths bring scattered material into focus.",
    image: "learnforge",
    tags: ["Generative AI", "Personalized learning"],
    href: "https://learnforge-28280253296.asia-south1.run.app/",
    color: "peach",
  },
  {
    name: "BeemaBot",
    type: "INSURANCE & AUTOMATION",
    number: "03",
    description: "Insurance, in plain language.",
    detail:
      "A conversational interface for understanding policies and navigating insurance workflows, with an analytics dashboard for the teams behind the service.",
    image: "beemabot",
    tags: ["Conversational AI", "Insurance"],
    href: "mailto:subasj0@gmail.com?subject=Tell%20me%20about%20BeemaBot",
    color: "mint",
  },
];

function SystemDiagram() {
  return (
    <div
      className="system-panel"
      aria-label="Diagram showing data and domain knowledge becoming useful AI tools"
    >
      <div className="panel-label">
        <span className="dot" /> THE WAY I THINK <span>FIG. 01</span>
      </div>
      <svg
        className="system-diagram"
        viewBox="0 0 560 420"
        role="img"
        aria-labelledby="diagram-title"
      >
        <title id="diagram-title">
          Connecting data, actuarial thinking, and AI to build useful systems
        </title>
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#d8d5ca" />
          </pattern>
        </defs>
        <rect width="560" height="420" fill="url(#grid)" />
        <g fill="none" stroke="#a7a99d" strokeWidth="1.5">
          <path d="M135 110H230Q280 110 280 170V215" />
          <path d="M425 110H330Q280 110 280 170" />
          <path d="M280 270V318H130V345M280 318H430V345" />
          <circle cx="280" cy="220" r="100" strokeDasharray="4 8" />
        </g>
        <g className="diagram-node">
          <rect x="45" y="66" width="180" height="70" rx="8" />
          <rect x="335" y="66" width="180" height="70" rx="8" />
        </g>
        <g className="diagram-text">
          <text x="135" y="97">
            DATA
          </text>
          <text x="135" y="118" className="diagram-small">
            signals, not noise
          </text>
          <text x="425" y="97">
            DOMAIN KNOWLEDGE
          </text>
          <text x="425" y="118" className="diagram-small">
            context matters
          </text>
        </g>
        <rect x="207" y="178" width="146" height="92" rx="12" fill="#ea542e" />
        <g fill="#fff" textAnchor="middle">
          <text x="280" y="215" fontSize="25" fontWeight="700">
            build( )
          </text>
          <text x="280" y="242" fontSize="11" letterSpacing="2">
            HUMAN + AI
          </text>
        </g>
        <g className="diagram-node">
          <rect x="55" y="345" width="150" height="45" rx="22" />
          <rect x="355" y="345" width="150" height="45" rx="22" />
        </g>
        <g className="diagram-text">
          <text x="130" y="373">
            CLEARER DECISIONS
          </text>
          <text x="430" y="373">
            USEFUL TOOLS
          </text>
        </g>
        <circle cx="280" cy="318" r="5" fill="#ea542e" />
        <circle cx="135" cy="110" r="0" />
      </svg>
      <div className="panel-footer">
        <span>Complexity in. Clarity out.</span>
        <span aria-hidden="true">↳</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="sj. — Subash Joshi home">
          sj<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#projects">Selected work</a>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#projects">Selected work</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> SUBASH JOSHI · BASED IN NEPAL
            </p>
            <h1 id="hero-title">
              Turning complex
              <br />
              problems into
              <br />
              <em>useful things.</em>
            </h1>
            <p className="hero-description">
              Actuarial thinking. AI engineering. A builder’s mindset.
              <br className="desktop-break" /> I connect data and technology to
              make work simpler.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work <Arrow />
              </a>
              <a
                className="text-link"
                href="/media/CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <SystemDiagram />
          <div className="hero-bottom">
            <span>AT THE INTERSECTION OF NUMBERS & POSSIBILITIES</span>
            <a href="#projects">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <div className="discipline-strip">
          <div className="wrap">
            <span>Actuarial science</span>
            <b aria-hidden="true">
              <Star />
            </b>
            <span>Artificial intelligence</span>
            <b aria-hidden="true">
              <Star />
            </b>
            <span>Thoughtful automation</span>
            <b aria-hidden="true">
              <Star />
            </b>
          </div>
        </div>
        <section
          className="work-section wrap section"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Ideas, made real<span>.</span>
              </h2>
            </div>
            <p>
              Tools for learning, understanding data,
              <br />
              and making insurance more accessible.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.name}
              >
                <a
                  className="project-image"
                  href={project.href}
                  target={
                    project.href.startsWith("https") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                >
                  <div className="project-image-top">
                    <span>{project.type}</span>
                    <span>{project.number}</span>
                  </div>
                  <img
                    src={`/media/${project.image}.webp`}
                    alt={`${project.name} application interface`}
                    width={project.image === "beemabot" ? 550 : 960}
                    height={
                      project.image === "beemabot"
                        ? 801
                        : project.image === "suchak"
                          ? 519
                          : 540
                    }
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-open" aria-hidden="true">
                    <Arrow />
                  </span>
                </a>
                <div className="project-content">
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <span className="mono">{project.number}</span>
                  </div>
                  <h4>{project.description}</h4>
                  <p>{project.detail}</p>
                  <ul className="tags" aria-label="Project topics">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={project.href}
                    target={
                      project.href.startsWith("https") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    {project.name === "BeemaBot"
                      ? "Let’s talk about it"
                      : "Explore the app"}{" "}
                    <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <a
            className="github-link"
            href="https://github.com/subasj0"
            target="_blank"
            rel="noreferrer"
          >
            <span>There’s more behind the scenes.</span> Find me on GitHub{" "}
            <Arrow />
          </a>
        </section>
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid section">
            <div className="about-visual">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <div className="portrait-frame">
                <img
                  src="/media/subash.webp"
                  alt="Subash Joshi seated outdoors"
                  width="680"
                  height="510"
                  loading="lazy"
                  decoding="async"
                />
                <span className="portrait-caption">
                  SUBASH JOSHI
                  <br />
                  <span>NEPAL / EVERYWHERE</span>
                </span>
              </div>
              <div className="about-note">
                <span aria-hidden="true">
                  <Star />
                </span>
                <p>
                  Curious by default.
                  <br />
                  Practical by design.
                </p>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</p>
              <h2 id="about-title">
                A head for numbers.
                <br />
                An instinct to <em>build.</em>
              </h2>
              <p>
                I’m Subash, an actuarial analyst and AI engineer based in Nepal.
                My work sits where rigorous analysis meets hands-on software
                development.
              </p>
              <p>
                At Plantsat, I work with actuarial models and data. In my
                projects, I bring that same analytical mindset to AI agents,
                learning tools, and business automation. I’m interested in
                technology that helps someone understand more, decide better, or
                get time back.
              </p>
              <div className="credentials">
                <div>
                  <span className="mono">CURRENTLY</span>
                  <a
                    href="https://plantsat.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Actuarial Analyst · Plantsat <Arrow />
                  </a>
                </div>
                <div>
                  <span className="mono">CERTIFICATION</span>
                  <span>Google Advanced Data Analytics</span>
                </div>
              </div>
              <a
                className="text-link"
                href="/media/CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                A closer look at my background <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="expertise-section wrap section"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW I CAN HELP</p>
              <h2 id="expertise-title">
                From question to solution<span>.</span>
              </h2>
            </div>
          </div>
          <div className="expertise-grid">
            {[
              [
                "01",
                "Understand the numbers",
                "Actuarial & analytics",
                "Pricing, reserving, and predictive models that turn complex data into a clearer basis for decisions.",
                "Python / SQL / Excel",
              ],
              [
                "02",
                "Build the intelligence",
                "AI systems & agents",
                "Conversational tools and AI agents that connect your data to practical, domain-specific workflows.",
                "LangGraph / ADK / React",
              ],
              [
                "03",
                "Connect the pieces",
                "Workflow automation",
                "APIs, integrations, and custom tools that reduce repetitive work and help systems work together.",
                "n8n / APIs / Docker",
              ],
            ].map(([number, title, category, detail, tools]) => (
              <article key={number}>
                <div className="expertise-icon" aria-hidden="true">
                  {number === "01" ? (
                    <Arrow />
                  ) : number === "02" ? (
                    <Star />
                  ) : (
                    "⌘"
                  )}
                </div>
                <span className="mono">
                  {number} / {category}
                </span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="tool-list">{tools}</span>
              </article>
            ))}
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap section">
            <p className="eyebrow">04 / NEXT UP: YOUR IDEA</p>
            <div className="contact-heading">
              <h2 id="contact-title">
                Something worth
                <br />
                <em>building together?</em>
              </h2>
              <a
                className="contact-arrow"
                href="mailto:subasj0@gmail.com"
                aria-label="Email Subash Joshi"
              >
                <Arrow />
              </a>
            </div>
            <div className="contact-bottom">
              <p>
                Have a tricky problem, an early idea, or a project in mind?
                <br />
                I’d love to hear about it.
              </p>
              <a href="mailto:subasj0@gmail.com">
                subasj0@gmail.com <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a className="wordmark" href="#" aria-label="sj. — Back to top">
            sj<span>.</span>
          </a>
          <p>Thoughtful systems. Useful things.</p>
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
            <a
              href="https://www.upwork.com/freelancers/~012ab7756a7bb95ca0"
              target="_blank"
              rel="noreferrer"
            >
              Upwork <Arrow />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Subash Joshi</span>
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
