'use client'
import React, { useEffect, useState } from 'react';
import { Save as Cave, Indent as Lavender, Cake as Kayak, Sliders as HangGlider, CookingPot as Hiking, MapPin, Mountain, Compass, TreePine, Wind, Tent, Camera, Grape, ArrowRight, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Comment se rendre à Saint-Montan ?",
    answer: "Saint-Montan est accessible en voiture depuis l&apos;autoroute A7, sortie Montélimar Sud. Le village se trouve à environ 20 minutes de la sortie. En train, la gare la plus proche est celle de Montélimar, puis il faut prendre un bus ou un taxi."
  },
  {
    id: 2,
    question: "Quels sont les meilleurs moments pour visiter ?",
    answer: "La période idéale s&apos;étend d&apos;avril à octobre. Le printemps offre un climat doux et des paysages fleuris, l&apos;été est parfait pour les activités de plein air, et l&apos;automne propose des couleurs magnifiques avec moins de touristes."
  },
  {
    id: 3,
    question: "Y a-t-il des restaurants dans le village ?",
    answer: "Oui, Saint-Montan compte plusieurs restaurants de qualité, notamment &apos;La Table de la Fontaine&apos; au cœur du village et &apos;L&apos;Auberge de Montfleury&apos; avec sa terrasse panoramique. Nous recommandons de réserver en haute saison."
  },
  {
    id: 4,
    question: "Que faire avec des enfants à Saint-Montan ?",
    answer: "Le village offre de nombreuses activités familiales : visite du château médiéval, chasse au trésor dans les ruelles, randonnées adaptées, et baignade dans l&apos;Ardèche à proximité. La grotte Chauvet 2 est également à 30 minutes en voiture."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

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

      {/* Blog Introduction Section */}
      <div
        className="relative min-h-screen py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/informations/sunset.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative mx-auto px-4">
          <div className="flex flex-col items-center text-center text-white space-y-12">
            {/* Titre */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-light tracking-wide leading-tight">
                Notre Ardèche
              </h2>
            </div>

            {/* Sous-titre */}
            <p className="text-xl font-light tracking-wide text-white/90 mt-12">
              Choisissez un thème ci-dessous pour accéder à notre blog et nos conseils
            </p>

            {/* Bouton Explorer notre blog */}
            <a
              href="/blog"
              className="group relative inline-flex items-center space-x-3 bg-indigo-600 px-8 py-4 rounded-full shadow-xl hover:bg-indigo-700 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 font-medium group-hover:text-white transition-colors duration-300">
                <BookOpen className="inline-block w-5 h-5 mr-2" />
                Notre carnet de voyage
              </span>
              <ChevronRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </a>

            {/* Articles Carousel */}
            <div className="w-screen -mx-4 mt-12 overflow-hidden">
              <div className="px-8">
                <Slider
                  dots={false}
                  infinite={true}
                  speed={14000}
                  slidesToShow={3}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={0}
                  cssEase="linear"
                  pauseOnHover={true}
                  className="overflow-visible"
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: { slidesToShow: 2 },
                    },
                    {
                      breakpoint: 640,
                      settings: { slidesToShow: 1 },
                    },
                  ]}
                >
                  <div className="px-3">
                    <a
                      href="/blog/gastronomie-ardeche"
                      className="block bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300 w-72 group"
                    >
                      <p className="text-sm font-medium truncate group-hover:text-white">
                        Gastronomie Ardéchoise
                      </p>
                    </a>
                  </div>
                  <div className="px-3">
                    <a
                      href="/blog/decouvrir-ardeche"
                      className="block bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300 w-72 group"
                    >
                      <p className="text-sm font-medium truncate group-hover:text-white">
                        Découvrir l&apos;Ardèche
                      </p>
                    </a>
                  </div>
                  <div className="px-3">
                    <a
                      href="/blog/activites-famille-ardeche"
                      className="block bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-300 w-72 group"
                    >
                      <p className="text-sm font-medium truncate group-hover:text-white">
                        Activités en Famille
                      </p>
                    </a>
                  </div>
                </Slider>
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

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600">
            Tout ce que vous devez savoir pour votre séjour à Saint-Montan
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>

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
          <p className="text-xl tracking-wide uppercase">VIVEZ LE FARNIENTE ARDÉCHOIS</p>
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