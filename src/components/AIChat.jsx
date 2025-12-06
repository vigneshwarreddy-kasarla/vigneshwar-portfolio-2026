import { useState } from "react";

function AIChat({ onActivate }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    const trimmed = question.trim();
    if (!trimmed) {
      setAnswer("Please ask something about my skills or projects. 😊");
      return;
    }

    // notify parent to switch to AI theme
    if (onActivate) onActivate();

    // temporary demo reply (no backend yet)
    setAnswer(
      "Thanks for exploring my portfolio! In the final version, this assistant will read my resume & projects (RAG) and answer with detailed, AI-generated responses."
    );
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-inner backdrop-blur-xl">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/80 text-lg">
          🤖
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-100">
            Ask my AI about me
          </p>
          <p className="text-[11px] text-slate-400">
            Example: “Summarize my Parkinson’s project.”
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about skills, projects, experience..."
            className="flex-1 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400/80"
          />
          <button
            onClick={handleAsk}
            className="rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.8)] transition hover:bg-sky-400"
          >
            Ask
          </button>
        </div>

        {answer && (
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100">
            <span className="mr-1">🤖</span>
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIChat;
