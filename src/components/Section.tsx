import type { ReactNode } from "react";

export function Section(props: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={props.id} className="section">
      <div className="container">
        <div className="h2">{props.title}</div>
        {props.children}
      </div>
    </section>
  );
}
