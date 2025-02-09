'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Wine, Utensils, Wifi, Coffee, Sun, Bath, Tv, BookOpen, Gamepad2, Refrigerator, Pen as Oven, DoorOpen, Baby, Bed, ShowerHead as Shower, Twitch as Kitchen, Car, Users, Ban, Plane, Umbrella, Check, Home, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function App() {
  const parallaxRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const climateData = [
    {
      image: "/images/gites/citronniers/interieur.png",
      title: "Entrée du gîte",
      description: "Lauriers roses"
    },
    {
      image: "/images/gites/citronniers/salon2.jpg",
      title: "Gîte Citronniers",
      description: "Superficie de 80m²"
    },    
    {
      image: "/images/gites/citronniers/chambre.jpg",
      title: "Accès terrasse",
      description: "Le gîte surplombe le Mas"
    },    
    {
      image: "/images/gites/citronniers/terrasse.jpg",
      title: "La vue de la terrasse",
      description: "Verdure à perte de vue"
    },
    {
      image: "/images/gites/citronniers/sdb.png",
      title: "Espace cuisine",
      description: "Tout équipée"
    },
    {
      image: "/images/gites/citronniers/cour.jpg",
      title: "Coin cuisine",
      description: "Cuisine équipée"
    },
    {
      image: "/images/gites/citronniers/olivie.png",
      title: "Chambre n°1",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/citronniers/photo 35.png",
      title: "Chambre n°2",
      description: "Lit 2 places"
    },
    {
      image: "/images/gites/citronniers/photo 36.png",
      title: "Vue de Citronniers",
      description: "Depuis la chambre"
    },
    {
      image: "/images/gites/citronniers/photo 37.png",
      title: "Salon",
      description: "Mezzazine avec lit"
    },
    {
      image: "/images/gites/citronniers/photo 1.png",
      title: "Mezzazzine",
      description: "Lit 1 place"
    },
    {
      image: "/images/gites/citronniers/photo 10.png",
      title: "Piscine",
      description: "Profondeur : 1m10 - 2m20"
    },
    {
      image: "/images/gites/citronniers/photo 42.png",
      title: "Piscine de nuit",
      description: "Eclairage nocturne disponible"
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
            backgroundImage: 'url("/images/gites/citronniers/salon3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-light mb-6 font-['Playfair_Display'] tracking-wider">
            Citronniers
          </h1>
          <p className="text-2xl font-light mb-12 tracking-widest uppercase">Un havre de fraîcheur et de verdure</p>
          <ChevronDown className="animate-bounce w-8 h-8 mt-8" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative h-[700px] group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/gites/citronniers/devant.jpg"
              alt="Paysage méditerranéen"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display']">
                Un grand Zeste d'Ardèche
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Donnant directement sur la cour fleurie du Mas, le gîte Citronnier est entouré de roses trémières et de citronniers dont les fruits parfumés
                 évoquent la douceur méditerranéenne. Son intérieur lumineux, où le soleil pénètre sans jamais surchauffer,
                  garantit une fraîcheur agréable même en plein été. Exposé au nord, il reste tempéré, offrant un confort naturel à ses occupants.
                   Chaque matin, le spectacle des rayons dorés illuminant la cour, mêlé au parfum des fleurs, fait de cet endroit un véritable havre de paix.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="flex items-center justify-center gap-3">
                  <Users className="w-8 h-8 text-blue-900" />
                  <div className="text-4xl font-light text-blue-900">3</div>
                </div>
                <div className="text-sm text-gray-600 mt-3">Nombre de personnes</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl transition-all hover:shadow-xl border border-gray-100">
                <div className="flex items-center justify-center gap-3">
                  <Home className="w-8 h-8 text-blue-900" />
                  <div className="text-4xl font-light text-blue-900">40</div>
                </div>
                <div className="text-sm text-gray-600 mt-3">Nombre de mètres carrés</div>
              </div>
            </div>
          </div>
        </div>

      {/* Introduction Section */}
      <section className=" relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 tracking-wider mb-8">
              L'Escapade Acidulée
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-12">
              Ce gîte doit son nom aux citronniers qui bordent sa cour, 
              offrant chaque année des fruits parfumés que nous avons plaisir à partager. Entouré de fleurs et baigné de lumière, 
              il est une véritable bulle de bien-être pour se reconnecter à la nature.
            </p>
            <div className="h-px w-24 bg-stone-300 mx-auto"></div>
          </div>
        </div>
      </section>

        <div className="mt-0 relative overflow-hidden">
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


        {/* Services & Prestations d'Exception moved before final quote */}
        <div className="mt-16 luxury-section">
          <div className="text-left mb-2">
            <h2 className="text-4xl font-light text-gray-900 font-['Playfair_Display'] mb-6">
              
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
               
            </p>
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

        <div className="mt-6 bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Équipements et services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-900" />
                    Parking
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">Un parking privé est disponible sur place <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">en supplément</span></p>
                  <p className="text-gray-600 text-sm">€20 par jour (sur réservation)</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-900" />
                    Internet
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-900" />
                    <span className="text-gray-600 text-sm">Wi-Fi gratuit dans tout l'établissement</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Kitchen className="w-5 h-5 text-blue-900" />
                    Cuisine
                  </h3>
                  <div className="space-y-1">
                    {[
                      'Chaise haute',
                      'Table à manger',
                      'Machine à café',
                      'Produits ménagers',
                      'Plaque cuisson',
                      'Four',
                      'Ustensiles',
                      'Bouilloire'
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
                    <Tv className="w-5 h-5 text-blue-900" />
                    Coin salon
                  </h3>
                  <div className="space-y-1">
                    {[
              'Coin repas',
              'Canapé',
              'Coin salon'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-900" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High-tech */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Tv className="w-5 h-5 text-blue-900" />
            High-tech
          </h3>
          <div className="space-y-1">
            {[
              'TV écran plat',
              'Télévision'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-900" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chambre */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Bed className="w-5 h-5 text-blue-900" />
            Chambre
          </h3>
          <div className="space-y-1">
            {[
              'Prise près du lit',
              'Portant',
              'Couvertures',
              'Anti-allergie',
              'Sol carrelé',
              'Insonorisation',
              'Repassage'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-900" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colonne 3 */}
      <div className="space-y-6">
        {/* Transports */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Plane className="w-5 h-5 text-blue-900" />
            Transports
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-900" />
              <span className="text-gray-600 text-sm">Service de navette <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">en supplément</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-900" />
              <span className="text-gray-600 text-sm">Navette aéroport <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">en supplément</span></span>
            </div>
          </div>
        </div>

        {/* Réception */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <DoorOpen className="w-5 h-5 text-blue-900" />
            Réception
          </h3>
          <div className="space-y-1">
            {[
              'Facture sur demande',
              'Check-in privé',
              'Check-in rapide'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-900" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divers */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Sun className="w-5 h-5 text-blue-900" />
            Divers
          </h3>
          <div className="space-y-1">
            {[
              'Espace fumeurs',
              'Climatisation',
              'Non-fumeurs',
              'Anti-allergie'
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


        {/* Section Finale Améliorée */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-black leading-relaxed text-lg italic">
            "Rien n’est plus vibrant que la lumière jouant sur des feuilles de citronnier, ni plus doux que l’air parfumé de ses fruits. Un coin de nature où chaque souffle d'air semble une invitation à la sérénité." 
          </p>
          <p className="text-lg text-gray-600 text-right mt-6">
             ~ Le Vent dans les Saules - Kenneth Grahame
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center mt-12 px-12 py-4 bg-white border border-black text-black rounded-full transition-colors duration-300 hover:bg-black hover:border-white hover:text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Réserver votre séjour</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;