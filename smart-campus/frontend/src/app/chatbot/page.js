'use client';
import { useState } from 'react';
import Navbar from '../../components/Navrbar'; // update path as needed

export default function ChatbotPage() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: 'user', text: prompt };
    setMessages((prev) => [...prev, userMessage]);

    try {
    //   const res = await fetch('http://localhost:8000/api/ask', {
        const res= await fetch(`http://localhost:8000/get-location-info?query=${query}`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const botMessage = { role: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Une erreur est survenue !' },
      ]);
    }

    setPrompt('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Smart Campus</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/chatbot" className="text-gray-700 hover:text-blue-600">Campus Navigation</a>
          <a href="/lost-and-found" className="text-gray-700 hover:text-blue-600">Lost & Found</a>
        </div>
      </nav> */}
         <Navbar />

      {/* Page Title */}
      <div className="text-center mt-8 mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">🎓 Campus Navigation Chatbot</h2>
        <p className="text-gray-500">Pose ta question et reçois une réponse instantanée sur le campus.</p>
      </div>

      {/* Chat Container */}
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
        <div className="h-96 overflow-y-auto border rounded p-4 space-y-2 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Écris ta question ici..."
            className="flex-1 p-2 border rounded"
          />
          <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
