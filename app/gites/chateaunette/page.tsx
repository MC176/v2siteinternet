"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const climateData = [
    {
      image: "/images/gites/chateaunette/photo 16.png",
      title: "Piscine",
      description: "Profondeur : 1m10 - 2m20"
    },
    {
      image: "/images/gites/chateaunette/photo 19.png",
      title: "Piscine de nuit",
      description: "Eclairage nocturne disponible"
    },
    {
      image: "/images/gites/chateaunette/photo 11.png",
      title: "Entrée du gîte",
      description: "Lauriers roses"
    },
    {
      image: "/images/gites/chateaunette/photo 4.png",
      title: "Gîte Chateaunette",
      description: "Superficie de 80m²"
    },    
    {
      image: "/images/gites/chateaunette/photo 5.png",
      title: "Accès terrasse",
      description: "Le gîte surplombe le Mas"
    },    
    {
      image: "/images/gites/chateaunette/photo 12.png",
      title: "La vue de la terrasse",
      description: "Verdure à perte de vue"
    },
    {
      image: "/images/gites/chateaunette/photo 35.png",
      title: "Espace cuisine",
      description: "Tout équipée"
    },
    {
      image: "/images/gites/chateaunette/photo 36.png",
      title: "Coin cuisine",
      description: "Cuisine équipée"
    },
    {
      image: "/images/gites/chateaunette/photo 37.png",
      title: "Chambre n°1",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/chateaunette/photo 1.png",
      title: "Chambre n°2",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/chateaunette/photo 10.png",
      title: "Vue de Chateaunette",
      description: "Depuis la chambre"
    },
    {
      image: "/images/gites/chateaunette/photo 42.png",
      title: "Salon",
      description: "Mezzazine avec lit"
    },
    {
      image: "/images/gites/chateaunette/photo 38.png",
      title: "Mezzazzine",
      description: "Lit 1 place"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === climateData.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? climateData.length - 3 : prev - 1
    );
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section avec Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/gites/chateaunette/photo 30.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-light mb-6 font-['Playfair_Display']">
            Gîte Chateaunette
          </h1>
          <p className="text-xl font-light mb-12">Pour 6 personnes</p>
          <ChevronDown className="animate-bounce w-8 h-8" />
        </div>
      </div>

      {/* Section Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gauche */}
          <div className="relative h-[600px] group overflow-hidden">
            <img
              src="/images/gites/chateaunette/photo 14.png"
              alt="Paysage méditerranéen"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Texte Droit */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900 font-['Playfair_Display']">
                Analyse Climatique 2010
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En 2010, le climat de la commune est de type climat méditerranéen altéré, selon une étude du CNRS s'appuyant sur une série de données couvrant la période 1971-2000. En 2020, Météo-France publie une typologie des climats de la France métropolitaine dans laquelle la commune est exposée à un climat méditerranéen et est dans la région climatique Provence, Languedoc-Roussillon.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg transition-all hover:shadow-lg">
                <div className="text-3xl font-light text-blue-900">2 600</div>
                <div className="text-sm text-gray-600 mt-2">Heures d'ensoleillement/an</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg transition-all hover:shadow-lg">
                <div className="text-3xl font-light text-blue-900">21.5°C</div>
                <div className="text-sm text-gray-600 mt-2">Température estivale moyenne</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Données Climatiques avec Carrousel */}
        <div className="mt-24 relative">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
            {climateData.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group min-w-[calc(33.333%-1.33rem)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Boutons de navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Section Texte Final */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Pour la période 1991-2020, la température moyenne annuelle observée sur la station météorologique de Météo-France la plus proche, sur la commune de Donzère à 7 km à vol d'oiseau, est de 14,5 °C et le cumul annuel moyen de précipitations est de 826,1 mm.
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;