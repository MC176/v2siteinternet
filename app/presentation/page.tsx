'use client'
import React, { useState } from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee, Heart, Waves, Home, Moon, Star, Telescope, Phone } from 'lucide-react';

function App() {
  const [activeImage, setActiveImage] = useState(0);
  
  const poolImages = [
    "/images/gites/piscine/photo 19.png",
    "/images/gites/piscine/piscinevue.png",
    "/images/gites/piscine/photo 18.png",
  ];

  const pizzaOvenImages = [
    "/images/gites/four/four1.jpg",
    "/images/gites/four/four2.jpg",
    "/images/gites/four/four3.jpg",
  ];

  const receptionImages = [
    "/images/gites/reception/reception1.jpg",
    "/images/gites/reception/reception2.jpg",
    "/images/gites/reception/reception3.jpg",
  ];

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
            backgroundImage: 'url("/images/gites/noisettiers/piscinevue.png")',
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

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider mb-8">
              Bienvenue au Mas d'Ardèche
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-12">
              Au cœur d'un domaine de 40 hectares, découvrez six gîtes d'exception 
              nichés dans une ancienne maladrerie du XIIe siècle. Un lieu où l'histoire 
              rencontre le luxe contemporain, offrant une expérience unique de séjour 
              en Ardèche.
            </p>
            <div className="h-px w-24 bg-stone-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Combined Historical and Farniente Section */}
      <section className="relative py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-light text-stone-800 tracking-[0.2em] mb-3 uppercase">
                Le Farniente
              </h2>
              <span className="text-2xl md:text-3xl text-stone-600 italic tracking-wide">Ardéchois</span>
              <div className="w-24 h-1 bg-stone-300 mx-auto mt-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/presentation/chat.png"
                  alt="Vue du domaine 1" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/gites/chateaunette/photo 30.png"
                  alt="Vue du domaine 2" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/gites/notused/chat.jpg"
                  alt="Vue du domaine 3" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-stone-600 text-center">
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

      {/* Pool Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">La Piscine</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Un espace de détente avec vue panoramique sur la vallée.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {poolImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-80 overflow-hidden rounded-xl group"
                >
                  <img 
                    src={image}
                    alt={`Vue de la piscine ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ul className="text-stone-600 space-y-2">
                <li>• Piscine sécurisée et éclairée la nuit au besoin</li>
                <li>• Profondeur : entre 1.10m et 2.20m</li>
                <li>• Horaires d'ouverture : 8h-20h</li>
              </ul>
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

      {/* Pizza Oven Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">Four à Pizza</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Un espace convivial pour des moments de partage inoubliables.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {pizzaOvenImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-80 overflow-hidden rounded-xl group"
                >
                  <img 
                    src={image}
                    alt={`Four à pizza ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <p className="text-stone-600">
                Four à pizza à disposition. Possibilité de faire du pain et partager des moments conviviaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Receptions Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
                Cousinades, Réceptions & Fêtes
              </h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Un cadre exceptionnel pour vos événements spéciaux.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {receptionImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-80 overflow-hidden rounded-xl group"
                >
                  <img 
                    src={image}
                    alt={`Réception ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-stone-600 mb-8">Nous contacter pour plus de détails</p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-stone-800 text-white px-8 py-4 rounded-full
                  transition-all hover:bg-stone-700 hover:scale-105 hover:shadow-lg duration-300"
              >
                <Phone className="w-5 h-5" />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stargazing Section */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-16 space-y-4">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
                Là où les étoiles touchent la terre
              </h2>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-3xl mx-auto">
                Dans notre coin préservé d'Ardèche, loin des lumières de la ville, 
                le ciel nocturne révèle toute sa splendeur. Un spectacle naturel 
                qui fait de notre domaine un site reconnu pour l'observation des étoiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Moon className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Ciel Préservé</h3>
                <p className="text-stone-300">Zone protégée sans pollution lumineuse, offrant une visibilité exceptionnelle des constellations</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Star className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Site d'Exception</h3>
                <p className="text-stone-300">Reconnu pour ses conditions optimales d'observation astronomique toute l'année</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Telescope className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Expérience Unique</h3>
                <p className="text-stone-300">Des soirées d'observation guidées et des équipements professionnels à disposition</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto relative">
              <div className="absolute -top-12 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
              <p className="text-lg text-stone-200 italic mb-12 relative">
                "Un des rares endroits en France où l'on peut encore observer 
                la Voie Lactée dans toute sa splendeur. Une expérience qui 
                transforme à jamais notre perception du ciel nocturne."
              </p>

              <button className="relative bg-transparent border-2 border-white/80 px-12 py-4 rounded-full 
                text-lg transition-all hover:bg-white hover:text-stone-900 
                hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] duration-300
                backdrop-blur-sm">
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