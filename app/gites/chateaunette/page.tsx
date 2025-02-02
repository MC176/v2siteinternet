"use client";

import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section avec Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1565627264826-8c5c383b074b?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-light mb-6 font-['Playfair_Display']">
            Climat Méditerranéen
          </h1>
          <p className="text-xl font-light mb-12">Étude climatologique 1971-2020</p>
          <ChevronDown className="animate-bounce w-8 h-8" />
        </div>
      </div>

      {/* Section Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gauche */}
          <div className="relative h-[600px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
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

        {/* Section Données Climatiques */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&q=80"
              alt="Données climatiques"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Période 1971-2000</h3>
                <p className="text-sm">Température moyenne: 13.1°C</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&q=80"
              alt="Précipitations"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Précipitations</h3>
                <p className="text-sm">Cumul annuel: 952 mm</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?auto=format&fit=crop&q=80"
              alt="Projections 2050"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Horizon 2050</h3>
                <p className="text-sm">Projections climatiques</p>
              </div>
            </div>
          </div>
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