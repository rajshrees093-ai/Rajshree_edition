
import Image from "next/image";

const projects = [
  {
    category: "ARTIFICIAL INTELLIGENCE · MACHINE LEARNING",
    title: "Sentinel",
    subtitle: "Finding the unusual, before it becomes a problem.",
    description:
      "An AI-powered credit card fraud detection system that explores anomaly detection to identify suspicious transactions and make digital payments safer.",
    technologies: ["Python", "FastAPI", "Next.js", "Supabase", "Machine Learning"],
    visual: "sentinel",
    visualLabel: "Fraud Detection Dashboard",
  },
  {
    category: "FULL STACK DEVELOPMENT",
    title: "FocusFlow",
    subtitle: "A little more focus. A little less chaos.",
    description:
      "A productivity application designed to help users organise their work, manage tasks and build better focus habits through a clean and interactive experience.",
    technologies: ["React", "Vite", "Node.js", "Express", "Claude API"],
    visual: "focusflow",
    visualLabel: "Productivity Workspace",
  },
  {
    category: "GENERATIVE AI",
    title: "Story Generator",
    subtitle: "Turning imagination into visual stories.",
    description:
      "A text-to-image story generation project developed during the GUVI × HCL hackathon, exploring the creative possibilities of generative AI.",
    technologies: ["Python", "Generative AI", "Text-to-Image"],
    visual: "story",
    visualLabel: "Creative Storytelling",
  },
];

const experiences = [
  {
    type: "INTERNSHIP",
    title: "Labmentix",
    role: "Internship Experience",
    description:
      "An opportunity to gain practical exposure, work on assigned tasks and strengthen my understanding of technology through hands-on learning.",
  },
  {
    type: "INTERNSHIP",
    title: "CodeAlpha",
    role: "Python Development",
    description:
      "Worked on Python-based projects, including a Language Translation Tool built using Streamlit, deep-translator and gTTS, along with an FAQ chatbot.",
  },
  {
    type: "COMMUNITY & LEADERSHIP",
    title: "GDG on Campus, ABESEC",
    role: "PR & Outreach Head",
    description:
      "Working with the community team on outreach, collaborations, communication and event initiatives while helping connect students with technology and opportunities.",
  },
  {
    type: "COMMUNITY & TEAMWORK",
    title: "Connect Karo",
    role: "LinkedIn Taskforce",
    description:
      "Participated in a team-based LinkedIn Taskforce sprint, where our team secured second place through collaboration and consistent effort.",
  },
  {
    type: "HACKATHON",
    title: "GUVI × HCL",
    role: "48-Hour Hackathon",
    description:
      "Collaborated on a Text-to-Image Story Generator, exploring how generative AI can transform written ideas into visual storytelling experiences.",
  },
  {
    type: "CLOUD LEARNING",
    title: "Google Cloud",
    role: "Cloud Labs & Skill Badges",
    description:
      "Explored Google Cloud through hands-on labs and completed learning activities that helped build familiarity with cloud technologies.",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "sentinel") {
    return (
      <div className="project-visual sentinel-visual">
        <div className="visual-window">
          <div className="visual-window-top">
            <span className="visual-dots"><i /><i /><i /></span>
            <span>sentinel / overview</span>
          </div>
          <div className="sentinel-dashboard">
            <div className="visual-sidebar">
              <span className="visual-brand">S.</span>
              <span className="sidebar-active">⌂</span>
              <span>◫</span>
              <span>⌁</span>
              <span>⚙</span>
            </div>
            <div className="sentinel-main">
              <div className="visual-greeting">
                <div>
                  <small>WORKSPACE / OVERVIEW</small>
                  <h4>Transaction insights</h4>
                </div>
                <span className="visual-avatar">R</span>
              </div>
              <div className="sentinel-stats">
                <div><small>Transactions</small><strong>2,480</strong><span>Analysed records</span></div>
                <div><small>Risk signals</small><strong>18</strong><span>Flagged for review</span></div>
              </div>
              <div className="sentinel-chart">
                <div className="chart-heading"><span>Activity overview</span><span>Recent activity</span></div>
                <div className="chart-bars">
                  {[36, 55, 43, 76, 49, 87, 61, 72, 48, 94, 65, 80].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="sentinel-alert">
                <span className="alert-dot" />
                <span>Unusual activity detected</span>
                <strong>Review</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "focusflow") {
    return (
      <div className="project-visual focusflow-visual">
        <div className="focus-window">
          <div className="focus-topbar">
            <span className="focus-logo">focusflow.</span>
            <span className="focus-profile">R</span>
          </div>
          <div className="focus-content">
            <div className="focus-welcome">
              <small>YOUR PERSONAL WORKSPACE</small>
              <h4>Make room for<br /><em>what matters.</em></h4>
              <p>A calmer way to get things done.</p>
            </div>
            <div className="focus-task-panel">
              <div className="focus-task-heading"><strong>Today&apos;s focus</strong><span>03 tasks</span></div>
              <div className="focus-task"><i className="task-check checked" /><span>Plan project structure</span><small>Done</small></div>
              <div className="focus-task"><i className="task-check" /><span>Work on the interface</span><small>In progress</small></div>
              <div className="focus-task"><i className="task-check" /><span>Review and refine</span><small>Upcoming</small></div>
            </div>
          </div>
        </div>
        <div className="focus-sticky-note">one thing<br />at a time.</div>
      </div>
    );
  }

  return (
    <div className="project-visual story-visual">
      <div className="story-paper">
        <span className="story-overline">A STORY BEGINS WITH AN IDEA</span>
        <h4>Where words<br />become <em>worlds.</em></h4>
        <p>Imagine it. Write it. See it.</p>
        <div className="story-artwork">
          <div className="story-sun" />
          <div className="story-mountain mountain-back" />
          <div className="story-mountain mountain-front" />
          <div className="story-ground" />
        </div>
        <span className="story-caption">A little imagination goes a long way.</span>
      </div>
      <span className="story-side-word">CREATE</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="portfolio">
      <header className="navigation">
        <a href="#home" className="monogram" aria-label="Rajshree home">
          R<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Selected Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-contact" href="mailto:rajshree2107004@gmail.com">
          Let&apos;s connect ↗
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            A little introduction
          </div>

          <h1>
            Rajshree<span className="rose-dot">.</span>
          </h1>

          <p className="hero-subtitle">
            Curious mind. Creative soul.
            <span> Building meaningful things with technology.</span>
          </p>

          <p className="hero-description">
            Exploring the world of AI, development and ideas — one
            experiment, one project and one chapter at a time.
          </p>

          <div className="hero-actions">
            <a href="#about" className="primary-link">
              Enter my world <span>↗</span>
            </a>
            <span className="handwritten">
              Still learning, still building.
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-backdrop" />
          <div className="photo-frame">
            <Image
              src="/rajshree-portrait.jpg"
              alt="Rajshree"
              width={900}
              height={1400}
              priority
              className="portrait"
            />
            <div className="photo-caption">
              <span>RAJSHREE</span>
              <span>Computer Science & Engineering</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading">
          <div className="eyebrow">
            <span />
            A little about me
          </div>

          <h2>
            A little
            <br />
            about <em>me.</em>
          </h2>

          <p className="about-handwritten handwritten">
            More than just a developer...
          </p>

          <blockquote>
            &quot;I love the process of turning curiosity into something
            real.&quot;
          </blockquote>

          <div className="about-signature">
            <span className="signature-mark">✳</span>
            <div>
              <span>ALWAYS EXPLORING</span>
              <p>Learning something new every day</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p>
            Hello! I&apos;m Rajshree, a Computer Science and Engineering
            student at ABES Engineering College. My journey has been
            shaped by curiosity, new experiences and a constant desire
            to learn.
          </p>

          <p>
            I&apos;m particularly interested in Artificial Intelligence,
            Machine Learning and software development. I enjoy exploring
            new ideas, building projects and understanding how technology
            can solve real-world problems.
          </p>

          <p>
            Beyond coding, I enjoy being part of communities,
            collaborating with people, taking up responsibilities and
            exploring the creative side of life.
          </p>

          <div className="journey-notes">
            <article className="journey-note patna-note">
              <span className="note-label">WHERE IT BEGAN</span>
              <h3>Patna, Bihar</h3>
              <p>
                The roots of my journey and the beginning of many stories.
              </p>
              <span className="note-sign handwritten">My starting point</span>
            </article>

            <article className="journey-note college-note">
              <span className="note-label">WHERE I AM GROWING</span>
              <h3>ABESEC</h3>
              <p>
                Computer Science and Engineering, learning and building
                along the way.
              </p>
              <span className="note-sign handwritten">The current chapter</span>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="projects-intro">
          <div>
            <div className="eyebrow">
              <span />
              A collection of things I&apos;ve built
            </div>

            <h2>
              Ideas into
              <br />
              <em>something real.</em>
            </h2>
          </div>

          <p className="projects-intro-note handwritten">
            Each project has a story of its own.
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <article
              className={`project-showcase project-showcase-${index + 1}`}
              key={project.title}
            >
              <div className="project-showcase-visual">
                <ProjectVisual type={project.visual} />
              </div>

              <div className="project-showcase-details">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="journey">
        <div className="experience-heading">
          <div className="eyebrow">
            <span />
            The journey so far
          </div>

          <h2>
            Growing through
            <br />
            <em>every experience.</em>
          </h2>

          <p className="experience-intro handwritten">
            Little steps, big lessons, and people along the way.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.title}>
              <span className="experience-type">{experience.type}</span>
              <h3>{experience.title}</h3>
              <h4>{experience.role}</h4>
              <p>{experience.description}</p>
              <span className="experience-card-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="next-chapter" id="contact">
        <div className="eyebrow">
          <span />
          Have something in mind?
        </div>

        <div className="next-chapter-content">
          <h2>
            Let&apos;s create
            <br />
            <em>something meaningful.</em>
          </h2>

          <p>
            Have an idea, an opportunity or simply want to say hello?
            I&apos;d love to hear from you.
          </p>

          <a
            className="contact-email"
            href="mailto:rajshree2107004@gmail.com"
          >
            rajshree2107004@gmail.com ↗
          </a>
        </div>
      </section>
    </main>
  );
}
