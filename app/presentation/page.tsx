'use client'
import { useEffect, useState } from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee, Heart, Waves, Home, Moon, Star, Telescope, Phone, Clock, CheckCircle, MapPin } from 'lucide-react';

function App() {
  const [activeImage, setActiveImage] = useState(0);
  
  const poolImages = [
    "/images/gites/piscine/nature.jpg",
    "/images/gites/piscine/photo1.png",
    "/images/gites/chateaunette/Photo 16.png",
  ];

  const pizzaOvenImages = [
    "/images/gites/four/Photo 29.png",
    "/images/gites/four/Photo 28.png",
    "/images/gites/four/Photo 33.png",
  ];

  const receptionImages = [
    "/images/gites/cote-jardin/enceinte.jpg",
    "/images/gites/cote-jardin/reception.png",
    "/images/gites/cote-jardin/table.jpg",
  ];

  const nuitImages = [
    "/images/gites/cote-jardin/gens.jpg",
    "/images/gites/notused/nuit.jpg",
    "/images/gites/piscine/piscinenuit3.png",
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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroImage = document.querySelector('.hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
      <div 
          className="hero-image absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url("/images/gites/noisettiers/piscinevue.png")',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light text-center mb-6 tracking-wider">
            Votre havre de paix
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl font-light tracking-wide">
            Calme, sérénité, vacances.
          </p>
          <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Introduction Section */}
      <section className=" relative py-32 bg-white">
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
      <section className="relative py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-poppins font-light text-stone-800 tracking-[0.1em] mb-2">
               
              </h2>
              <span className="text-2xl md:text-3xl text-stone-600 tracking-wide"> Le Farniente </span>
              <span className="text-2xl md:text-3xl text-stone-600 italic tracking-wide"> Ardéchois</span>
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

      {/* Pool Section - Updated with new design */}
      <section className="relative py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider flex-shrink-0">
                La Piscine
              </h2>
              <div className="h-px w-full bg-stone-200 hidden lg:block" />
              <p className="text-lg text-stone-600 max-w-2xl text-center lg:text-right">
                Détendez-vous.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {poolImages.map((image, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[400px] overflow-hidden rounded-xl">
                      <img 
                        src={image}
                        alt={`Vue de la piscine ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Clock className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Horaires</span>
                        <span className="text-stone-700 font-medium">8h - 20h</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Waves className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Profondeur</span>
                        <span className="text-stone-700 font-medium">1.10m - 2.20m</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Heart className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Sécurité</span>
                        <span className="text-stone-700 font-medium">Sécurisée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* De jour comme de nuit Section - Updated with new design */}
            <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider flex-shrink-0">
                La nuit au Mas
              </h2>
              <div className="h-px w-full bg-stone-200 hidden lg:block" />
              <p className="text-lg text-stone-600 max-w-2xl text-center lg:text-right">
                Détendez-vous.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {nuitImages.map((image, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[400px] overflow-hidden rounded-xl">
                      <img 
                        src={image}
                        alt={`Vue de la piscine ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Clock className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Horaires</span>
                        <span className="text-stone-700 font-medium">8h - 20h</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Waves className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Profondeur</span>
                        <span className="text-stone-700 font-medium">1.10m - 2.20m</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                        <Heart className="w-6 h-6 text-stone-600" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-stone-500">Sécurité</span>
                        <span className="text-stone-700 font-medium">Sécurisée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pizza Oven Section - Updated with new design */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider flex-shrink-0">
                Four à Pizza
              </h2>
              <div className="h-px w-full bg-stone-200 hidden lg:block" />
              <p className="text-lg text-stone-600 max-w-2xl text-center lg:text-right">
                Le four à pain et à pizza est à disposition pour tous à tout moment. Nos grands espaces permettent de déjeuner dehors ou dîner à la belle étoile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pizzaOvenImages.map((image, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-xl">
                    <img 
                      src={image}
                      alt={`Four à pizza ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="mt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="h-[2px] w-8 bg-stone-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">Disponible 24/7</span>
              </div>
              <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">Matériel fourni</span>
              </div>
              <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">Espace extérieur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Spaces Section - Updated with new design */}
      <section className="relative py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider flex-shrink-0">
                Espaces Extérieurs
              </h2>
              <div className="h-px w-full bg-stone-200 hidden lg:block" />
              <p className="text-lg text-stone-600 max-w-2xl text-center lg:text-right">
                Découvrez nos espaces extérieurs soigneusement aménagés, du bassin naturel aux jardins paisibles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outdoorSpaceImages.map((image, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-xl">
                    <img 
                      src={image}
                      alt={`Espace extérieur ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="mt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="h-[2px] w-8 bg-stone-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">40 hectares</span>
              </div>
              <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">Vue panoramique</span>
              </div>
              <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-stone-600" />
                </div>
                <span className="text-stone-600">Espaces détente</span>
              </div>
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