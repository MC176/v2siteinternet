'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar, ArrowRight, Users2, GlassWater, Building2, PartyPopper, Users2Icon, ChevronDown } from 'lucide-react';

const gites = [
  {
    name: 'Côté Source',
    description: "Terrasse majestueuse, vue sur la nature et la source du Mas, ambiance authentique et apaisante.",
    image: "/images/gites/cote-source/photo1.png",
    capacity: '4 personnes',
    rating: 4.9,
    price: '150€',
    features: ['Grande terrasse panoramique de 60m²', 'Vue sur le domaine','Grands espaces'],
    href: '/gites/cote-source'
  },
  {
    name: 'Noisetiers',
    description: "Logement traversant Est/Ouest, proche des noisetiers, accès par un porche pittoresque, couchers de soleil splendides.",
    image: "/images/gites/noisettiers/piscinevue.avif",
    capacity: '2 personnes',
    rating: 4.9,
    price: '130€',
    features: ['Accès possible par 2 terrasses', 'Porche en pierre, entrée plein de charme', 'Attrait authentique et confort moderne'],
    href: '/gites/noisettiers'
  },
  {
    name: 'Figuiers',
    description: "Panoramas spectaculaires, terrasse surélevée, salon lumineux, salle de bain moderne, atmosphère paisible.",
    image: "/images/gites/figuiers/photo2.jpeg",
    capacity: '3 personnes',
    rating: 4.9,
    price: '130€',
    features: ['Vue panoramique sur la nature environnante', 'Luminosité exceptionnelle', 'Gîte en hauteur'],
    href: '/gites/figuiers'
  },
  {
    name: 'Citronniers',
    description: "Fraîcheur estivale, vue sur cour fleurie, baigné de lumière, parfums légers de citronniers.",
    image: "/images/gites/citronniers/premiersalon.png",
    capacity: '3 personnes',
    rating: 4.8,
    price: '130€',
    features: ["Végétation luxuriante et apaisante", 'Vue sur les jardins intérieurs', 'Lumière naturelle'],
    href: '/gites/citronniers'
  },
  {
    name: 'Maisonette',
    description: "Duplex cosy, proche piscine, charme atypique, ombragé par un mûrier, avec superbe vue sur les montagnes.",
    image: "/images/gites/maisonnette/montagne.avif",
    capacity: '2 personnes',
    rating: 4.7,
    price: '120€',
    features: ['Esplanade ombragée', 'Dupleix chaleureux', 'Charme atypique',],
    href: '/gites/maisonette'
  },
  {
    name: 'Châteaunette',
    description: "Spacieux, chaleureux, avec mezzanine, grande cuisine et terrasse partagée, idéal pour une famille ou des amis.",
    image: "images/gites/chateaunette/photo17.avif",
    capacity: '7 personnes',
    rating: 4.9,
    price: '180€',
    features: ['Spacieux et lumineux', 'Grande hauteur sous plafond', 'Esprit convivial et familial'],
    href: '/gites/chateaunette'
  },
];

const privatisationFeatures = [
  {
    icon: GlassWater,
    title: "Réceptions",
    description: "Anniversaires et célébrations extraordinaire dans un cadre convivial et naturel."
  },
  {
    icon: Building2,
    title: "Séminaires",
    description: "Espaces de réunion, activités team-building et hébergement tout confort."
  },
  {
    icon: PartyPopper,
    title: "Événements festifs",
    description: "Enterrements de vie de célibataire dans un cadre privé et raffiné."
  },
  {
    icon: Users2Icon,
    title: "Réunions familiales",
    description: "Cousinades et retrouvailles dans un environnement spacieux et convivial."
  }
];

function GitesPage() {
  const scrollToPrivatisation = () => {
    const privatisationSection = document.getElementById('privatisation');
    privatisationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="/images/gites/cote-source/photo5.avif"
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
            <h1 className="text-6xl font-bold mb-4">Nos gîtes d&apos;exception</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez nos gîtes de charme en Ardèche, où authenticité et modernité se rencontrent pour des séjours inoubliables.
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

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center mt-16 mb-8 cursor-pointer"
          onClick={scrollToPrivatisation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ y: 5 }}
        >
          <p className="text-lg font-semibold text-indigo-600 mb-2">Découvrez nos offres de privatisation</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-indigo-600" />
          </motion.div>
        </motion.div>

        {/* Privatisation Section */}
        <motion.div 
          id="privatisation"
          className="mt-24 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative z-10 py-20 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-black mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Privatisez l&apos;ensemble de nos gîtes
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {privatisationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 transform transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                href="/contact"
                className="inline-flex items-center px-12 py-4 bg-white border border-black text-black rounded-full transition-colors duration-300 hover:bg-black hover:text-white relative overflow-hidden group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">Contactez-nous pour une offre personnalisée</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.a>
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
