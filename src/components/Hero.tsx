import { profile } from "../data/profile";
import { ConnectCard } from "./ConnectCard";

const skills = ["SystemVerilog", "RTL Design", "Accelerators", "Verification", "AWS", "PyTorch"];

export function Hero() {
  return (
    <div className="hero">
      <div className="container heroGrid">

        {/* Left: main intro */}
        <div className="card heroCard">
          <div className="kicker">
            <span className="dot" />
            <span>{profile.roleLine}</span>
          </div>

          <h1 className="title">{profile.name}</h1>

          <p style={{ color: "rgba(234,240,255,0.75)", fontWeight: 500, marginTop: 2 }}>
            {profile.location}
          </p>

          <p className="p" style={{ marginTop: 14 }}>
            I design RTL-level accelerator microarchitecture in SystemVerilog and build
            end-to-end systems that connect models, formal verification, and cloud deployment.
            Currently working on patent-pending BNN accelerator research targeting Q1 publication.
          </p>

          <div className="ctaRow" style={{ marginTop: 20 }}>
            <a className="btn btnPrimary" href="#projects">
              View Projects
            </a>
            <a className="btn" href={profile.featuredRepo} target="_blank" rel="noreferrer">
              BNN Accelerator ↗
            </a>
            <a className="btn" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="badges" style={{ marginTop: 18 }}>
            {skills.map(s => (
              <span key={s} className="badge">{s}</span>
            ))}
          </div>
        </div>

        {/* Right: connect card */}
        <ConnectCard />

      </div>
    </div>
  );
}

