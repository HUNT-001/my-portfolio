import { profile } from "../data/profile";

export function Navbar() {
  return (
    <div className="nav">
      <div className="container navInner">
        <a href="#" className="brand" style={{ textDecoration: "none" }}>
          <span className="dot" />
          <span>{profile.shortName}</span>
        </a>

        <div className="navLinks">
          {[
            { label: "About",    href: "#about"    },
            { label: "Projects", href: "#projects" },
            { label: "Resume",   href: "#resume"   },
            { label: "Contact",  href: "#contact"  },
          ].map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
