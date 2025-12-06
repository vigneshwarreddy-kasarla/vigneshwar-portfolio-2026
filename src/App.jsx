import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900 border border-white/10 text-center">
        <h1 className="text-2xl font-bold mb-2">🚀 Vigneshwar Reddy</h1>
        <p className="text-sm text-slate-300 mb-4">
          AI Engineer • ML Developer • Data Analyst
        </p>

        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask something..."
          className="w-full p-2 rounded bg-slate-800 text-sm outline-none"
        />

        <p className="mt-4 text-xs text-slate-400">
          © 2025 Vigneshwar Reddy
        </p>
      </div>
    </div>
  );
}

export default App;
