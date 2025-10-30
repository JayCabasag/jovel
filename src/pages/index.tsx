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
            <div className="project-number">01</div>
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-description">
              A modern, scalable e-commerce solution built with React and
              Node.js, featuring real-time inventory management and seamless
              checkout experience.
            </p>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
          <div className="project-card">
            <div className="project-number">02</div>
            <h3 className="project-title">Brand Identity System</h3>
            <p className="project-description">
              Comprehensive design system including visual identity, typography,
              and component library for a growing tech startup.
            </p>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
          <div className="project-card">
            <div className="project-number">03</div>
            <h3 className="project-title">Mobile App Design</h3>
            <p className="project-description">
              iOS and Android app design focused on intuitive navigation and
              delightful user interactions for a health and wellness platform.
            </p>
            <a href="#" className="project-link">
              View Project
            </a>
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
