import { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = { role: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-xl mb-4 font-bold">Gemini Chatbot</h1>
        <div className="h-96 overflow-y-auto border p-3 rounded bg-gray-700 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded ${
                msg.role === 'user' ? 'bg-blue-600 text-right' : 'bg-green-600 text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="text-gray-300 italic">Gemini is typing...</div>}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-2 rounded bg-gray-600 text-white"
            placeholder="Type your message..."
            required
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import OpenAI from "openai";
// import { GoogleGenAI } from "@google/genai";

// function App() {


// const ai = new GoogleGenAI({ apiKey: "AIzaSyDcW2wOfAjvSPpfF0SkLPs64UEbMcwUf4I" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//     config: {
//       thinkingConfig: {
//         thinkingBudget: 0, // Disables thinking
//       },
//     }
//   });
//   console.log(response.text);
// }

//   return (
//     <>
//       <button onClick={main}>Call the Google_Gemini main function</button>
//     </>
//   )
// }

// export default App
