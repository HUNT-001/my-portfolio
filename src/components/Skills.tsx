import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 64 }} />
        <div className="sectionTag"><span className="dot" /> Skills</div>
        <div className="sectionTitle">Tools of the trade.</div>
        <p className="sectionSub">
          A working stack built across hardware design, machine learning, cloud infrastructure,
          and software development.
        </p>
        <div className="skillsGrid">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skillCard">
              <div className="skillCardTitle">{cat.title}</div>
              <div className="skillTags">
                {cat.items.map(item => (
                  <span key={item} className="skillTag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
