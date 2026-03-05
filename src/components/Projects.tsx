import { projects } from "../data/projects";

function Ext() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.7 }}>
      <path fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

export function Projects() {
  return (
    <div className="grid">
      {projects.map((p) => {
        const primaryLink =
          p.links.find(l => /demo|live/i.test(l.label)) ?? p.links[0];

        return (
          <a
            key={p.title}
            href={primaryLink?.url || "#"}
            target="_blank"
            rel="noreferrer"
            className="card project col6"
            style={{ textDecoration: "none", display: "block" }}
          >
            {/* Top row */}
            <div className="projectTop">
              <div style={{ flex: 1 }}>
                <div className="projectTitle">
                  {p.highlight && (
                    <span style={{
                      fontSize: 11, background: "rgba(97,218,251,0.15)",
                      border: "1px solid rgba(97,218,251,0.3)",
                      color: "var(--accent)", borderRadius: 6,
                      padding: "2px 8px", marginRight: 8, fontWeight: 700,
                    }}>
                      Featured
                    </span>
                  )}
                  {p.title}
                </div>
                {p.period && (
                  <div className="projectMeta" style={{ marginTop: 3 }}>{p.period}</div>
                )}
              </div>

              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 12, fontWeight: 700, padding: "4px 10px",
                borderRadius: 999, flexShrink: 0,
                background: "rgba(63,185,80,0.10)",
                border: "1px solid rgba(63,185,80,0.25)",
                color: "rgba(63,185,80,0.95)",
              }}>
                {p.links.find(l => /demo|live/i.test(l.label)) ? "Live" : "View"} <Ext />
              </div>
            </div>

            {/* Description */}
            <p className="p" style={{ marginTop: 10, fontSize: "0.92rem" }}>
              {p.description}
            </p>

            {/* Tags */}
            <div className="badges" style={{ marginTop: 12 }}>
              {p.tags.slice(0, 6).map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            {/* All links */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              {p.links.map(l => (
                <span key={l.label} style={{
                  fontSize: 12, fontWeight: 700,
                  color: "var(--accent)", opacity: 0.9,
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  {l.label} <Ext />
                </span>
              ))}
            </div>

            {/* Optional image */}
            {p.image && (
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="thumb"
              />
            )}
          </a>
        );
      })}
    </div>
  );
}

