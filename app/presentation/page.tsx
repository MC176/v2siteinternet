'use client';

import React, { useState } from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee, Heart, Waves, Home } from 'lucide-react';

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const commonAreaImages = [
    'https://images.unsplash.com/photo-1597211684565-dca64d72c5cc?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&q=80'
  ];

  const outdoorSpaceImages = [
    'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&q=80'
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'url("/images/gites/chateaunette/photo 30.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light text-center mb-6 tracking-wider">
            Un havre de paix en Ardèche
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-light tracking-wide">
            Calme, sérénité, vacances.
          </p>
          <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Historical Section */}
      <section className="relative py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 font-light text-stone-800 tracking-wide">Notre Histoire</h2>
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

      {/* Common Area Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">Côté Jardin</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Un espace convivial face au jardin du mas, pensé pour les moments de partage. 
                Une grande salle commune et sa cuisine équipée vous permettent d'organiser des repas 
                mémorables avec famille et amis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonAreaImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-96 overflow-hidden rounded-xl group"
                >
                  <img 
                    src={image} 
                    alt={index === 0 ? "Salle commune" : "Cuisine équipée"} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-light tracking-wide">
                      {index === 0 ? "Salle de réception" : "Cuisine commune"}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Spaces Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
                Espaces Extérieurs
              </h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Découvrez nos espaces extérieurs soigneusement aménagés, du four à pain traditionnel 
                aux jardins paisibles. Un bassin naturel alimenté par une source offre un havre de 
                fraîcheur au cœur de la propriété.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outdoorSpaceImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-80 overflow-hidden rounded-xl group cursor-pointer"
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Espace extérieur ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Natural Features */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <NatureFeature 
                icon={<Waves className="w-8 h-8" />}
                title="Source Naturelle"
                description="Un bassin alimenté par une source naturelle, offrant un espace de détente unique"
              />
              <NatureFeature 
                icon={<Heart className="w-8 h-8" />}
                title="Jardins du Mas"
                description="Des jardins paysagers où se mêlent fleurs locales et plantes aromatiques"
              />
              <NatureFeature 
                icon={<Home className="w-8 h-8" />}
                title="Terrasses Privatives"
                description="Chaque gîte dispose de son espace extérieur privé avec vue sur la vallée"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-8 font-light tracking-wide">
            Le luxe ultime, c'est le temps
          </h2>
          <p className="text-lg mb-12 text-stone-300">
            Offrez-vous une pause hors du temps dans notre domaine d'exception
          </p>
          <button className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg 
            transition-all hover:bg-stone-100 hover:scale-105 hover:shadow-lg">
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
      hover:scale-105 cursor-pointer hover:shadow-lg duration-300">
      <div className="text-stone-800 mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}

function NatureFeature({ icon, title, description }) {
  return (
    <div className="text-center p-8 rounded-lg transition-all hover:transform hover:scale-105">
      <div className="text-stone-700 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-light mb-3 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
}

export default App;