'use client'
import { useEffect, useState } from 'react';
import { ChevronDown, School as Pool, Mountain, Utensils, Users, TreePine, Coffee, Heart, Waves, Home, Moon, Star, Telescope, Phone, Clock, CheckCircle, MapPin, ArrowRight, Ruler } from 'lucide-react';

function App() {
  const [activeImage, setActiveImage] = useState(0);
  
  const poolImages = [
    "/images/gites/piscine/nature.avif",
    "/images/gites/piscine/photo1.avif",
    "/images/gites/piscine/piscine.avif",
  ];

  const pizzaOvenImages = [
    "/images/gites/four/Photo 29.avif",
    "/images/gites/four/Photo 28.avif",
    "/images/gites/four/Photo 33.avif",
  ];

  const receptionImages = [
    "/images/gites/cote-jardin/enceinte.avif",
    "/images/gites/cote-jardin/reception.avif",
    "/images/gites/cote-jardin/table.avif",
  ];

  const nuitImages = [
    "/images/gites/cote-jardin/gens.avif",
    "/images/gites/notused/nuit.avif",
    "/images/gites/piscine/piscinenuit3.avif",
  ];

  const commonAreaImages = [
    "/images/gites/cote-jardin/piece.avif",
    "/images/gites/cote-jardin/cuisine.avif",
  ];

  const outdoorSpaceImages = [
    "/images/gites/notused/cour.avif",
    "/images/gites/notused/bananier.avif",
    "/images/gites/noisettiers/veggetation.avif",
  ];

  const SourceImages = [
    "/images/gites/notused/mare.avif",
    "/images/presentation/mare.png",
    "/images/gites/noisettiers/arbre.avif",
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
            backgroundImage: 'url("/images/gites/noisettiers/piscinevue.avif")',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
            Un havre de paix
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
              Bienvenue au Mas d&apos;Eylieux
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-12">
              Découvrez nos 6 gîtes d&apos;exception au sein d&apos;un Mas rénové en pierres du XIIe siècle, <br/>
              au cœur d&apos;un domaine de 40 hectares, en Ardèche méridionale.
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
                  src="images/presentation/chat.avif"
                  alt="Vue du domaine 1" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/gites/chateaunette/photo30.avif"
                  alt="Vue du domaine 2" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="images/gites/notused/chat.avif"
                  alt="Vue du domaine 3" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-stone-600 text-center">
              Construit en 1158, le Mas d&apos;Eylieux est un lieu chargé d&apos;histoire. Il abrite des vestiges d&apos;une petite cité gallo-romaine et fut, au XIIIe siècle, une halte sur la route empruntée par le roi Louis IX. En chemin vers la cathédrale de Viviers, ce dernier aurait traversé la région, marquant de son passage ce domaine empreint d&apos;authenticité. Aujourd&apos;hui encore, le Mas d&apos;Eylieux séduit par son charme préservé et son atmosphère unique, témoins d&apos;un riche héritage historique.
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
          Privatisation du domaine
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Pour vos réceptions & fêtes.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {receptionImages.map((image, index) => (
          <div
            key={index}
            className="relative h-[400px] overflow-hidden rounded-xl group"
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
        <p className="text-lg text-stone-600 mb-8">Un cadre exceptionnel pour vos événements en famille ou entre amis.</p>
        <a
          href="/contact"
          className="group inline-flex items-center px-12 py-4 bg-white border border-black rounded-full relative overflow-hidden transition-colors duration-300"
        >
          <span className="relative z-10 font-medium group-hover:text-white transition-colors duration-300">
            <Phone className="inline-block w-5 h-5 mr-2" />
               Nous contacter
          </span>
          <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
          <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Pool Section - Updated with new design */}
<section className="relative py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
          La piscine
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Espace de détente au coeur du Mas.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
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

        {/*<div className="mt-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              {/*<div className="flex flex-col items-center justify-center p-4">
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
              </div>*}
            </div>
          </div>
        </div>*/}
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-stone-50 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Ruler className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">10m x 5m</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Waves className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">1.10m - 2.20m</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Heart className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Transats, bancs et balancelle</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* De jour comme de nuit Section - Updated with new design */}
<section className="relative py-24 bg-stone-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
          La nuit au Mas
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Éclairage nocturne disponible dans l&apos;ensemble du Mas.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
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

        {/*<div className="mt-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              {/*<div className="flex flex-col items-center justify-center p-4">
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
              </div>*}
            </div>
          </div>
        </div>*/}
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Clock className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Espaces intérieurs lumineux</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Waves className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Lumières extérieures</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Heart className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Piscine éclairée</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Pizza Oven Section - Updated with new design */}
<section className="relative py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
          Four à pizza
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Le four à pizza est à votre disposition.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
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

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-stone-50 rounded-2xl p-8 shadow-sm">
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
          <span className="text-stone-600">Tables, bancs et chaises disponibles (40 personnes)</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Outdoor Spaces Section - Updated with new design */}
<section className="relative py-24 bg-stone-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
          Espaces extérieurs
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Profitez d&apos;un cadre exceptionnel où la nature s&apos;épanouit dans toute sa diversité,
         offrant un véritable havre de paix pour la faune et la flore.
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
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
          <span className="text-stone-600">Biodiversité</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Mountain className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Nature préservée</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Coffee className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Havre de paix</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Source Section - Updated with new design */}
<section className="relative py-24 bg-stone-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mb-6 font-light text-stone-800 tracking-wide">
          La Source du Mas d&apos;Eylieux
        </h2>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
        Cette source naturelle - filtrée par les montagnes - alimente nos bassins. 
        </p>
        <div className="w-24 h-1 bg-stone-300 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SourceImages.map((image, index) => (
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
          <span className="text-stone-600">Source naturelle</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Mountain className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Jardins paisibles</span>
        </div>
        <div className="h-px md:h-8 w-8 md:w-px bg-stone-200" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
            <Coffee className="w-6 h-6 text-stone-600" />
          </div>
          <span className="text-stone-600">Espaces ombragés</span>
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
            backgroundImage: 'url("images/presentation/ciel4.jpg")',
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
                La magie des étoiles
              </h2>
              <p className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-3xl mx-auto">
                Loin de toute pollution lumineuse, le firmament révèle ses plus beaux secrets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Moon className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Perséides d&apos;Août</h3>
                <p className="text-stone-300">Vivez la magie de la plus belle pluie d&apos;étoiles filantes de l&apos;année, avec jusqu&apos;à 100 météores par heure dans un ciel parfaitement noir</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Star className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Voie Lactée</h3>
                <p className="text-stone-300">Admirez notre galaxie dans toute sa splendeur, visible à l&apos;œil nu grâce à l&apos;absence totale de pollution lumineuse sur plusieurs kilomètres</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:scale-105 hover:bg-white/10">
                <Telescope className="w-12 h-12 mb-6 mx-auto text-white" />
                <h3 className="text-xl font-light mb-3 text-white">Constellations</h3>
                <p className="text-stone-300">Découvrez les constellations lors de nos soirées d&apos;observation douces et reposantes sous un ciel d&apos;une luminosité inégalée</p>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center px-12 py-4 bg-white border border-black text-black rounded-full transition-colors duration-300 hover:bg-black hover:border-white hover:text-white relative overflow-hidden group"
            >
              Réservez votre nuit sous les étoiles
            </a>

            <div className="max-w-2xl mx-auto relative">
              <div className="absolute -top-12 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
              <div className="relative mb-16">
                <div className="relative">
                  <p className="text-lg text-stone-200 text-justify italic">
                    <br />
                    <br />
                    <br />
                    &quot;Un des rares endroits en France où l&apos;absence totale de pollution lumineuse
                    permet d&apos;observer la Voie Lactée et les étoiles filantes dans des conditions
                    exceptionnelles.&quot;
                  </p>
                  <p className="text-lg text-stone-200 text-right mt-6">
                    Claudine et Armand, Grands Amis du Mas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;