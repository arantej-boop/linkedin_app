import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Header({ title = "LinkedIn Post Generator", subtitle = "Industria / PYMEs" }: Props) {
  return (
    <header style={{ padding: "16px 0" }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle ? <p style={{ margin: "4px 0 0 0", opacity: 0.8 }}>{subtitle}</p> : null}
      <hr style={{ marginTop: 16 }} />
    </header>
  );
}
