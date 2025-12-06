import { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import AIChat from './components/AIChat.jsx';        // ← ADD THIS LINE
function App() {
  useEffect(() => {
    document.title = "Vigneshwar Reddy Kasarla";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Vigneshwar Reddy Kasarla</h1>
        <p className="text-xl md:text-2xl text-purple-400 mb-8">ECE '25 | AI + Full-Stack Engineer</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/vigneshwarreddy-kasarla" target="_blank"><FiGithub /></a>
          <a href="https://linkedin.com/in/vigneshwar-reddy-kasarla-" target="_blank"><FiLinkedin /></a>
          <a href="mailto:vigneshwarreddykasarla6@gmail.com"><FiMail /></a>
          <a href="tel:+919666688877"><FiPhone /></a>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">Virtual Interactive Builder (Storytelling Chatbot)</h3>
            <p>Built with Llama 3.3 70B, Pinecone, FastAPI, React – reduced story generation from 40s → 10s</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">Parkinson’s Disease Detection</h3>
            <p>92% accurate SVM model using voice features – outperformed deep learning baselines</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">AI Resume Screener (FastText + Groq)</h3>
            <p>Cuts manual screening time by 30% using LLM analysis</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-400">Quantium & Commonwealth Bank Simulation</h3>
            <p>Built ETL pipelines, uplift modeling, A/B testing in Python + R</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {["Python", "FastAPI", "React", "AWS", "Llama", "Groq", "MongoDB", "Pinecone", "Scikit-learn", "Git", "Tailwind", "Streamlit"].map(skill => (
              <span key={skill} className="bg-purple-900 px-4 py-2 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8">
        Made with ❤️ by Vigneshwar | 2025
      </footer>
    </div>
          <footer className="text-center py-8">
        Made with love by Vigneshwar | 2025
      </footer>

      <AIChat />        {/* ← ADD THIS LINE */}

    </div>
  );
}
  );
}

export default App;
