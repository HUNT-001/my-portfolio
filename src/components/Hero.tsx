import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const roles = [
  "RTL & Accelerator Designer",
  "ASIC / FPGA Engineer",
  "Hardware Verification Lead",
  "ML + Cloud Developer",
  "BNN Research Engineer",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export function Hero() {
  const text = useTypewriter(roles);

  return (
    <section className="hero">
      <div className="heroGlow" />
      <div className="wrap heroContent">
        <div className="heroEyebrow">
          <span className="dot" />
          <span>{profile.location} · Dual Degree · B.Tech EEE + B.S. Data Science</span>
        </div>

        <h1 className="heroName">{profile.name}</h1>

        <div className="typewriter">
          {text}<span className="cursor" />
        </div>

        <p className="heroDesc">
          I design RTL-level accelerator microarchitecture in SystemVerilog and build
          end-to-end systems that connect models, formal verification, and cloud deployment.
          Patent-pending BNN accelerator research · Q1 journal under review.
        </p>

        <div className="ctaRow">
          <a className="btn btnPrimary" href="#projects">View Projects</a>
          <a className="btn" href={profile.featuredRepo} target="_blank" rel="noreferrer">
            BNN Accelerator ↗
          </a>
          <a className="btn" href={profile.cloudDemo} target="_blank" rel="noreferrer">
            Cloud Demo ↗
          </a>
          <a className="btn" href="#contact">Get in Touch</a>
        </div>

        <div className="heroStats">
          <div className="stat">
            <div className="num">10.67×</div>
            <div className="lbl">BNN Speedup</div>
          </div>
          <div className="stat">
            <div className="num">374.5</div>
            <div className="lbl">GOPs Throughput</div>
          </div>
          <div className="stat">
            <div className="num">79.29%</div>
            <div className="lbl">CIFAR-10 Accuracy</div>
          </div>
          <div className="stat">
            <div className="num">5×</div>
            <div className="lbl">National Finalist Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}

