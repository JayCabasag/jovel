import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Smooth scrolling
    const handleAnchorClick = (e: any) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 100);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".skill-item, .project-card").forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you for reaching out. I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Jovel</title>
        <meta
          name="description"
          content="Jove the greatest Graphic Artist of all time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
        <div className="logo">JOVEL</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Creative Developer & Digital Designer</h1>
          <p className="subtitle">
            Crafting elegant solutions through clean code and thoughtful design
          </p>
          <a href="#contact" className="cta-button">
            GET IN TOUCH
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            I'm <span className="highlight">Jovel</span>, a developer and
            designer focused on creating{" "}
            <span className="highlight">meaningful digital experiences</span>. I
            believe in the power of simplicity and the impact of attention to
            detail.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="section"
        style={{ background: "#fafafa" }}
      >
        <h2 className="section-title">Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-number">01</div>
            <h3 className="skill-name">Development</h3>
            <p className="skill-description">
              React, Node.js, TypeScript, Next.js, modern web technologies
            </p>
          </div>
          <div className="skill-item">
            <div className="skill-number">02</div>
            <h3 className="skill-name">Design</h3>
            <p className="skill-description">
              UI/UX, Figma, prototyping, design systems, brand identity
            </p>
          </div>
          <div className="skill-item">
            <div className="skill-number">03</div>
            <h3 className="skill-name">Strategy</h3>
            <p className="skill-description">
              Product thinking, user research, information architecture
            </p>
          </div>
          <div className="skill-item">
            <div className="skill-number">04</div>
            <h3 className="skill-name">Optimization</h3>
            <p className="skill-description">
              Performance, accessibility, SEO, best practices
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <h2 className="section-title">Selected Work</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img
                src="/images/work1.webp"
                alt="Brand Identity & Logo Design"
              />
            </div>
            <div className="project-content">
              <div className="project-number">01</div>
              <h3 className="project-title">Brand Identity & Logo Design</h3>
              <p className="project-description">
                Complete brand identity package including logo design, color
                palette, typography system, and brand guidelines for a premium
                wellness company.
              </p>
              <a href="//www.pornhub.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/images/work2.jpg" alt="Social Media Campaign" />
            </div>
            <div className="project-content">
              <div className="project-number">02</div>
              <h3 className="project-title">Social Media Campaign</h3>
              <p className="project-description">
                Creative visual content and graphics for a 3-month social media
                campaign, featuring custom illustrations, templates, and
                cohesive brand storytelling.
              </p>
              <a href="//www.pornhub.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/images/work2.jpg" alt="Packaging Design" />
            </div>
            <div className="project-content">
              <div className="project-number">03</div>
              <h3 className="project-title">Packaging Design</h3>
              <p className="project-description">
                Modern packaging design for an organic skincare line, combining
                minimalist aesthetics with eco-friendly materials and print
                production.
              </p>
              <a href="//www.pornhub.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/images/work2.jpg" alt="Editorial & Print Design" />
            </div>
            <div className="project-content">
              <div className="project-number">04</div>
              <h3 className="project-title">Editorial & Print Design</h3>
              <p className="project-description">
                Magazine layouts, posters, and print collateral featuring bold
                typography, creative compositions, and attention to detail in
                every spread.
              </p>
              <a href="//www.pornhub.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/images/work2.jpg" alt="Digital Illustrations" />
            </div>
            <div className="project-content">
              <div className="project-number">05</div>
              <h3 className="project-title">Digital Illustrations</h3>
              <p className="project-description">
                Custom digital artwork and illustrations for web, mobile apps,
                and marketing materials, showcasing versatile artistic styles
                and creative concepts.
              </p>
              <a href="//www.pornhub.com" className="project-link">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/images/work2.jpg" alt="UI/UX Visual Design" />
            </div>
            <div className="project-content">
              <div className="project-number">06</div>
              <h3 className="project-title">UI/UX Visual Design</h3>
              <p className="project-description">
                Interface design and visual systems for mobile and web
                applications, focusing on beautiful, user-friendly experiences
                with pixel-perfect execution.
              </p>
              <a
                href="//www.pornhub.com"
                target="_blank"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <h2 className="section-title" style={{ color: "#666666" }}>
            Get In Touch
          </h2>
          <h3 className="contact-title">
            Let's create something exceptional together
          </h3>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 JOVEL. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}
