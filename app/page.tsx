
import Image from "next/image";

export default function Home() {
  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <header className="navigation">
        <a href="#home" className="monogram">R<span>.</span></a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's connect ↗
        </a>
      </header>

      {/* CHAPTER 01 — OPENING SCENE */}
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
            <br />
            <span>Building meaningful things with technology.</span>
          </p>

          <p className="hero-description">
            Exploring the world of AI, development and ideas —
            one experiment, one project and one chapter at a time.
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
            <span>Computer Science · Creativity · Curiosity</span>
          </div>
        </div>

        {/* PERSONAL PHOTOGRAPH */}
        <div className="hero-visual">
          <div className="photo-backdrop" />

          <div className="photo-frame">
            <Image
              src="/rajshree-portrait.jpg"
              alt="Portrait of Rajshree"
              width={728}
              height={1600}
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="portrait"
            />

            <div className="photo-caption">
              <span>01 / A portrait</span>
              <span>November, 2026</span>
            </div>
          </div>

          <div className="photo-note">
            <span>✳</span>
            A story still unfolding
          </div>

          <div className="vertical-note">
            A little piece of my world
          </div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-divider" />
          <span>THE BEGINNING</span>
        </div>
      </section>

      {/* CHAPTER TRANSITION */}
      <section className="chapter-strip">
        <span>AN ONGOING STORY</span>
        <p>Not just a portfolio. A collection of chapters.</p>
        <span>SCROLL TO EXPLORE ↓</span>
      </section>

      {/* CHAPTER 02 — ABOUT */}
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

          <p className="handwritten about-handwritten">
            More than just a developer...
          </p>

          <blockquote>
            "I love the process of turning curiosity into something real."
          </blockquote>

          <div className="about-signature">
            <span className="signature-mark">R.</span>
            <div>
              <span>ALWAYS EXPLORING</span>
              <p>Learning something new every day.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p>
            Hello, I'm Rajshree — a Computer Science and Engineering
            student at ABES Engineering College, Ghaziabad. Originally
            from Patna, Bihar, my journey has been shaped by curiosity,
            new experiences and a constant desire to learn.
          </p>

          <p>
            I'm particularly interested in Artificial Intelligence,
            Machine Learning and software development. I enjoy
            experimenting with ideas, building projects and discovering
            how technology can solve real-world problems.
          </p>

          <p>
            Beyond coding, I enjoy being part of communities,
            collaborating with people, taking up responsibilities
            and exploring the creative side of life.
          </p>

          <div className="journey-notes">
            <article className="journey-note patna-note">
              <span className="note-label">WHERE IT BEGAN</span>
              <h3>Patna, Bihar</h3>
              <p>
                The roots of my journey and the beginning of many stories.
              </p>
              <span className="handwritten note-sign">
                My starting point
              </span>
            </article>

            <article className="journey-note college-note">
              <span className="note-label">WHERE I'M GROWING</span>
              <h3>ABES Engineering College</h3>
              <p>
                Computer Science and Engineering. Learning, building
                and finding my direction.
              </p>
              <span className="handwritten note-sign">
                The current chapter
              </span>
            </article>
          </div>

          <div className="about-bottom-note">
            <span>✳</span>
            <p>Every experience becomes a part of the story.</p>
          </div>
        </div>
      </section>

      {/* NEXT CHAPTER TEASER */}
      <section className="next-chapter" id="work">
        <div className="eyebrow">
          <span />
          Chapter 03
        </div>

        <div className="next-chapter-content">
          <h2>
            Things I've
            <br />
            <em>brought to life.</em>
          </h2>

          <p>
            Ideas, experiments, late nights and little victories.
            A look into the things I've been creating.
          </p>
        </div>

        <span className="chapter-number">03</span>
      </section>

      {/* CONTACT */}
      <footer className="footer" id="contact">
        <a href="#home" className="monogram">R<span>.</span></a>

        <p>More of my story, coming together.</p>

        <a href="mailto:rajshree2107004@gmail.com">
          rajshree2107004@gmail.com ↗
        </a>
      </footer>
    </main>
  );
}
