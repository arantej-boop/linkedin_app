// App.tsx — versión mínima que compila sin imports externos
import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ margin: 0 }}>LinkedIn Post Generator</h1>
      <p style={{ margin: "6px 0 16px 0", opacity: 0.8 }}>Industria / PYMEs</p>
      <hr style={{ marginBottom: 16 }} />

      <label style={{ display: "block", marginBottom: 8 }}>Brief del post</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe el post para LinkedIn…"
        style={{ width: "100%", minHeight: 140, padding: 12 }}
      />
    </main>
  );
}

