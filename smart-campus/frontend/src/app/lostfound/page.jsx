'use client'; // Indique que le code utilise des hooks React et sera exécuté côté client

import { useState } from 'react';

export default function LostAndFoundPage() {
  const [itemDescription, setItemDescription] = useState(''); // État pour la description de l'objet perdu
  const [location, setLocation] = useState(''); // État pour l'emplacement
  const [dateLost, setDateLost] = useState(''); // État pour la date
  const [foundItems, setFoundItems] = useState([]); // État pour les objets trouvés
  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche d'objets trouvés

  // Fonction pour soumettre un objet perdu
  const handleSubmitLostItem = () => {
    if (!itemDescription || !location || !dateLost) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    // Traitement de l'objet perdu (par exemple, envoi à une API)
    alert("Objet perdu soumis avec succès !");
    setItemDescription('');
    setLocation('');
    setDateLost('');
  };

  // Fonction pour rechercher les objets trouvés
  const handleSearchFoundItems = () => {
    // Implémenter la logique de recherche des objets trouvés
    // Par exemple, filtrer `foundItems` selon le terme de recherche
    const filteredItems = foundItems.filter(item =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoundItems(filteredItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Smart Campus</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/chatbot" className="text-gray-700 hover:text-blue-600">Campus Navigation</a>
          <a href="/lost-and-found" className="text-gray-700 hover:text-blue-600">Lost & Found</a>
        </div>
      </nav>

      {/* Page Title */}
      <div className="text-center mt-8 mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">🔍 Lost & Found</h2>
        <p className="text-gray-500">Signale un objet perdu ou consulte les objets trouvés par d'autres.</p>
      </div>

      {/* Formulaire pour signaler un objet perdu */}
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">📍 Signaler un objet perdu</h3>
          <div>
            <input
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              placeholder="Description de l'objet"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Lieu de la perte"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="date"
              value={dateLost}
              onChange={(e) => setDateLost(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleSubmitLostItem}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Soumettre l'objet perdu
          </button>
        </div>
      </div>

      {/* Recherche des objets trouvés */}
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800">🔍 Rechercher des objets trouvés</h3>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un objet trouvé"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleSearchFoundItems}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Rechercher
        </button>

        {/* Liste des objets trouvés */}
        <div className="mt-4 space-y-4">
          {foundItems.length === 0 ? (
            <p className="text-gray-500">Aucun objet trouvé correspondant à votre recherche.</p>
          ) : (
            foundItems.map((item, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow-sm">
                <p><strong>Description :</strong> {item.description}</p>
                <p><strong>Lieu :</strong> {item.location}</p>
                <p><strong>Date trouvée :</strong> {item.dateFound}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
