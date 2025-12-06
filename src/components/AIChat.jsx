import { useState } from "react";

function AIChat({ onActivate }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!question.trim()) {
      setAnswer("Please ask something about my projects or skills.");
      return;
    }

    // trigger UI theme change in App.jsx
    if (onActivate) {
      onActivate();
    }

    // demo response (backend will be added later)
    setAnswer(
      "This is a demo AI response. Soon, this assistant will use a real AI backend to answer questions about my resume and projects."
    );
  };

  return (
    <div className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg">
      <div className="mb-2 text-left text-xs text-slate-300">
        🤖 Ask my AI about me
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about skills, projects..."
          className="flex-1 rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white outline-none focus:border-sky-400"
        />

        <button
          onClick={handleAsk}
          className="rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-black hover:bg-sky-400"
        >
          Ask
        </button>
      </div>

      {answer && (
        <div className="mt-3 rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-200">
          {answer}
        </div>
      )}
    </div>
  );
}

export default AIChat;
