'use client'

import React, { useEffect } from 'react';
import { MapPin, Wine, Mountain, Castle, Building, Flower, ShoppingBag } from 'lucide-react';

const destinations = [
  {
    title: "DÉGUSTATION À CHÂTEAUNEUF-DU-PAPE",
    description: "Découvrez l'histoire et le prestige des vins de Châteauneuf-du-Pape, berceau de grands crus reconnus mondialement.",
    image: "https://images.unsplash.com/photo-1566903451935-7e8833a0f12f?auto=format&fit=crop&q=80&w=1200",
    cta: "Organiser une dégustation avec nos partenaires",
    icon: Wine
  },
  {
    title: "LES CALANQUES DE CASSIS",
    description: "Explorez les majestueuses calanques, où les falaises calcaires plongent dans les eaux cristallines de la Méditerranée.",
    image: "https://images.unsplash.com/photo-1548525207-59f432f2c172?auto=format&fit=crop&q=80&w=1200",
    cta: "Découvrir notre guide exclusif",
    icon: Mountain
  },
  {
    title: "GORDES ET LE LUBERON",
    description: "Laissez-vous séduire par le charme authentique de Gordes, joyau perché du Luberon aux ruelles pavées centenaires.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1200",
    cta: "Explorer les plus beaux villages",
    icon: Castle
  },
  {
    title: "VISITE D'AVIGNON",
    description: "Plongez dans l'histoire fascinante d'Avignon, cité des papes, avec son palais gothique et son célèbre pont.",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80&w=1200",
    cta: "Planifier votre journée à Avignon",
    icon: Building
  },
  {
    title: "LES LAVANDES DU PLATEAU DE VALENSOLE",
    description: "Admirez l'infini des champs de lavande qui colorent le plateau de leurs tons violets envoûtants.",
    image: "https://images.unsplash.com/photo-1563511083-76bde3516cb1?auto=format&fit=crop&q=80&w=1200",
    cta: "Quand et où admirer la lavande en fleur ?",
    icon: Flower
  },
  {
    title: "JOURNÉE SHOPPING À AIX-EN-PROVENCE",
    description: "Flânez dans les élégantes rues d'Aix-en-Provence, entre boutiques de créateurs et marchés provençaux.",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&q=80&w=1200",
    cta: "Découvrez nos recommandations exclusives",
    icon: ShoppingBag
  }
];

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&q=80&w=2000")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
            À DÉCOUVRIR À PROXIMITÉ
          </h1>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6" />
            <p className="text-xl font-light">Ardèche méridionale</p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className={`fade-in  transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <destination.icon className="w-6 h-6 text-[#8B7355]" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-light tracking-wide text-[#8B7355] mb-3">
                    {destination.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <button className="w-full bg-[#8B7355] text-white py-3 px-6 rounded-lg hover:bg-[#6B573D] transition-colors duration-300 font-light tracking-wide">
                    {destination.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
