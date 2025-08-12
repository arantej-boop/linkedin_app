// App.tsx — versión mínima sin imports externos
import { useState } from "react";

function Header({ title = "LinkedIn Post Generator", subtitle = "Industria / PYMEs" }) {
  return (
    <header style={{ padding: "16px 0" }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle ? <p style={{ margin: "4px 0 0 0", opacity: 0.8 }}>{subtitle}</p> : null}
      <hr style={{ marginTop: 16 }} />
    </header>
  );
}

export default function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <Header />
      <label style={{ display: "block", marginBottom: 8 }}>Brief del post</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe el post para LinkedIn…"
        style={{ width: "100%", minHeight: 140, padding: 12 }}
      />
      <div style={{ marginTop: 12, opacity: 0.7 }}>
        <small>Tu clave irá en variables de entorno en Vercel.</small>
      </div>
    </main>
  );
}
