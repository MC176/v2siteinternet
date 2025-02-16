'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Wine, Utensils, Wifi, Coffee, Sun, Bath, Tv, BookOpen, Gamepad2, Refrigerator, Pen as Oven, DoorOpen, Baby, Bed, ShowerHead as Shower, Twitch as Kitchen, Car, Users, Ban, Plane, Umbrella, Check, Home, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import du composant Image de Next.js

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const climateData = [
    {
      image: "/images/gites/cote-source/photo1.png",
      title: "Vue de la terrasse",
      description: "Un coucher de soleil lors du dîner"
    },
    {
      image: "/images/gites/cote-source/photo2.avif",
      title: "Le charme de la terrasse",
      description: "Superficie de 61 m²"
    },    
    {
      image: "/images/gites/cote-source/photo4.avif",
      title: "Exposition pleine nature",
      description: "Votre vue chaque jour"
    },    
    {
      image: "/images/gites/cote-source/photo8.avif",
      title: "Un autre point de vue",
      description: "Le seul vis-à-vis est avec la nature"
    },
    {
      image: "/images/gites/cote-source/photo12.avif",
      title: "Espace salon",
      description: "Décoration sobre et moderne"
    },
    {
      image: "/images/gites/cote-source/photo9.avif",
      title: "Salle de bain",
      description: "Douche italienne"
    },
    {
      image: "/images/gites/cote-source/chambre.png",
      title: "Chambre Magniolia",
      description: "Lit 2 places 140 cm"
    },
    {
      image: "/images/gites/cote-source/photo10.avif",
      title: "Chambre Romarin",
      description: "Lit 2 places 160 cm"
    },
    {
      image: "/images/gites/cote-source/cuisine.avif",
      title: "Cuisine",
      description: "Aménagement très lumineux"
    },
    {
      image: "/images/gites/cote-source/cuisine2.avif",
      title: "Depuis la cuisine",
      description: "Vue panoramique de notre Domaine"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const luxurySection = document.querySelector('.luxury-section');
    if (luxurySection) {
      observer.observe(luxurySection);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === climateData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? climateData.length - 1 : prev - 1
    );
  };

  const visibleImages = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentSlide + i) % climateData.length;
    visibleImages.push(climateData[index]);
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/gites/cote-source/photo5.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-light mb-6 font-['Playfair_Display'] tracking-wider">
            Côté Source
          </h1>
          <p className="text-2xl font-light mb-12 tracking-widest uppercase">Une terrasse avec vue à couper le souffle</p>
          <ChevronDown className="animate-bounce w-8 h-8 mt-8" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative h-[700px] group overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/gites/cote-source/table.avif"
              alt="Paysage méditerranéen"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display']">
                Un belvédère ouvert sur la nature
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Avec sa terrasse panoramique exceptionnelle, bordée de balustres, le gîte Côté Source surplombe les jardins du Mas et 
                la source millénaire qui irrigue encore aujourd&apos;hui nos bassins. Témoignage du passé, cette eau précieuse était essentielle aux générations 
                qui nous ont précédés, façonnant la vie du domaine bien avant l&apos;arrivée de l&apos;eau courante. Depuis votre terrasse, 
                vous pourrez admirer cette nature préservée, avec son bassin naturel où se mêlent nénuphars 
                et saules pleureurs, un véritable tableau vivant évoluant au fil des saisons.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-8 h-8 text-blue-900" />
                  <div className="text-4xl font-light text-blue-900">4</div>
                </div>
                <div className="text-sm text-gray-600 mt-3">Nombre de personnes</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="flex items-center justify-center gap-3">
                  <Home className="w-8 h-8 text-blue-900" />
                  <div className="text-4xl font-light text-blue-900">50</div>
                </div>
                <div className="text-sm text-gray-600 mt-3">Superficie en mètres carrés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="relative py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider mb-8">
                Au Rythme de l’Eau
              </h2>
              <p className="text-lg leading-relaxed text-stone-600 mb-12">
                Dominant les jardins, ce gîte bénéficie d’une terrasse exceptionnelle avec balustrades ouvrant sur la nature environnante. 
                Il tient son nom de la source naturelle qui, depuis des siècles, abreuve ces terres, irriguant les jardins et le bassin aux nénuphars. 
                Une oasis de fraîcheur et de sérénité en plein cœur de l’Ardèche.
              </p>
              <div className="h-px w-24 bg-stone-300 mx-auto"></div>
            </div>
          </div>
        </section>

        <div className="mt-0 relative overflow-hidden">
          <div className="flex gap-8">
            {visibleImages.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group w-[calc(33.333%-1.33rem)] flex-shrink-0 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Services & Prestations d'Exception */}
        <div className="mt-16 luxury-section">
          <div className="text-left mb-2">
            <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display'] mb-6">

            </h2>
          </div>
        </div>

        <div className="bg-white py-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ses points forts</h2>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Parking privé</span>
              </div>
              <div className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Logement non-fumeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <DoorOpen className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Escaliers</span>
              </div>
              <div className="flex items-center gap-2">
                <Umbrella className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Terrasse privative 60m²</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Vue panoramique exceptionnelle</span>
              </div>
            </div>
          </div>
        </div>

            <div className="mt-6 bg-gray-50 py-6">
              <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-r border-gray-300 pr-4">Équipements et services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Car className="w-5 h-5 text-blue-900" />
                        Parking privé
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-900" />
                        <span className="text-gray-600 text-sm">Places de Parking </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-blue-900" />
                        Internet
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-900" />
                        <span className="text-gray-600 text-sm">Wi-Fi accessible à certains endroits</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Bed className="w-5 h-5 text-blue-900" />
                        Chambre
                      </h3>
                      <div className="space-y-1">
                        {[ 
                          '2 chambres avec lit 160cm & 140cm avec oreillers',
                          'Draps en option (10€/personne avec serviette)',
                          'Couvertures',
                          'Couvertures supplémentaires disponibles',
                          'Armoire',
                          'Tables de chevet avec lampe',
                          'Volets',
                          'Prises près du lit',
                          'Table et fer à repasser (sur demande)',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Bath className="w-5 h-5 text-blue-900" />
                        Salle de bain
                      </h3>
                      <div className="space-y-1">
                        {['Douche italienne'].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Kitchen className="w-5 h-5 text-blue-900" />
                        Cuisine
                      </h3>
                      <div className="space-y-1">
                        {[ 
                          'Réfrigérateur avec partie congélation',
                          'Plaque de cuisson à induction',
                          'Four',
                          'Micro-ondes',
                          'Table',
                          'Lave-vaisselle'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-blue-900" />
                        Equipement cuisine
                      </h3>
                      <div className="space-y-1">
                        {[ 
                          'Cafetière (filtre)',
                          'Nespresso sur demande',
                          'Bouilloire électrique',
                          'Grille-pain',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Baby className="w-5 h-5 text-blue-900" />
                        Équipements pour enfants
                      </h3>
                      <div className="space-y-1">
                        {[
                          'Lit bébé (sur demande)',
                          'Chaise haute (sur demande)'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Tv className="w-5 h-5 text-blue-900" />
                        Salon &amp; Divertissement
                      </h3>
                      <div className="space-y-1">
                        {[
                          "Banquette",
                          'Télévision',
                          'Table',
                          'Livres',
                          'Jeux de société (sur demande)'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-blue-900" />
                        Espaces communs
                      </h3>
                      <div className="space-y-1">
                        {[
                          'Grands espaces (Football, badminton...)',
                          'Terrain de pétanque',
                          'Tennis de table',
                          'Baby-foot'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-900" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center mt-12 px-12 py-4 bg-white border border-black text-black rounded-full transition-colors duration-300 hover:bg-black hover:border-white hover:text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Réserver votre séjour</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>

        {/* Section Finale Améliorée */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-black leading-relaxed text-lg italic">
            &quot;On ne se baigne jamais deux fois dans le même fleuve&quot;
          </p>
          <p className="text-lg text-gray-600 text-right mt-6">
             ~ Héraclite
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
