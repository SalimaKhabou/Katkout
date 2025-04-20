'use client'; // Indique que le code utilise des hooks React et sera exécuté côté client

import { useState } from 'react';
import Navbar from '../../components/Navrbar'; // update path as needed

export default function LostAndFoundPage() {
  const [itemDescription, setItemDescription] = useState(''); // État pour la description de l'objet perdu
  const [location, setLocation] = useState(''); // État pour l'emplacement
  const [dateLost, setDateLost] = useState(''); // État pour la date
  const [foundItems, setFoundItems] = useState([]); // État pour les objets trouvés
  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche d'objets trouvés

  // Fonction pour rechercher les objets trouvés
  const handleSearchFoundItems = () => {
    // Implémenter la logique de recherche des objets trouvés
    // Par exemple, filtrer `foundItems` selon le terme de recherche
    const filteredItems = foundItems.filter(item =>
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoundItems(filteredItems);
  };

  const handleSubmitLostItem = async () => {
    if (!itemDescription || !location || !dateLost) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    const response = await fetch('http://localhost:8000/lost-and-found', {
      method: 'POST',
      body: JSON.stringify({
        description: itemDescription,
        location,
        date_lost: dateLost
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const responseText = await response.text(); // Récupérer la réponse sous forme de texte
  
    // Affiche la réponse brute dans la console
    console.log('Réponse brute :', responseText);
  
    try {
      const result = JSON.parse(responseText); // Essaye de parser le JSON
      if (response.ok) {
        alert('Objet perdu soumis avec succès');
        // Récupérer les objets trouvés correspondants après soumission de l'objet perdu
        const matchesResponse = await fetch(`/api/matches/${result.id}`);
        const matchesResponseText = await matchesResponse.text();
        console.log('Réponse matches brute :', matchesResponseText);
        const matches = JSON.parse(matchesResponseText);
        setFoundItems(matches);  // Mettre à jour les objets trouvés
      } else {
        alert('Erreur lors de la soumission');
      }
    } catch (error) {
      console.error('Erreur de parsing JSON :', error);
      alert('Erreur lors du parsing de la réponse.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Navbar */}
      <Navbar />

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
