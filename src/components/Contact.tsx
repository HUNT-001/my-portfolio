import { useState } from "react";
import { profile } from "../data/profile";

function Ext() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

function Copy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
      <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm4 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h12v14Z" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 64 }} />
        <div className="contactGrid">
          <div>
            <div className="sectionTag"><span className="dot" /> Contact</div>
            <div className="sectionTitle">Let's work together.</div>
            <p className="sectionSub" style={{ marginBottom: 0 }}>
              Open to ASIC/VLSI engineering roles, research collaborations, and internships.
              Based in Hyderabad — available remotely worldwide.
            </p>
          </div>

          <div className="contactLinks">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contactLink">
              <div className="contactLinkLeft">
                <span className="contactLinkLabel">LinkedIn</span>
                <span className="contactLinkSub">linkedin.com/in/vakkalagadda-tanush-pavan</span>
              </div>
              <Ext />
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="contactLink">
              <div className="contactLinkLeft">
                <span className="contactLinkLabel">GitHub</span>
                <span className="contactLinkSub">github.com/HUNT-001</span>
              </div>
              <Ext />
            </a>

            <a href={`mailto:${profile.email}`} className="contactLink">
              <div className="contactLinkLeft">
                <span className="contactLinkLabel">Send an Email</span>
                <span className="contactLinkSub">{profile.email}</span>
              </div>
              <Ext />
            </a>

            <button className="copyBtn" onClick={copyEmail} type="button"
              style={{
                borderColor: copied ? "rgba(63,185,80,0.4)" : undefined,
                background: copied ? "rgba(63,185,80,0.08)" : undefined,
              }}>
              <div className="contactLinkLeft">
                <span className="contactLinkLabel">
                  {copied ? "✓ Copied to clipboard!" : "Copy Email Address"}
                </span>
                <span className="contactLinkSub">{profile.email}</span>
              </div>
              <Copy />
            </button>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="contactLink">
              <div className="contactLinkLeft">
                <span className="contactLinkLabel">Download Resume</span>
                <span className="contactLinkSub">PDF · Updated March 2026</span>
              </div>
              <Ext />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
