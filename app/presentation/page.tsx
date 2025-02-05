'use client'
import React, { useState } from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee, Heart, Waves, Home, Moon, Star, Telescope } from 'lucide-react';

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const commonAreaImages = [
    "/images/gites/cote-jardin/piece.jpg",
    "/images/gites/cote-jardin/cuisine.jpg",
  ];

  const outdoorSpaceImages = [
    "/images/gites/notused/mare.jpg",
    "/images/gites/notused/bananier.png",
    "/images/gites/noisettiers/veggetation.png",
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

      {/* Combined Historical and Farniente Section */}
      <section className="relative py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/presentation/chat.png"
                  alt="Vue du domaine" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-light text-stone-800 tracking-wider mb-8">
                Le farniente Ardéchois
              </h2>
              <p className="text-lg leading-relaxed text-stone-600">
                En Ardèche, dans une ville qui surplombe le Rhône, une ancienne maladrerie du 12e siècle 
                et son jardin vous invitent à un voyage dans le temps. Construite en 1158, cette bâtisse 
                historique a accueilli Saint Louis lors de son retour des croisades. Transformée en hôpital 
                sous Louis XIII, elle est aujourd'hui un domaine préservé, où charme et authenticité se 
                conjuguent à la perfection.
              </p>
            </div>
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

      {/* Stargazing Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
                Là où les étoiles touchent la terre
              </h2>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-3xl mx-auto">
                Dans notre coin préservé d'Ardèche, loin des lumières de la ville, 
                le ciel nocturne révèle toute sa splendeur. Un spectacle naturel 
                qui fait de notre domaine un site reconnu pour l'observation des étoiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <NatureFeature 
                icon={<Moon className="w-8 h-8" />}
                title="Ciel Préservé"
                description="Zone protégée sans pollution lumineuse, offrant une visibilité exceptionnelle des constellations"
                light
              />
              <NatureFeature 
                icon={<Star className="w-8 h-8" />}
                title="Site d'Exception"
                description="Reconnu pour ses conditions optimales d'observation astronomique toute l'année"
                light
              />
              <NatureFeature 
                icon={<Telescope className="w-8 h-8" />}
                title="Expérience Unique"
                description="Des soirées d'observation guidées et des équipements professionnels à disposition"
                light
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-stone-200 italic mb-12">
                "Un des rares endroits en France où l'on peut encore observer 
                la Voie Lactée dans toute sa splendeur. Une expérience qui 
                transforme à jamais notre perception du ciel nocturne."
              </p>

              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-full 
                text-lg transition-all hover:bg-white hover:text-stone-900 
                hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] duration-300">
                Réservez votre nuit sous les étoiles
              </button>
            </div>
          </div>
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

function NatureFeature({ icon, title, description, light }) {
  return (
    <div className="text-center p-8 rounded-lg transition-all hover:transform hover:scale-105">
      <div className={`mb-4 flex justify-center ${light ? 'text-white' : 'text-stone-700'}`}>{icon}</div>
      <h3 className={`text-xl font-light mb-3 ${light ? 'text-white' : 'text-stone-800'}`}>{title}</h3>
      <p className={light ? 'text-stone-200' : 'text-stone-600'}>{description}</p>
    </div>
  );
}

export default App;
