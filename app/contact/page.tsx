'use client'

import React from 'react';
import { useState } from 'react';
import { MapPin, Wine, Mountain, Castle, Building, Flower, ShoppingBag } from 'lucide-react';

const destinations = [
  {
    title: "DÉGUSTATION À CHÂTEAUNEUF-DU-PAPE",
    description: "Découvrez l'histoire et le prestige des vins de Châteauneuf-du-Pape, berceau de grands crus reconnus mondialement.",
    image: "https://images.unsplash.com/photo-1566903451935-7e8833a0f12f?auto=format&fit=crop&q=80&w=1200",
    cta: "Organiser une dégustation avec nos partenaires",
    icon: Wine
  },
  {
    title: "LES CALANQUES DE CASSIS",
    description: "Explorez les majestueuses calanques, où les falaises calcaires plongent dans les eaux cristallines de la Méditerranée.",
    image: "https://images.unsplash.com/photo-1548525207-59f432f2c172?auto=format&fit=crop&q=80&w=1200",
    cta: "Découvrir notre guide exclusif",
    icon: Mountain
  },
  {
    title: "GORDES ET LE LUBERON",
    description: "Laissez-vous séduire par le charme authentique de Gordes, joyau perché du Luberon aux ruelles pavées centenaires.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1200",
    cta: "Explorer les plus beaux villages",
    icon: Castle
  },
  {
    title: "VISITE D'AVIGNON",
    description: "Plongez dans l'histoire fascinante d'Avignon, cité des papes, avec son palais gothique et son célèbre pont.",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80&w=1200",
    cta: "Planifier votre journée à Avignon",
    icon: Building
  },
  {
    title: "LES LAVANDES DU PLATEAU DE VALENSOLE",
    description: "Admirez l'infini des champs de lavande qui colorent le plateau de leurs tons violets envoûtants.",
    image: "https://images.unsplash.com/photo-1563511083-76bde3516cb1?auto=format&fit=crop&q=80&w=1200",
    cta: "Quand et où admirer la lavande en fleur ?",
    icon: Flower
  },
  {
    title: "JOURNÉE SHOPPING À AIX-EN-PROVENCE",
    description: "Flânez dans les élégantes rues d'Aix-en-Provence, entre boutiques de créateurs et marchés provençaux.",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&q=80&w=1200",
    cta: "Découvrez nos recommandations exclusives",
    icon: ShoppingBag
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=2000")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contactez-nous</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    
      <Contact />
    
  );
}

export default App;
