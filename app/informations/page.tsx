'use client'

import React, { useEffect } from 'react';
import { Save as Cave, Indent as Lavender, Cake as Kayak, Sliders as HangGlider, CookingPot as Hiking, MapPin, Mountain, Compass, TreePine, Wind, Tent, Camera, Grape } from 'lucide-react';

const destinations = [
  {
    title: "LA GROTTE CHAUVET",
    description: "Explorez la Grotte Chauvet, classée au patrimoine mondial de l'UNESCO, et émerveillez-vous devant ses peintures préhistoriques exceptionnelles.",
    image: "/images/presentation/Grotte.jpg",
    cta: "Visitez le site internet de la Grotte Chauvet",
    icon: Camera,
    url: "https://www.grottechauvet2ardeche.com/"
  },
  {
    title: "LE MUSÉE DE LA LAVANDE",
    description: "Découvrez les secrets de la lavande au Musée de la Lavande et plongez dans l'histoire de cette plante emblématique de la Provence.",
    image: "/images/presentation/Image 5.jpg",
    cta: "Réservez votre visite dès maintenant",
    icon: TreePine,
    url: "https://www.lamaisondelalavande.com/"
  },
  {
    title: "DESCENTE DES GORGES DE L'ARDÈCHE",
    description: "Parcourez les majestueuses Gorges de l'Ardèche en canoë ou kayak avec vos amis et votre famille pour une aventure inoubliable.",
    image: "/images/presentation/gorge.jpg",
    cta: "Réservez votre canoë-kayak chez notre partenaire",
    icon: Compass,
    url: "https://www.gorges-ardeche-pontdarc.fr/activites/canoe/infos-et-parcours/"
  },
  {
    title: "VOL EN DELTAPLANE",
    description: "Volez comme un oiseau au-dessus des falaises ardéchoises et vivez des sensations fortes en deltaplane.",
    image: "/images/presentation/Image 4.jpg",
    cta: "Découvrez ces sensations uniques",
    icon: TreePine,
    url: "https://www.taranis-parapente.com/baptemes-de-parapente-en-ardeche/"
  },
  {
    title: "RANDONNÉES PROCHE DU MAS D'EYLIEUX",
    description: "Évadez-vous en pleine nature ardéchoise en suivant des sentiers pittoresques à travers des paysages variés.",
    image: "/images/presentation/Image 7.jpg",
    cta: "Organisez votre balade",
    icon: TreePine,
    url: "https://www.gr-infos.com/gr42.htm"
  },
  {
    title: "SPÉLÉOLOGIE EN ARDÈCHE",
    description: "Partez à la découverte des grottes ardéchoises et explorez leurs merveilles souterraines en toute sécurité.",
    image: "/images/presentation/Image 10.jpg",
    cta: "Découvrez nos offres de spéléologie",
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
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/presentation/background.png")',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] mb-6 animate-fade-in">
            DÉCOUVERTES
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Une sélection d'expériences uniques en Ardèche méridionale
          </p>
          <div className="flex items-center justify-center gap-3 animate-fade-in-delay-2">
            <MapPin className="w-6 h-6" />
            <p className="text-xl font-light tracking-wide">Ardèche méridionale</p>
          </div>
        </div>
      </div>

      {/* Provence Welcome Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg max-w-md mx-auto">
            <img 
              src="/images/presentation/pont.jpg"
              alt="Provence"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <div className="flex justify-center">
              <img 
                src="/images/logo/logo.png" 
                alt="Le Mas d'Eylieux"
                className="h-60 mb-2"
              />
            </div>
            <h2 className="text-5xl font-cormorant font-light text-center tracking-wider text-[#2C3E50] -mt-4">
              BIENVENUE EN PROVENCE
            </h2>
            <h3 className="text-xl font-montserrat font-light text-center tracking-widest text-[#34495E] mt-8">
              UN DOMAINE IDÉALEMENT SITUÉ GÉOGRAPHIQUEMENT
            </h3>
            <div className="space-y-6 text-center font-montserrat font-light text-[#34495E] tracking-wide mt-12">
              <p className="text-lg">Les Domaines de Patras se situent à Solérieux, dans la Drôme Provençale,<br/>à mi-chemin entre Avignon et Montélimar.</p>
              <p className="text-lg">Le Domaine est idéalement desservi, et se situe à moins d'1h30 de l'Aéroport de<br/>Marseille Provence, et à moins d'1h de la Gare d'Avignon TGV.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Image */}
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("images/presentation/photo 43.jpg")',
            filter: 'brightness(0.85)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-50"></div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="fade-in"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/95 p-3 rounded-full shadow-md">
                        {destination.icon && <destination.icon className="w-5 h-5 text-[#8B7355]" />}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-light tracking-wide text-[#8B7355] mb-4">
                    {destination.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <a 
                    href={destination.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#8B7355] text-white py-4 px-6 rounded-lg hover:bg-[#6B573D] transition-colors duration-300 font-light tracking-wider text-sm uppercase text-center"
                  >
                    {destination.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Provence Footer Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&q=80&w=2000")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative text-center text-white z-10">
          <h2 className="text-6xl font-light tracking-widest mb-4">L'ARDÈCHE</h2>
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
      `}</style>
    </div>
  );
}

export default App;
