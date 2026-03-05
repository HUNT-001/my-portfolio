import { projects } from "../data/projects";

function Ext() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 64 }} />
        <div className="sectionTag"><span className="dot" /> Projects</div>
        <div className="sectionTitle">What I've built.</div>
        <p className="sectionSub">
          A selection of hardware research, cloud systems, and AI projects — each one
          a full end-to-end build.
        </p>

        <div className="projectsGrid">
          {projects.map(p => {
            const primaryLink =
              p.links.find(l => /demo|live/i.test(l.label)) ?? p.links[0];
            const isLive = p.links.some(l => /demo|live/i.test(l.label));

            return (
              <a
                key={p.title}
                href={primaryLink?.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="projectCard"
              >
                <div className="projectCardTop">
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.highlight && <span className="featuredBadge">⭐ Featured</span>}
                    {isLive && <span className="liveBadge">● Live</span>}
                  </div>
                </div>

                <div className="projectTitle">{p.title}</div>
                {p.period && <div className="projectPeriod">{p.period}</div>}
                <p className="projectDesc">{p.description}</p>

                <div className="projectTags">
                  {p.tags.slice(0, 5).map(t => (
                    <span key={t} className="projectTag">{t}</span>
                  ))}
                </div>

                <div className="projectLinks">
                  {p.links.map(l => (
                    <span key={l.label} className="projectLink">
                      {l.label} <Ext />
                    </span>
                  ))}
                </div>

                {p.image && (
                  <img src={p.image} alt={p.title} className="projectImg" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
