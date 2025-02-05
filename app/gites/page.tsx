'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar, ArrowRight, Users2, GlassWater, Building2, PartyPopper, Users2Icon } from 'lucide-react';

const gites = [
  {
    name: 'Côté Source',
    description: "Un havre de paix moderne avec des finitions luxueuses, parfait pour les familles en quête de tranquillité.",
    image: "/images/gites/cote-source/photo1.png",
    capacity: '4 personnes',
    rating: 4.8,
    price: '150€',
    features: ['Jardin privé', 'Spa', 'Vue sur la vallée'],
    href: '/gites/cote-source'
  },
  {
    name: 'Noisettiers',
    description: "Une authentique maison ardéchoise rénovée alliant le charme de l'ancien au confort moderne.",
    image: "/images/gites/noisettiers/piscinevue.png",
    capacity: '8 personnes',
    rating: 4.9,
    price: '220€',
    features: ['Grande terrasse', 'Barbecue', 'Salle de jeux'],
    href: '/gites/noisettiers'
  },
  {
    name: 'Figuiers',
    description: "Un gîte de caractère avec pierres apparentes et poutres anciennes, rénové avec goût.",
    image: "/images/gites/figuiers/photo 2.jpeg",
    capacity: '4 personnes',
    rating: 4.9,
    price: '160€',
    features: ['Cheminée', 'Jardin paysager', 'Cave à vin'],
    href: '/gites/figuiers'
  },
  {
    name: 'Citronniers',
    description: "Une villa contemporaine baignée de lumière avec des espaces de vie généreux et confortables.",
    image: "/images/gites/citronniers/salon3.jpg",
    capacity: '6 personnes',
    rating: 4.8,
    price: '190€',
    features: ['Piscine chauffée', 'Home cinéma', "Cuisine d'été"],
    href: '/gites/citronniers'
  },
  {
    name: 'Maisonette',
    description: "Un cocon intimiste parfait pour les couples, niché dans un écrin de verdure préservé.",
    image: "/images/gites/maisonnette/montagne.png",
    capacity: '2 personnes',
    rating: 4.7,
    price: '120€',
    features: ['Jacuzzi', 'Petit jardin', 'Terrasse privée'],
    href: '/gites/maisonette'
  },
  {
    name: 'Châteaunette',
    description: "Une demeure de charme nichée au cœur de l'Ardèche, offrant une vue imprenable sur les montagnes environnantes.",
    image: "images/gites/chateaunette/photo 17.png",
    capacity: '6 personnes',
    rating: 4.9,
    price: '180€',
    features: ['Piscine privée', 'Terrasse panoramique', 'Cuisine équipée'],
    href: '/gites/chateaunette'
  },
];

const privatisationFeatures = [
  {
    icon: GlassWater,
    title: "Réceptions de Prestige",
    description: "Mariages, anniversaires et célébrations d'exception dans un cadre enchanteur"
  },
  {
    icon: Building2,
    title: "Séminaires d'Entreprise",
    description: "Espaces de réunion, activités team-building et hébergement tout confort"
  },
  {
    icon: PartyPopper,
    title: "Événements Festifs",
    description: "Enterrements de vie de célibataire dans un cadre privé et raffiné"
  },
  {
    icon: Users2Icon,
    title: "Réunions Familiales",
    description: "Cousinades et retrouvailles dans un environnement spacieux et convivial"
  }
];

function GitesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src="/images/gites/cote-source/photo 5.png"
          alt="Vue panoramique des gîtes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4">Nos Gîtes d'Exception</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez notre sélection de gîtes de charme en Ardèche, où luxe et authenticité se rencontrent pour des séjours inoubliables.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gites.map((gite, index) => (
            <motion.div
              key={gite.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a href={gite.href} className="block">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-64">
                    <img 
                      src={gite.image} 
                      alt={gite.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold">{gite.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{gite.name}</h2>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-indigo-600">{gite.price}</span>
                        <span className="text-gray-500 text-sm">/nuit</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{gite.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{gite.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Ardèche</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {gite.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Privatisation Section */}
        <motion.div 
          className="mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform -skew-y-6 origin-top-left"></div>
          <div className="relative z-10 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Privatisez l'Ensemble de nos Gîtes
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {privatisationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 inline-flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                whileHover={{ y: -2 }}
              >
                Contactez-nous pour une offre personnalisée
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return <GitesPage />;
}

export default App;
