import { useState } from "react";
import { profile } from "../data/profile";

function Ext() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.8 }}>
      <path fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

function Copy() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.8 }}>
      <path fill="currentColor"
        d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm4 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h12v14Z" />
    </svg>
  );
}

type LinkRowProps = {
  href: string;
  label: string;
  sub?: string;
  external?: boolean;
};

function LinkRow({ href, label, sub, external }: LinkRowProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 10, padding: "10px 12px", borderRadius: 10,
        background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
        textDecoration: "none", transition: "background .15s, border-color .15s",
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(97,218,251,0.08)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(97,218,251,0.3)";
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <div>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{label}</div>
        {sub && <div style={{ color: "var(--muted)", fontSize: 12 }}>{sub}</div>}
      </div>
      {external && <Ext />}
    </a>
  );
}

export function ConnectCard() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="card sideCard" style={{ display: "flex", flexDirection: "column", gap: 0 }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: 0.2 }}>Connect</span>
        <span style={{
          fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 999,
          background: "rgba(63,185,80,0.12)", border: "1px solid rgba(63,185,80,0.3)",
          color: "rgba(63,185,80,0.95)",
        }}>
          ● {profile.status}
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <LinkRow href={profile.linkedin} label="LinkedIn"
          sub="linkedin.com/in/vakkalagadda-tanush-pavan" external />
        <LinkRow href={profile.github} label="GitHub"
          sub="github.com/HUNT-001" external />
        <LinkRow href={profile.featuredRepo} label="BNN Accelerator"
          sub="SystemVerilog · FPGA/ASIC · Patent-pending" external />
        <LinkRow href={profile.cloudDemo} label="Cloud Demo"
          sub="Yulara Solar Digital Twin · Live on Netlify" external />
        <LinkRow href={`mailto:${profile.email}`} label="Send an Email"
          sub={profile.email} external={false} />

        {/* Copy email */}
        <button
          onClick={copyEmail}
          type="button"
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 10, padding: "10px 12px", borderRadius: 10,
            background: copied ? "rgba(63,185,80,0.10)" : "rgba(255,255,255,0.04)",
            border: copied ? "1px solid rgba(63,185,80,0.35)" : "1px solid var(--border)",
            cursor: "pointer", transition: "all .2s", width: "100%",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, textAlign: "left" }}>
              {copied ? "✓ Copied to clipboard!" : "Copy Email Address"}
            </div>
            <div style={{ color: "var(--muted)", fontSize: 12, textAlign: "left" }}>
              {profile.email}
            </div>
          </div>
          <Copy />
        </button>
      </div>

      <div className="hr" style={{ marginTop: 16 }} />
      <div className="small">
      </div>
    </div>
  );
}

