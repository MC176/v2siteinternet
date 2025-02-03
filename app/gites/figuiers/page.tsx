'use client'
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Wine, Utensils, Wifi, Coffee, Sun, Bath } from 'lucide-react';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const climateData = [
    {
      image: "/images/gites/noisettiers/photo 16.png",
      title: "Piscine",
      description: "Profondeur : 1m10 - 2m20"
    },
    {
      image: "/images/gites/noisettiers/photo 19.png",
      title: "Piscine de nuit",
      description: "Eclairage nocturne disponible"
    },
    {
      image: "/images/gites/noisettiers/photo 11.png",
      title: "Entrée du gîte",
      description: "Lauriers roses"
    },
    {
      image: "/images/gites/noisettiers/photo 4.png",
      title: "Gîte Noisettiers",
      description: "Superficie de 80m²"
    },    
    {
      image: "/images/gites/noisettiers/photo 5.png",
      title: "Accès terrasse",
      description: "Le gîte surplombe le Mas"
    },    
    {
      image: "/images/gites/noisettiers/photo 12.png",
      title: "La vue de la terrasse",
      description: "Verdure à perte de vue"
    },
    {
      image: "/images/gites/noisettiers/photo 35.png",
      title: "Espace cuisine",
      description: "Tout équipée"
    },
    {
      image: "/images/gites/noisettiers/photo 36.png",
      title: "Coin cuisine",
      description: "Cuisine équipée"
    },
    {
      image: "/images/gites/noisettiers/photo 37.png",
      title: "Chambre n°1",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/noisettiers/photo 1.png",
      title: "Chambre n°2",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/noisettiers/photo 10.png",
      title: "Vue des Noisettiers",
      description: "Depuis la chambre"
    },
    {
      image: "/images/gites/noisettiers/photo 42.png",
      title: "Salon",
      description: "Mezzazine avec lit"
    },
    {
      image: "/images/gites/noisettiers/photo 38.png",
      title: "Mezzazzine",
      description: "Lit 1 place"
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
      {/* Hero Section avec Parallax - Amélioré */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/gites/noisettiers/photo 30.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-light mb-6 font-['Playfair_Display'] tracking-wider">
            Figuiers
          </h1>
          <p className="text-2xl font-light mb-12 tracking-widest uppercase">Une expérience unique en Ardèche</p>
          <ChevronDown className="animate-bounce w-8 h-8 mt-8" />
        </div>
      </div>

      {/* Section Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Gauche */}
          <div className="relative h-[700px] group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/gites/noisettiers/photo 14.png"
              alt="Paysage ardéchois"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Texte Droit */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display']">
                Le Charme de l'Ardèche
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Niché au cœur de l'Ardèche, le Gîte Les Noisettiers bénéficie d'un environnement exceptionnel. La beauté naturelle de la région s'y exprime dans toute sa splendeur, offrant des conditions parfaites pour profiter de votre séjour tout au long de l'année.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="text-4xl font-light text-blue-900">2 300</div>
                <div className="text-sm text-gray-600 mt-3">Heures d'ensoleillement/an</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="text-4xl font-light text-blue-900">20°C</div>
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
        <div className="mt-32 relative">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out overflow-hidden" 
               style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
            {climateData.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group min-w-[calc(33.333%-1.33rem)] shadow-lg">
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