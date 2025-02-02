'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from 'lucide-react';

// Generate array of image paths
const guestBookImages = Array.from({ length: 20 }, (_, i) => `/images/avis/Avis ${i + 1}.jpg`);

// Real Google reviews data
const googleReviews = [
  {
    author_name: "nadia",
    rating: 5,
    text: "Magnifique lieu ressourçant et paisible en pleine nature. Le gîte est bien entretenu et propre, c'est un endroit où on s'y sent tout simplement bien! Pascale est une belle personne d'un accueil mémorable. Il a été difficile de partir! N'hésitez pas!",
    relative_time_description: "il y a 6 mois",
    visited: "Visité en juillet 2024"
  },
  {
    author_name: "Sylvie Oule",
    rating: 4,
    text: "Gîte très bien tenu . accueil très agréable. Belle Bastide de charme . très calme. Mise à disposition de la salle collective pour le repas du soir gratuitement.. expérience à refaire.",
    relative_time_description: "il y a un an",
    visited: "Visité en avril 2023"
  },
  {
    author_name: "Magali Faroult",
    rating: 5,
    text: "Magnifique Mas qui compte 6 gites en pleine Ardèche provençale ! Un très bel endroit où il fait bon vivre !",
    relative_time_description: "il y a un an"
  },
  {
    author_name: "Loic Gac",
    rating: 5,
    text: "Quelle tristesse de quitter ce petit paradis. Si vous hésitez encore, foncez. Le lieu est exceptionnel, paisible et ressourçant. De plus, Pascale est vraiment accueillante et réactive. Toutes les conditions sont réunies pour passer un excellent séjour.",
    relative_time_description: "il y a un an",
    visited: "Visité en août 2023"
  },
  {
    author_name: "Michel Perrier",
    rating: 5,
    text: "Très bon séjour dans un endroit typique, calme, idéal pour les randonnées. Très bon accueil de Pascale la propriétaire. Nous recommandons. Catherine et Michel.",
    relative_time_description: "il y a un an",
    visited: "Visité en juin 2023"
  },
  {
    author_name: "Coleen verret",
    rating: 5,
    text: "Endroit calme et paisible en pleine nature. Parfait pour se détendre et profiter de la beauté des paysages. Proche des magnifiques Gorges de l'Ardèche. Merci pour ces vacances inoubliables",
    relative_time_description: "il y a un an",
    visited: "Visité en août 2023"
  },
  {
    author_name: "Mathilde Noguera",
    rating: 5,
    text: "Un lieu vraiment splendide, entouré par la nature, idéal pour se ressourcer et se balader. Un accueil très chaleureux et agréable ! Je recommande à 100%.",
    relative_time_description: "il y a un an",
    visited: "Visité en septembre 2023"
  },
  {
    author_name: "Cerise Thiebot",
    rating: 5,
    text: "Incroyable endroit qui nous a profondément marqué ! Découvert il y a 20 ans, nous y sommes retournés d'innombrables fois, année après année. Au delà d'un simple séjour unique, nous nous sommes liés d'amitié avec cette famille exceptionnelle.",
    relative_time_description: "il y a 2 ans",
    visited: "Visité en septembre 2022"
  },
  {
    author_name: "Maxence RIEU",
    rating: 5,
    text: "Notre séjour au Mas d'Eylieux a été exceptionnel. L'accueil chaleureux, la beauté du cadre et le confort des chambres ont dépassé nos attentes.",
    relative_time_description: "il y a un an",
    visited: "Visité en octobre 2023"
  },
  {
    author_name: "Gérald Perret",
    rating: 5,
    text: "Très beau gîte calme et paisible.tres bien pour se ressourcer. Le mas est très grand et les gîtes sont très bien disposés. Pascale est une hôte accessible et disponible. Merci encore.",
    relative_time_description: "il y a un an",
    visited: "Visité en août 2023"
  },
  {
    author_name: "Sonia AROUI (Sonia)",
    rating: 5,
    text: "Très beaux lieux accueil chaleureux. Pascale est une personne avec le sens du service accompagné du sourire. Je recommande ces gîtes 👍👍👍",
    relative_time_description: "il y a un an",
    visited: "Visité en décembre 2023"
  },
  {
    author_name: "Helene Baldie",
    rating: 5,
    text: "Un lieu magnifique, naturel d'où se dégage une grande chaleur humaine. Nous y allons regulierement depuis des années et nous avons toujours été enchantés de ce lieu arrangé, décoré avec goût au fil des années. Nous recommandons vivement un séjour au Mas dEylieux. Un accueil de Yeyette très attentionné, toujours disponible.",
    relative_time_description: "il y a 6 ans"
  },
  {
    author_name: "Rex Rex",
    rating: 5,
    text: "Bonjour et merci pour cette semaine merveilleuse. Ce petit coin de nature au calme fût des plus vivifiant. A très vite.",
    relative_time_description: "il y a un an",
    visited: "Visité en août 2023"
  },
  {
    author_name: "Sophie JUIN",
    rating: 5,
    text: "Plusieurs années que nous venons en Ardèche et que nous nous arrêtons au Mas d'Eylieux où l'accueil est très chaleureux et le cadre idyllique. Allez y séjourner!!! Vous y retournerez...😉",
    relative_time_description: "il y a 2 ans",
    visited: "Visité en avril 2022"
  },
  {
    author_name: "Geneviève Cazes",
    rating: 5,
    text: "J'ai passé de très bonnes et belles vacances, une très belle piscine et de très jolis sites à visiter : le village de Saint Montan, les gorges de l'Ardèche et le pont d'arc,sans avoir la foule, les grottes Marzal, de la Madèle ne, la ferme au crocodiles... et un excellent accueil, aux petits soins. Merci",
    relative_time_description: "il y a 6 ans"
  }
];

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  visited?: string;
}

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [reviews] = useState<GoogleReview[]>(googleReviews);

  const reviewsPerPage = 5;
  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % guestBookImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + guestBookImages.length) % guestBookImages.length);
  };

  const nextReviewPage = () => {
    setCurrentReviewPage((prev) => (prev + 1) % totalReviewPages);
  };

  const prevReviewPage = () => {
    setCurrentReviewPage((prev) => (prev - 1 + totalReviewPages) % totalReviewPages);
  };

  // Get current page reviews
  const getCurrentPageReviews = () => {
    const start = currentReviewPage * reviewsPerPage;
    const end = start + reviewsPerPage;
    return reviews.slice(start, end);
  };

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const nextIndex = (currentImageIndex + 1) % guestBookImages.length;
    const prevIndex = (currentImageIndex - 1 + guestBookImages.length) % guestBookImages.length;

    preloadImage(guestBookImages[nextIndex]);
    preloadImage(guestBookImages[prevIndex]);
  }, [currentImageIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair text-stone-800 mb-4">Livre d'Or</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto px-4">
          Découvrez les expériences authentiques de nos hôtes au Mas d'Eylieux
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-2xl font-semibold text-stone-800">4.9</span>
          <span className="text-stone-600">({reviews.length} avis)</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Guest Book Carousel */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img
                src={guestBookImages[currentImageIndex]}
                alt={`Avis ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6 text-stone-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6 text-stone-800" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm text-stone-600">
              {currentImageIndex + 1} / {guestBookImages.length}
            </div>
          </div>

          {/* Google Reviews Carousel */}
          <div className="space-y-6 relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-playfair text-stone-800">Avis Google</h2>
              <div className="flex items-center gap-4">
                <div className="text-sm text-stone-600">
                  Page {currentReviewPage + 1} / {totalReviewPages}
                </div>
                <a
                  href="https://www.google.com/search?q=Le+Mas+d%27Eylieux&btnK=Recherche+Google#lrd=0x12b4eb2c1f11f1f7:0x4d7b0f3c1f0f0f0f,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300"
                >
                  <span>Laisser un avis</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="space-y-6 min-h-[800px]">
              {getCurrentPageReviews().map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-stone-800">{review.author_name}</h3>
                    <span className="text-sm text-stone-500">{review.relative_time_description}</span>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-stone-200 absolute -left-2 -top-2 transform -translate-x-1/2 -translate-y-1/2" />
                    <p className="text-stone-600 leading-relaxed pl-4">{review.text}</p>
                    {review.visited && (
                      <p className="text-sm text-stone-500 mt-2 pl-4">{review.visited}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReviewPage}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Avis précédents"
              >
                <ChevronLeft className="w-6 h-6 text-stone-800" />
              </button>
              <button
                onClick={nextReviewPage}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Avis suivants"
              >
                <ChevronRight className="w-6 h-6 text-stone-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;