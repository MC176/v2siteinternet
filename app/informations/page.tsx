'use client'
import React, { useEffect } from 'react';
import { Save as Cave, Indent as Lavender, Cake as Kayak, Sliders as HangGlider, CookingPot as Hiking, MapPin, Mountain, Compass, TreePine, Wind, Tent, Camera, Grape, ArrowRight } from 'lucide-react';

const destinations = [
  {
    title: "DESCENTE DES GORGES DE L'ARDÈCHE",
    description: "Parcourez les majestueuses Gorges de l'Ardèche en canoë ou kayak avec vos proches pour une aventure inoubliable.",
    image: "/images/informations/canoe.jpg",
    cta: "Réserver votre canoë",
    icon: Compass,
    url: "https://acqua-bateaux.com/"
  },
  {
    title: "LA GROTTE CHAUVET",
    description: "Explorez la Grotte Chauvet, classée au patrimoine mondial de l'UNESCO, et émerveillez-vous devant ses peintures préhistoriques exceptionnelles.",
    image: "/images/presentation/Grotte.avif",
    cta: "Visitez le site internet",
    icon: Camera,
    url: "https://www.grottechauvet2ardeche.com/"
  },
  {
    title: "RANDONNÉES PROCHE DU MAS D'EYLIEUX",
    description: "Évadez-vous en pleine nature ardéchoise en suivant des sentiers pittoresques à travers des paysages variés.",
    image: "/images/informations/rando.jpg",
    cta: "Organiser vos balades",
    icon: TreePine,
    url: "https://www.gr-infos.com/gr42.htm"
  },
  {
    title: "CHATEAU MEDIEVAL DE SAINT MONTAN",
    description: "Partez à la découverte d'un château fortifié. Explorez ses remparts, ses ruelles et plongez dans l'histoire du village.",
    image: "/images/presentation/chateau.jpg",
    cta: "Découvrir l'expérience",
    icon: TreePine,
    url: "https://chateausaintmontan.com/"
  },
  {
    title: "LE MUSÉE DE LA LAVANDE",
    description: "Découvrez les secrets de la lavande au Musée de la Lavande et plongez dans l'histoire de cette plante emblématique de la Provence.",
    image: "/images/informations/lavande.jpg",
    cta: "Réserver votre visite",
    icon: TreePine,
    url: "https://www.lamaisondelalavande.com/"
  },
  {
    title: "SPÉLÉOLOGIE EN ARDÈCHE",
    description: "Partez à la découverte des grottes ardéchoises et explorez leurs merveilles souterraines en toute sécurité.",
    image: "/images/presentation/Image 10.avif",
    cta: "Découvrir les visites",
    icon: TreePine,
    url: "https://www.face-sud.com/speleo-ardeche/"
  }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/presentation/Image7.avif")',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in">
            DÉCOUVERTES
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Une sélection d&apos;expériences uniques en Ardèche méridionale
          </p>
          <div className="flex items-center justify-center gap-3 animate-fade-in-delay-2">
            <MapPin className="w-6 h-6" />
            <p className="text-xl font-light tracking-wide">Saint Montan</p>
          </div>
        </div>
      </div>

      {/* Provence Welcome Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Image with Hover Effect */}
            <div className="relative h-[500px] group overflow-hidden rounded-2xl">
              <img 
                src="images/presentation/gorges.jpg"
                alt="Provence Landscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-light leading-relaxed px-8 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Le village de Saint Montan est idéalement situé. <br /> <br />
                D&apos;un côté, les Gorges de l&apos;Ardèche et la Grotte Chauvet. <br />
                De l&apos;autre, Montélimar, célèbre pour ses nougats, ses marchés et ses vignobles.
                </p>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-6xl font-cormorant font-light tracking-wider text-gray-900 leading-tight">
                  Bienvenue<br/>en Ardèche
                </h2>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-montserrat font-light tracking-widest text-gray-800 leading-relaxed">
                  Un domaine idéalement situé
                </h3>
                
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-gray-400">
                    <p className="font-montserrat font-light text-gray-700 tracking-wide text-lg leading-relaxed">
                    Le Mas d&apos;Eylieux se situe sur les hauteurs de Saint Montan, en Ardèche, localisé entre Lyon et Marseille. 
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-gray-400">
                    <p className="font-montserrat font-light text-gray-700 tracking-wide text-lg leading-relaxed">
                    Nous sommes à environ 25 minutes de la gare de Montélimar et à un peu plus d&apos;une heure de la Gare TGV d&apos;Avignon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Title Section */}
      <div className="py-16 text-center bg-white">
        <h2 className="text-4xl font-light tracking-widest text-gray-900 mb-4">ACTIVITÉS À DÉCOUVRIR</h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="fade-in h-full"
            >
              <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/95 p-3 rounded-full shadow-md">
                    {destination.icon && <destination.icon className="w-5 h-5 text-gray-900" />}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-4">
                    {destination.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {destination.description}
                  </p>
                  <a 
                    href={destination.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-6 py-4 w-full bg-white border-2 border-black text-black hover:text-white transition-colors duration-300 text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {destination.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&q=80&w=2000")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative text-center text-white z-10">
          <h2 className="text-6xl font-light tracking-widest mb-4">L&apos;ARDÈCHE</h2>
          <p className="text-xl tracking-wide uppercase">VIVEZ LE FARNIENTE ARDÈCHOIX</p>
        </div>
      </div>

      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .group:hover .text-black {
          color: white;
        }
      `}</style>
    </div>
  );
}

export default App;
