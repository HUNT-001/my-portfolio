export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 64 }} />
        <div className="aboutGrid">
          <div className="aboutText">
            <div className="sectionTag">
              <span className="dot" /> About
            </div>
            <div className="sectionTitle">Building the hardware<br />that runs AI.</div>
            <p>
              I'm a dual-degree engineering scholar specializing in RTL-based hardware
              architecture and high-performance data processing systems, with hands-on
              experience in ASIC-oriented design and FPGA prototyping.
            </p>
            <p>
              My current research focuses on parameterized BNN accelerators with formal
              verification pipelines, memory-compute integration, and energy-efficient
              inference platforms. I'm a national finalist across multiple competitive
              hackathons including SIH 2025, Mumbai Hacks, and IIT Madras ACDC.
            </p>
            <p>
              Outside research, I co-head the Research Wing of Elite Club, mentor peers
              on hardware design, and contribute to open-source AI/ML systems through
              OpenSphere Collective.
            </p>
          </div>

          <div className="aboutCards">
            {[
              {
                title: "B.Tech · Electrical & Electronics Engineering",
                sub: "Amrita Vishwa Vidyapeetham · 2024 – Present",
              },
              {
                title: "B.S. · Data Science & Applications",
                sub: "IIT Madras · 2024 – Present",
              },
              {
                title: "AI-ML Engineering Intern",
                sub: "ACMEGRADE · May – Jul 2025 · Remote",
              },
              {
                title: "Co-Head, Research Wing",
                sub: "Elite Club · Dec 2025 – Present",
              },
              {
                title: "Analog Circuit Design Challenge",
                sub: "National Finalist · IIT Madras · Jan 2026",
              },
              {
                title: "Smart India Hackathon 2025",
                sub: "National Finalist · Team Paradoxx6 · Dec 2025",
              },
            ].map(card => (
              <div key={card.title} className="aboutCard">
                <div className="aboutCardTitle">{card.title}</div>
                <div className="aboutCardSub">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
