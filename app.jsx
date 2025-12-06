import { useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import AIChat from './components/AIChat.jsx';          // ← This makes the chat work

function App() {
  useEffect(() => {
@@ -13,8 +14,8 @@ function App() {
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Vigneshwar Reddy Kasarla</h1>
        <p className="text-xl md:text-2xl text-purple-400 mb-8">ECE '25 | AI + Full-Stack Engineer</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/vigneshwarreddy-kasarla" target="_blank"><FiGithub /></a>
          <a href="https://linkedin.com/in/vigneshwar-reddy-kasarla-" target="_blank"><FiLinkedin /></a>
          <a href="https://github.com/vigneshwarreddy-kasarla" target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href="https://linkedin.com/in/vigneshwar-reddy-kasarla-" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href="mailto:vigneshwarreddykasarla6@gmail.com"><FiMail /></a>
          <a href="tel:+919666688877"><FiPhone /></a>
        </div>
@@ -56,8 +57,11 @@ function App() {
      </section>

      <footer className="text-center py-8">
        Made with ❤️ by Vigneshwar | 2025
        Made with love by Vigneshwar | 2025
      </footer>

      {/* ← THIS LINE SHOWS THE AI CHAT BUBBLE */}
      <AIChat />
    </div>
  );
}
