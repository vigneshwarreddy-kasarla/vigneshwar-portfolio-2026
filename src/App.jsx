import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]"></div>

        <div className="relative z-10 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide md:text-5xl">
            🚀 Vigneshwar Reddy
          </h1>

          <p className="mb-6 text-sm text-slate-300 md:text-base">
            AI Engineer • ML Developer • Data Analyst
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs">
              GenAI
            </span>
            <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1 text-xs">
              Machine Learning
            </span>
            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs">
              Data Science
            </span>
          </div>

          <button
            onClick={() => setActive(true)}
            className="rounded-xl bg-indigo-500 px-8 py-3 text-sm font-semibold text-black hover:bg-indigo-400"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      {active && (
        <section className="px-6 pb-20 pt-12">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-wider">
            Featured Projects
          </h2>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <ProjectCard
              title="Storytelling Chatbot"
              desc="GenAI chatbot using LLaMA, Pinecone & vector search"
            />
            <ProjectCard
              title="Parkinson’s Detection"
              desc="SVM-based ML model with real patient dataset"
            />
            <ProjectCard
              title="AI Resume Screening"
              desc="FastText + LLM powered resume ranking system"
            />
            <ProjectCard
              title="Data Analytics Simulations"
              desc="Retail, banking & customer behavior analytics"
            />
          </div>

          {/* AI ASSISTANT SECTION */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-8 text-center shadow-2xl backdrop-blur-xl">
            <h3 className="mb-2 text-lg font-semibold">
              🤖 AI Resume Assistant
            </h3>

            <p className="mb-4 text-sm text-slate-300">
              Ask anything about my skills, projects & experience.
            </p>

            <input
              placeholder="Ask about my projects, skills..."
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm outline-none focus:border-indigo-400"
            />

            <button className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-black hover:bg-indigo-400">
              Ask AI
            </button>

            <p className="mt-3 text-xs text-slate-400">
              (Real AI backend will be connected soon)
            </p>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © 2025 Vigneshwar Reddy — All Rights Reserved
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="text-xs text-slate-300">{desc}</p>
    </div>
  );
}

export default App;
