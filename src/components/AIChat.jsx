import { useState } from "react";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    if (!question.trim()) {
      setAnswer("Please ask a question.");
      return;
    }

    // Temporary demo AI response
    setAnswer("This is your AI Resume Assistant. Backend will be connected next!");
  };

  return (
    <div className="chat-box">
      <input
        type="text"
        placeholder="Ask about my projects..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={askAI}>Ask</button>

      {answer && <p className="answer">🤖 {answer}</p>}
    </div>
  );
}

export default AIChat;
