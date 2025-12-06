import { useState } from 'react';

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(m => [...m, userMsg]);
    setLoading(true);

    const res = await fetch('https://vigneshwar-ai-chat.lovable.app/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();

    setMessages(m => [...m, { role: 'assistant', content: data.reply }]);
    setInput('');
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white text-2xl rounded-full w-14 h-14 shadow-2xl z-50"
      >
        Chat
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-96 h-96 bg-gray-900 rounded-2xl shadow-2xl flex flex-col border border-purple-600 z-50">
          <div className="bg-purple-600 p-4 rounded-t-2xl font-bold text-center">Ask me about Vigneshwar</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <span className={`inline-block px-4 py-2 rounded-2xl ${m.role === 'user' ? 'bg-purple-700' : 'bg-gray-700'}`}>
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-center text-gray-400">Thinking...</div>}
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && send()}
            placeholder="e.g. What is his best ML project?"
            className="m-4 p-3 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      )}
    </>
  );
}
