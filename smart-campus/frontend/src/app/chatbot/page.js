'use client';
import { useState } from 'react';
import Navbar from '../../components/Navrbar'; // update path as needed
export default function ChatbotPage() {
    const [prompt, setPrompt] = useState('');  // Variable pour récupérer la saisie de l'utilisateur
    const [messages, setMessages] = useState([]);  // Liste des messages dans le chat
  
    const handleSend = async () => {
      if (!prompt.trim()) return;  // Ne rien faire si l'input est vide
  
      const userMessage = { role: 'user', text: prompt };
      setMessages((prev) => [...prev, userMessage]);
  
      try {
        // Envoi du prompt à l'API backend pour obtenir des informations sur la localisation
        const res = await fetch(`http://localhost:8000/get-location-info?query=${prompt}`, {
          method: 'GET',  // Méthode GET pour envoyer la question
        });
  
        const data = await res.json();  // Traitement de la réponse en JSON
        const botMessage = { role: 'bot', text: data.response };  // Message du bot avec la réponse
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', text: 'Une erreur est survenue !' },  // Message d'erreur en cas de problème
        ]);
      }
  
      setPrompt('');  // Réinitialiser le prompt après l'envoi
    };
  
    return (
      <div className="min-h-screen bg-gray-50 text-black">
        <Navbar />
  
        {/* Titre de la page */}
        <div className="text-center mt-8 mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">🎓 Campus Navigation Chatbot</h2>
          <p className="text-gray-500">Pose ta question et reçois une réponse instantanée sur le campus.</p>
        </div>
  
        {/* Conteneur du chat */}
        <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
          <div className="h-96 overflow-y-auto border rounded p-4 space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
                {msg.text}
              </div>
            ))}
          </div>
  
          {/* Champ de saisie */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}  // Met à jour le prompt
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}  // Envoie au pression de "Enter"
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
  