'use client';

import React from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light text-center mb-6">
            Un havre de paix en Ardèche
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-light">
            Un domaine d'exception niché dans un écrin de verdure, où histoire et confort se rencontrent.
          </p>
          <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
        </div>
      </div>

      {/* Historical Section */}
      <section className="relative py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 font-light text-stone-800">Notre Histoire</h2>
            <p className="text-lg leading-relaxed text-stone-600">
              En Ardèche, dans une ville qui surplombe le Rhône, une ancienne maladrerie du 12e siècle 
              et son jardin vous invitent à un voyage dans le temps. Construite en 1158, cette bâtisse 
              historique a accueilli Saint Louis lors de son retour des croisades. Transformée en hôpital 
              sous Louis XIII, elle est aujourd'hui un domaine préservé, où charme et authenticité se 
              conjuguent à la perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<TreePine className="w-8 h-8" />}
              title="Domaine Naturel"
              description="40 hectares de nature préservée avec bois, vignes et champs de lavande"
            />
            <FeatureCard 
              icon={<Pool className="w-8 h-8" />}
              title="Piscine Panoramique"
              description="Une piscine à débordement avec vue imprenable sur la vallée"
            />
            <FeatureCard 
              icon={<Mountain className="w-8 h-8" />}
              title="Cadre Exceptionnel"
              description="Un site historique surplombant le Rhône dans un calme absolu"
            />
            <FeatureCard 
              icon={<Utensils className="w-8 h-8" />}
              title="Équipements"
              description="Four à pain, terrain de pétanque, et espaces de détente"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="6 Gîtes de Caractère"
              description="Des hébergements alliant authenticité et confort moderne"
            />
            <FeatureCard 
              icon={<Coffee className="w-8 h-8" />}
              title="Moments Privilégiés"
              description="Des espaces conviviaux pour des instants inoubliables"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-8 font-light">
            Le luxe ultime, c'est le temps
          </h2>
          <p className="text-lg mb-12 text-stone-300">
            Offrez-vous une pause hors du temps dans notre domaine d'exception
          </p>
          <button className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg 
            transition-all hover:bg-stone-100 hover:scale-105">
            Réservez votre séjour
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-lg bg-stone-50 hover:bg-stone-100 transition-all 
      hover:scale-105 cursor-pointer">
      <div className="text-stone-800 mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}

export default App;