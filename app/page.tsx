
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    category: "ARTIFICIAL INTELLIGENCE · MACHINE LEARNING",
    title: "Sentinel",
    subtitle: "Finding the unusual, before it becomes a problem.",
    description:
      "An AI-powered credit card fraud detection system that explores anomaly detection to identify suspicious transactions and make digital payments safer.",
    technologies: ["Python", "FastAPI", "Next.js", "Supabase", "Machine Learning"],
    visual: "sentinel",
  },
  {
    category: "FULL STACK DEVELOPMENT",
    title: "FocusFlow",
    subtitle: "A little more focus. A little less chaos.",
    description:
      "A productivity application designed to help users organise their work, manage tasks and build better focus habits through a clean and interactive experience.",
    technologies: ["React", "Vite", "Node.js", "Express", "Claude API"],
    visual: "focusflow",
  },
  {
    category: "GENERATIVE AI",
    title: "Story Generator",
    subtitle: "Turning imagination into visual stories.",
    description:
      "A text-to-image story generation project developed during the GUVI × HCL hackathon, exploring the creative possibilities of generative AI.",
    technologies: ["Python", "Generative AI", "Text-to-Image"],
    visual: "story",
  },
];


const skillGroups = [
  {
    title: "Programming",
    description: "The languages I use to think through problems.",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    description: "The area I am most curious to explore and build in.",
    skills: ["Machine Learning", "Anomaly Detection", "Generative AI", "Prompt Engineering"],
  },
  {
    title: "Web Development",
    description: "Turning ideas into useful, interactive experiences.",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Node.js", "Express", "FastAPI"],
  },
  {
    title: "Tools & Platforms",
    description: "The tools that support my everyday workflow.",
    skills: ["Git", "GitHub", "VS Code", "Supabase", "Google Cloud"],
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

const reveal = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

function ProjectVisual({ type }: { type: string }) {
  if (type === "sentinel") {
    return (
      <div className="project-visual sentinel-visual">
        <div className="visual-window">
          <div className="visual-window-top">
            <span className="visual-dots">
              <i />
              <i />
              <i />
            </span>
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
                <div>
                  <small>Transactions</small>
                  <strong>2,480</strong>
                  <span>Analysed records</span>
                </div>
                <div>
                  <small>Risk signals</small>
                  <strong>18</strong>
                  <span>Flagged for review</span>
                </div>
              </div>

              <div className="sentinel-chart">
                <div className="chart-heading">
                  <span>Activity overview</span>
                  <span>Recent activity</span>
                </div>

                <div className="chart-bars">
                  {[36, 55, 43, 76, 49, 87, 61, 72, 48, 94, 65, 80].map(
                    (height, index) => (
                      <motion.i
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.06,
                          ease: "easeOut",
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              <motion.div
                className="sentinel-alert"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="alert-dot" />
                <span>Unusual activity detected</span>
                <strong>Review</strong>
              </motion.div>
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
              <h4>
                Make room for
                <br />
                <em>what matters.</em>
              </h4>
              <p>A calmer way to get things done.</p>
            </div>

            <div className="focus-task-panel">
              <div className="focus-task-heading">
                <strong>Today&apos;s focus</strong>
                <span>03 tasks</span>
              </div>

              {[
                ["Plan project structure", "Done"],
                ["Work on the interface", "In progress"],
                ["Review and refine", "Upcoming"],
              ].map(([task, status], index) => (
                <motion.div
                  className="focus-task"
                  key={task}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.15,
                  }}
                >
                  <i
                    className={`task-check ${index === 0 ? "checked" : ""}`}
                  />
                  <span>{task}</span>
                  <small>{status}</small>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="focus-sticky-note"
          animate={{ rotate: [5, 3, 5], y: [0, -5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          one thing
          <br />
          at a time.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="project-visual story-visual">
      <div className="story-paper">
        <span className="story-overline">A STORY BEGINS WITH AN IDEA</span>

        <h4>
          Where words
          <br />
          become <em>worlds.</em>
        </h4>

        <p>Imagine it. Write it. See it.</p>

        <div className="story-artwork">
          <motion.div
            className="story-sun"
            animate={{ y: [0, -7, 0], scale: [1, 1.04, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="story-mountain mountain-back"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="story-mountain mountain-front" />
          <div className="story-ground" />
        </div>

        <span className="story-caption">
          A little imagination goes a long way.
        </span>
      </div>

      <span className="story-side-word">CREATE</span>
    </div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion
    ? {}
    : {
        variants: reveal,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.18 },
      };

  return (
    <main className="portfolio">
      {/* NAVIGATION */}

      <header className="navigation">
        <a href="#home" className="monogram" aria-label="Rajshree home">
          R<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Selected Work</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-contact" href="mailto:rajshree2107004@gmail.com">
          Let&apos;s connect ↗
        </a>
      </header>

      {/* HERO */}

      <section className="hero" id="home">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
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
            <span className="handwritten">Still learning, still building.</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
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
        </motion.div>
      </section>

      {/* ABOUT */}

      <section className="about-section" id="about">
        <motion.div className="about-heading" {...revealProps}>
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
        </motion.div>

        <motion.div
          className="about-content"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p variants={reveal}>
            Hello! I&apos;m Rajshree, a Computer Science and Engineering
            student at ABES Engineering College. My journey has been
            shaped by curiosity, new experiences and a constant desire
            to learn.
          </motion.p>

          <motion.p variants={reveal}>
            I&apos;m particularly interested in Artificial Intelligence,
            Machine Learning and software development. I enjoy exploring
            new ideas, building projects and understanding how technology
            can solve real-world problems.
          </motion.p>

          <motion.p variants={reveal}>
            Beyond coding, I enjoy being part of communities,
            collaborating with people, taking up responsibilities and
            exploring the creative side of life.
          </motion.p>

          <motion.div className="journey-notes" variants={stagger}>
            <motion.article className="journey-note patna-note" variants={reveal}>
              <span className="note-label">WHERE IT BEGAN</span>
              <h3>Patna, Bihar</h3>
              <p>
                The roots of my journey and the beginning of many stories.
              </p>
              <span className="note-sign handwritten">My starting point</span>
            </motion.article>

            <motion.article className="journey-note college-note" variants={reveal}>
              <span className="note-label">WHERE I AM GROWING</span>
              <h3>ABESEC</h3>
              <p>
                Computer Science and Engineering, learning and building
                along the way.
              </p>
              <span className="note-sign handwritten">The current chapter</span>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECT SHOWCASE */}

      <section className="projects-section" id="work">
        <motion.div className="projects-intro" {...revealProps}>
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
        </motion.div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <motion.article
              className={`project-showcase project-showcase-${index + 1}`}
              key={project.title}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 90,
                      rotateX: 5,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="project-showcase-visual"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  style={{ width: "100%" }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.035,
                          rotate: index % 2 === 0 ? -1 : 1,
                        }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <ProjectVisual type={project.visual} />
                </motion.div>
              </motion.div>

              <motion.div
                className="project-showcase-details"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.span className="project-category" variants={reveal}>
                  {project.category}
                </motion.span>

                <motion.h3 variants={reveal}>{project.title}</motion.h3>

                <motion.h4 variants={reveal}>{project.subtitle}</motion.h4>

                <motion.p variants={reveal}>{project.description}</motion.p>

                <motion.div
                  className="project-technologies"
                  variants={stagger}
                >
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      variants={reveal}
                      whileHover={
                        shouldReduceMotion ? {} : { y: -4, scale: 1.04 }
                      }
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>


      {/* SKILLS */}

      <section className="skills-section" id="skills">
        <motion.div className="skills-intro" {...revealProps}>
          <div>
            <div className="eyebrow">
              <span />
              The tools behind the ideas
            </div>
            <h2>
              Things I work
              <br />
              <em>with.</em>
            </h2>
          </div>
          <p>
            A growing toolkit shaped by curiosity, practice and the projects
            I build. I enjoy learning by experimenting and putting ideas to work.
          </p>
        </motion.div>

        <motion.div
          className="skills-list"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillGroups.map((group) => (
            <motion.article className="skill-row" key={group.title} variants={reveal}>
              <div className="skill-row-heading">
                <span className="skill-category">{group.title}</span>
                <span className="skill-description">{group.description}</span>
              </div>
              <div className="skill-items">
                {group.skills.map((skill, index) => (
                  <motion.span
                    className="skill-item"
                    key={skill}
                    whileHover={shouldReduceMotion ? {} : { y: -5, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* EXPERIENCE */}

      <section className="experience-section" id="journey">
        <motion.div className="experience-heading" {...revealProps}>
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
        </motion.div>

        <motion.div
          className="experience-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.title}
              variants={reveal}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                      rotate: index % 2 === 0 ? -0.5 : 0.5,
                    }
              }
              transition={{ duration: 0.35 }}
            >
              <span className="experience-type">{experience.type}</span>
              <h3>{experience.title}</h3>
              <h4>{experience.role}</h4>
              <p>{experience.description}</p>
              <span className="experience-card-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}

      <motion.section
        className="next-chapter"
        id="contact"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >
        <div className="next-chapter-content">
          <div className="eyebrow">
            <span />
            Have something in mind?
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
