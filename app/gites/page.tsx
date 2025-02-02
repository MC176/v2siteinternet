'use client'

import React from 'react';
import { motion } from 'framer-motion';
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

const gites = [
  { name: 'Châteaunette', href: '/gites/chateaunette', description: 'Gîte en Ardèche' },
  { name: 'Côté Source', href: '/gites/cote-source', description: 'Gîte en Ardèche' },
  { name: 'Noisettiers', href: '/gites/noisettiers', description: 'Gîte en Ardèche' },
  { name: 'Maisonette', href: '/gites/maisonette', description: 'Gîte en Ardèche' },
  { name: 'Citronniers', href: '/gites/citronniers', description: 'Gîte en Ardèche' },
  { name: 'Figuiers', href: '/gites/figuiers', description: 'Gîte en Ardèche' },
];

function GitesPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Gîtes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gites.map((gite, index) => (
            <motion.div
              key={gite.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={gite.href}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gray-300 transform skew-y-3 origin-top-left"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-2xl">Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{gite.name}</h2>
                    <p className="text-gray-600">{gite.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    
      <GitesPage />
    
  );
}

export default App;
