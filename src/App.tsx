import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Projects } from "./components/Projects";
import { profile } from "./data/profile";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <p className="p">
          I design RTL-level accelerator microarchitecture in SystemVerilog and build end-to-end systems
          that connect models, verification, and deployment. My work focuses on high-throughput systolic
          architectures, sparsity-aware compute, and energy-efficient inference pipelines.
        </p>
        <p className="p" style={{ marginTop: 12 }}>
          Currently pursuing a dual degree — B.Tech in Electrical and Electronics Engineering at
          Amrita Vishwa Vidyapeetham and a B.S. in Data Science at IIT Madras. Actively contributing to
          deep-tech research, open-source AI/ML systems, and hardware-software co-design.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="resume" title="Resume">
        <p className="p">
          Download a copy of my resume to learn more about my background, education, and work history.
        </p>
        <div className="ctaRow" style={{ marginTop: 14 }}>
          <a className="btn btnPrimary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume (PDF)
          </a>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="p">
          Open to ASIC/VLSI engineering roles, research collaborations, and internships.
          Feel free to reach out — I respond promptly.
        </p>
        <div className="ctaRow" style={{ marginTop: 14 }}>
          <a className="btn btnPrimary" href={profile.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Send an Email
          </a>
        </div>
      </Section>

      <div className="container footer">
        © {new Date().getFullYear()} {profile.name} · Built with Vite + React
      </div>
    </>
  );
}

