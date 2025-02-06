'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Wine, Utensils, Wifi, Coffee, Sun, Bath, Tv, BookOpen, Gamepad2, Refrigerator, Pen as Oven, DoorOpen, Baby, Bed, ShowerHead as Shower, Twitch as Kitchen, Car, Users, Ban, Plane, Umbrella, Check } from 'lucide-react';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const climateData = [
    {
      image: "/images/gites/chateaunette/photo 14.png",
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
  ];

  const luxuryAmenities = [
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Cave à Vin Privée",
      description: "Sélection de vins locaux d'exception"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Chef Privé",
      description: "Sur demande pour vos repas"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Haut Débit",
      description: "Connexion fibre optique"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Machine Nespresso",
      description: "Capsules premium offertes"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solarium Privé",
      description: "Bains de soleil haut de gamme"
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Spa Extérieur",
      description: "Vue panoramique"
    }
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

  // Calculer les indices des images visibles
  const visibleImages = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentSlide + i) % climateData.length;
    visibleImages.push(climateData[index]);
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section avec Parallax - Amélioré */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/gites/chateaunette/photo 17.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-light mb-6 font-['Playfair_Display'] tracking-wider">
            Chateaunette
          </h1>
          <p className="text-2xl font-light mb-12 tracking-widest uppercase">Une expérience unique en Provence</p>
          <ChevronDown className="animate-bounce w-8 h-8 mt-8" />
        </div>
      </div>

      {/* Section Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Gauche */}
          <div className="relative h-[700px] group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/gites/chateaunette/Photo 11.png"
              alt="Paysage méditerranéen"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Texte Droit */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display']">
                Le Climat Idéal de la Provence
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Niché au cœur de la Provence, le Gîte Chateaunette bénéficie d'un microclimat exceptionnel. La douceur méditerranéenne s'y exprime dans toute sa splendeur, offrant des conditions parfaites pour profiter de votre séjour tout au long de l'année.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="text-4xl font-light text-blue-900">2 600</div>
                <div className="text-sm text-gray-600 mt-3">Heures d'ensoleillement/an</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="text-4xl font-light text-blue-900">21.5°C</div>
                <div className="text-sm text-gray-600 mt-3">Température estivale moyenne</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelle Section Luxe */}
        <div className="mt-32 luxury-section">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display'] mb-6">
              Services & Prestations d'Exception
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos services premium, pensés pour sublimer chaque instant de votre séjour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryAmenities.map((amenity, index) => (
              <div 
                key={index}
                className={`p-8 bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-900 mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Carrousel */}
        <div className="mt-32 relative overflow-hidden">
          <div className="flex gap-8">
            {visibleImages.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group w-[calc(33.333%-1.33rem)] flex-shrink-0 shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
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

          {/* Boutons de navigation */}
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

      {/* Points Forts */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ses points forts</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Parking privé</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Connexion Wi-Fi gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Chambres familiales</span>
            </div>
            <div className="flex items-center gap-2">
              <Ban className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Chambres non-fumeurs</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Navette aéroport</span>
            </div>
            <div className="flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Terrasse</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Équipements Luxueuse */}
      <div className="mt-32 bg-gradient-to-b from-white via-gray-50 to-white py-24 px-8 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 font-['Playfair_Display'] mb-6">
              Les Prestations de Châteaunette
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos équipements haut de gamme, sélectionnés avec soin pour vous offrir un confort absolu
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Salon & Divertissement */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-900/5 p-3 rounded-xl">
                  <Tv className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Salon & Divertissement</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Télévision écran plat</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Bibliothèque sélectionnée</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Jeux de société (sur demande)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Connexion Wifi haut débit</span>
                </div>
              </div>
            </div>

            {/* Cuisine Équipée */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-900/5 p-3 rounded-xl">
                  <Kitchen className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cuisine Équipée</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Réfrigérateur premium</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Four à induction</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Lave-vaisselle</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Machine Nespresso</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Bouilloire électrique</span>
                </div>
              </div>
            </div>

            {/* Chambres */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-900/5 p-3 rounded-xl">
                  <Bed className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Espace Nuit</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Lits King Size (160 cm)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Literie haut de gamme</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Service de draps premium</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Volets occultants</span>
                </div>
              </div>
            </div>

            {/* Salle de Bain & Services */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-900/5 p-3 rounded-xl">
                  <Shower className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Salle de Bain & Services</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Douche à l'italienne</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">WC intégré design</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Lit bébé sur demande</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                  <span className="text-gray-700 text-sm">Chaise haute sur demande</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Équipements */}
      <div className="mt-32 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-x-12 gap-y-8">
            {/* Parking */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5" />
                Parking
              </h3>
              <p className="text-gray-600 text-sm mb-4">Un parking privé est disponible sur place (uniquement sur réservation) au tarif de € 20 par jour.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700 text-sm">Parking intérieur</span>
                </div>
              </div>
            </div>

            {/* Internet */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                Internet
              </h3>
              <p className="text-gray-600 text-sm mb-4">Une connexion Wi-Fi est disponible dans tout l'établissement gratuitement.</p>
            </div>

            {/* Cuisine */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Kitchen className="w-5 h-5" />
                Cuisine
              </h3>
              <div className="space-y-2">
                {[
                  'Chaise haute pour enfants',
                  'Table à manger',
                  'Machine à café',
                  'Produits ménagers',
                  'Plaque de cuisson',
                  'Four',
                  'Ustensiles de cuisine',
                  'Bouilloire électrique'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coin salon */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Tv className="w-5 h-5" />
                Coin salon
              </h3>
              <div className="space-y-2">
                {[
                  'Coin repas',
                  'Canapé',
                  'Coin salon'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-tech */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Tv className="w-5 h-5" />
                High-tech
              </h3>
              <div className="space-y-2">
                {[
                  'Télévision à écran plat',
                  'Télévision'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Équipements en chambre */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bed className="w-5 h-5" />
                Équipements en chambre
              </h3>
              <div className="space-y-2">
                {[
                  'Prise près du lit',
                  'Portant',
                  'Couvertures chauffantes',
                  'Chambre anti-allergie',
                  'Sol carrelé / en marbre',
                  'Insonorisation',
                  'Matériel de repassage'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transports */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5" />
                Transports
              </h3>
              <div className="space-y-2">
                {[
                  'Service de navette (en supplément)',
                  'Navette aéroport (en supplément)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Réception */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DoorOpen className="w-5 h-5" />
                Réception
              </h3>
              <div className="space-y-2">
                {[
                  'Facture fournie sur demande',
                  'Enregistrement/départ privé',
                  'Enregistrement/règlement rapide'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divers */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Divers
              </h3>
              <div className="space-y-2">
                {[
                  'Espace fumeurs',
                  'Climatisation',
                  'Établissement entièrement non-fumeurs',
                  'Chambres anti-allergie'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Section Finale Améliorée */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg italic">
            "Vivez l'expérience unique d'un séjour d'exception où chaque détail a été pensé pour votre confort absolu. Notre équipe dédiée est à votre disposition pour personnaliser votre séjour selon vos désirs."
          </p>
          <button className="mt-12 px-12 py-4 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all transform hover:-translate-y-1 hover:shadow-xl text-lg tracking-wide">
            Réserver votre séjour
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;