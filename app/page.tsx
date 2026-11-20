
import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING · AI",
    title: "Sentinel",
    subtitle: "Finding the unusual, before it becomes a problem.",
    description:
      "An AI-powered credit card fraud detection system that explores anomaly detection to identify suspicious transactions and make digital payments safer.",
    technologies: ["Python", "FastAPI", "Next.js", "Supabase", "Machine Learning"],
    note: "Where data meets security.",
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    category: "FULL STACK DEVELOPMENT",
    title: "FocusFlow",
    subtitle: "A little more focus. A little less chaos.",
    description:
      "A productivity application designed to help users organise their work, manage tasks and build better focus habits through a clean and interactive experience.",
    technologies: ["React", "Vite", "Node.js", "Express", "Claude API"],
    note: "Built for better everyday flow.",
    status: "PROJECT",
  },
  {
    number: "03",
    category: "GENERATIVE AI · HACKATHON",
    title: "Story Generator",
    subtitle: "Turning imagination into visual stories.",
    description:
      "A text-to-image story generation project developed during the GUVI × HCL 48-hour hackathon, exploring the creative possibilities of generative AI.",
    technologies: ["Python", "Generative AI", "Text-to-Image"],
    note: "An experiment in imagination.",
    status: "HACKATHON PROJECT",
  },
];

const experiences = [
  {
    number: "01",
    type: "INTERNSHIP",
    title: "Labmentix",
    role: "Internship Experience",
    description:
      "An opportunity to gain practical exposure, work on assigned tasks and strengthen my understanding of technology through hands-on learning.",
    note: "Learning beyond the classroom.",
    tone: "experience-paper",
  },
  {
    number: "02",
    type: "INTERNSHIP",
    title: "CodeAlpha",
    role: "Python Development",
    description:
      "Worked on Python-based projects, including a Language Translation Tool built using Streamlit, deep-translator and gTTS, along with an FAQ chatbot.",
    note: "Turning concepts into working projects.",
    tone: "experience-blue",
  },
  {
    number: "03",
    type: "COMMUNITY · LEADERSHIP",
    title: "GDG on Campus, ABESEC",
    role: "PR & Outreach Head",
    description:
      "Working with the community team on outreach, collaborations, communication and event initiatives while helping connect students with technology and opportunities.",
    note: "Building connections that matter.",
    tone: "experience-rose",
  },
  {
    number: "04",
    type: "COMMUNITY · TEAMWORK",
    title: "Connect Karo",
    role: "LinkedIn Taskforce",
    description:
      "Participated in a team-based LinkedIn Taskforce sprint, where our team secured second place through collaboration and consistent effort.",
    note: "Good things happen together.",
    tone: "experience-paper",
  },
  {
    number: "05",
    type: "HACKATHON · GENERATIVE AI",
    title: "GUVI × HCL",
    role: "48-Hour Hackathon",
    description:
      "Collaborated on a Text-to-Image Story Generator, exploring how generative AI can transform written ideas into visual storytelling experiences.",
    note: "48 hours of ideas and experimentation.",
    tone: "experience-blue",
  },
  {
    number: "06",
    type: "LEARNING · CERTIFICATIONS",
    title: "Google Cloud",
    role: "Cloud Labs & Skill Badges",
    description:
      "Explored Google Cloud through hands-on labs and completed learning activities that helped build familiarity with cloud technologies.",
    note: "Always room to learn more.",
    tone: "experience-rose",
  },
];

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

          <div className="hero-footnote">
            <span className="footnote-line" />
            Computer Science · Creativity · Curiosity
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
              <span>THE BEGINNING</span>
              <span>01 / A STORY IN PROGRESS</span>
            </div>
          </div>

          <div className="photo-note">
            <span>✳</span> Made of ideas & curiosity
          </div>

          <div className="vertical-note">
            A creative mind at work
          </div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-divider" />
          <span>THE BEGINNING</span>
        </div>
      </section>

      <div className="chapter-strip">
        <span>LOCATION · INDIA</span>
        <p>Somewhere between curiosity and creation.</p>
        <span>CHAPTER 01 — 2026</span>
      </div>

      <section className="about-section" id="about">
        <div className="about-heading">
          <div className="eyebrow">
            <span />
            Chapter 02
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
              <span className="note-sign handwritten">
                My starting point
              </span>
            </article>

            <article className="journey-note college-note">
              <span className="note-label">WHERE I AM GROWING</span>
              <h3>ABESEC</h3>
              <p>
                Computer Science and Engineering, learning and building
                along the way.
              </p>
              <span className="note-sign handwritten">
                The current chapter
              </span>
            </article>
          </div>

          <div className="about-bottom-note">
            <span>✳</span>
            <p>A little curiosity can take you a long way.</p>
          </div>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="projects-intro">
          <div>
            <div className="eyebrow">
              <span />
              Chapter 03 · Selected work
            </div>

            <h2>
              Ideas into
              <br />
              <em>something real.</em>
            </h2>
          </div>

          <p className="projects-intro-note handwritten">
            A few things I&apos;ve been creating along the way...
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-entry" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-details">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-side-note">
                <span className="project-status">{project.status}</span>
                <p className="handwritten">{project.note}</p>
                <span className="project-star">✳</span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer-note">
          <span>✳</span>
          <p>Not just finished projects. Each one is a lesson in itself.</p>
        </div>
      </section>

      <section className="experience-section" id="journey">
        <div className="experience-heading">
          <div className="eyebrow">
            <span />
            Chapter 04 · The journey so far
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

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className={`experience-entry ${experience.tone}`}
              key={experience.number}
            >
              <div className="experience-marker">
                <span>{experience.number}</span>
              </div>

              <div className="experience-card">
                <span className="experience-type">{experience.type}</span>

                <h3>{experience.title}</h3>

                <h4>{experience.role}</h4>

                <p>{experience.description}</p>

                <span className="experience-note handwritten">
                  {experience.note}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer-note">
          <span>✳</span>
          <p>
            Every opportunity has added a new perspective to my journey.
          </p>
        </div>
      </section>

      <section className="next-chapter" id="contact">
        <span className="chapter-number">05</span>

        <div className="eyebrow">
          <span />
          The next chapter
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
            <br />
            <br />
            <a href="mailto:rajshree2107004@gmail.com">
              rajshree2107004@gmail.com ↗
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="monogram">
          R<span>.</span>
        </a>

        <p>Made with curiosity, creativity & a little bit of coffee.</p>

        <a href="#home">BACK TO THE BEGINNING ↑</a>
      </footer>
    </main>
  );
}
