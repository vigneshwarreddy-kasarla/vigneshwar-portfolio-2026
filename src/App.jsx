import AIChat from "./components/AIChat";

function App() {
  return (
    <div className="app">
      <h1>🚀 Vigneshwar Reddy Portfolio</h1>
      <p className="subtitle">AI Engineer | ML Developer | Data Analyst</p>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>✅ Storytelling Chatbot (GenAI + LLaMA)</li>
          <li>✅ Parkinson’s Disease Detection (SVM)</li>
          <li>✅ AI Resume Screening System</li>
          <li>✅ Data Analytics Simulations</li>
        </ul>
      </section>

      <section>
        <h2>🤖 AI Resume Assistant</h2>
        <AIChat />
      </section>

      <footer>
        <p>© 2025 Vigneshwar Reddy</p>
      </footer>
    </div>
  );
}

export default App;
