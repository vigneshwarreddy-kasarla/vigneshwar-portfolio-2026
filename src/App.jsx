import { useState } from "react";
import AIChat from "./components/AIChat";

function App() {
  const [aiActive, setAiActive] = useState(false);

  const handleAIActivated = () => {
    setAiActive(true);
  };

  const bgClass = aiActive
    ? "bg-gradient-to-br from-indigo-900 via-slate-900 to-black"
    : "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950";

  return (
    <div className={`relative min-h-screen overflow-hidden ${bgClass}`}>
      {/* glows in background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 md:px-8 md:py-12">
        {/* top nav */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/80 text-xl">
              🚀
            </div>
            <div>
              <p className="text-sm font-medium text-sky-300/90">
                Vigneshwar Reddy
              </p>
              <p className="text-xs text-slate-300/70">
                AI Engineer • ML Developer • Data Analyst
              </p>
            </div>
          </div>

          <nav className="hidden gap-4 text-sm text-slate-200/80 md:flex">
            <button className="nav-link">Services</button>
            <button className="nav-link">Projects</button>
            <button className="nav-link">About</button>
            <button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.7)] hover:bg-sky-400">
              Get in touch
            </button>
          </nav>
        </header>

        {/* main glass card */}
        <main className="flex flex-1 flex-col items-center justify-center">
          <div
            className={`w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(15,23,42,0.8)] backdrop-blur-2xl transition-all duration-700 md:p-10 ${
              aiActive ? "ai-active-glow" : ""
            }`}
          >
            {/* hero text */}
            <section className="mb-10 text-left md:mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300/70">
                Portfolio 2026
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl lg:text-5xl">
                Design that{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                  reveals
                </span>
                .
                <br />
                Code that{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-sky-400 bg-clip-text text-transparent">
                  scales
                </span>
                .
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-200/75 md:text-base">
                I build AI-powered experiences—LLM agents, ML models and data
                products—that turn ideas into scalable systems. This portfolio
                showcases my GenAI, ML, and analytics work.
              </p>
            </section>

            {/* grid: projects + AI assistant */}
            <section className="grid gap-6 md:grid-cols-[1.4fr,1.1fr] md:gap-8">
              {/* projects */}
              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300/70">
                  Featured Projects
                </h2>

                <div className="space-y-3">
                  <ProjectCard
                    title="Virtual Storytelling Chatbot"
                    badge="GenAI • LLaMA • RAG"
                    desc="Interactive story generator using LLaMA, Pinecone, and MongoDB with 25% higher user engagement and faster responses."
                  />
                  <ProjectCard
                    title="Parkinson’s Disease Detection"
                    badge="ML • Healthcare"
                    desc="SVM-based classifier on biomedical voice data achieving 92% accuracy for early, non-invasive screening."
                  />
                  <ProjectCard
                    title="AI Resume Screening & Ranking"
                    badge="NLP • LLM"
                    desc="FastText + LLM system that parses resumes, scores candidates (0–10), and reduces manual screening by ~30%."
                  />
                  <ProjectCard
                    title="Retail & Banking Analytics Simulations"
                    badge="Analytics • Experimentation"
                    desc="Uplift modelling and A/B testing for store performance and customer segments using Python, R, and visualization tools."
                  />
                </div>
              </div>

              {/* AI assistant panel */}
              <div className="s
