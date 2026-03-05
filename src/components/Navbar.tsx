export function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap navInner">
        <a href="#" className="brand">
          <span className="dot" />
          <span>Tanush Pavan</span>
        </a>
        <div className="navLinks">
          {[
            ["About",    "#about"],
            ["Skills",   "#skills"],
            ["Projects", "#projects"],
            ["Contact",  "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="navLink">{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

