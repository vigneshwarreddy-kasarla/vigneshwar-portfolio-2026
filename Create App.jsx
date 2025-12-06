import { useState } from "react";
import AIChat from "./components/AIChat";

function App() {
  const [aiActive, setAiActive] = useState(false);

  const handleAIActivated = () => {
    setAiActive(true);
  };

  return (
    <div
      className={`min-h-screen w-full transition-all duration-700 ${
        aiActive
          ? "bg-gradient-to-br from-indigo-900 via-slate-900 to-black"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      }`}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6">
        <div
          className={`w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl transition-all duration-700 ${
            aiActive ? "ai-active-glow" : ""
          }`}
        >
          {/* Header */}
          <h1 className="mb-2 text-3xl font-bold text-white">
            🚀 Vigneshwar Reddy
          </h1>
          <p className="mb-6 text-sm text-slate-300">
            AI Engineer • ML Developer • Data Analyst
          </p>

          {/* Projects */}
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <ProjectCard
              title="Storytelling Chatbot"
              desc="GenAI system using LLaMA, Pinecone & MongoDB"
            />
            <ProjectCard
              title="Parkinson’s Detection"
              desc="SVM-based ML model with 92% accuracy"
            />
            <ProjectCard
              title="AI Resume Screening"
              desc="FastText + LLM based resume ranking system"
            />
            <ProjectCard
              title="Data Analytics Simulations"
              desc="Retail & Banking customer analytics"
            />
          </div>

          {/* AI Assistant */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
              AI Resume Assistant
            </h2>
            <AIChat onActivate={handleAIActivated} />
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-slate-400">
            © 2025 Vigneshwar Reddy
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-left text-white">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-slate-300">{desc}</p>
    </div>
  );
}

export default App;
