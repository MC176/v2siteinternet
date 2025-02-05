'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const guestBookImages = [
  { id: 1, path: '/images/avis/avis 1.png', alt: 'Avis client 1' },
  { id: 2, path: '/images/avis/avis 2.png', alt: 'Avis client 2' },
  { id: 3, path: '/images/avis/avis 3.png', alt: 'Avis client 3' },
  { id: 4, path: '/images/avis/avis 4.png', alt: 'Avis client 4' },
  { id: 5, path: '/images/avis/avis 5.png', alt: 'Avis client 5' },
  { id: 6, path: '/images/avis/avis 6.png', alt: 'Avis client 6' },
];

const googleReviewsLink = "https://www.google.com/search?sa=X&sca_esv=22c69e882f91db0f&rlz=1C1CHNY_frFR1114FR1114&tbm=lcl&sxsrf=AHTn8zr4zZRPZpqOZFY9PJEpczBymczvKw:1738521775349&q=Le+Mas+d%27Eylieux+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NbUwMjA1MDU3NbI0MTIxMDMw28DI-IpR1CdVwTexWCFF3bUyJzO1tELBsSyzeBErdnEAI9I_x0oAAAA&rldimm=5582050575294240606&hl=fr-FR&ved=2ahUKEwiVieqm0qWLAxV_U6QEHekkKI0Q9fQKegQIRxAF&biw=1705&bih=1270&dpr=1#lkt=LocalPoiReviews";

export default function AvisPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEnlargedImage, setShowEnlargedImage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3; // Changed to 3 reviews per page

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = googleReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(googleReviews.length / reviewsPerPage);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % guestBookImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? guestBookImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/informations/maison.jpg"
          alt="Mas d'Eylieux Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Vos Témoignages
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
              Découvrez les expériences authentiques de nos hôtes au Mas d'Eylieux
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Livre d'Or Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-gray-900">Notre Livre d'Or</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {guestBookImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowEnlargedImage(true);
                  }}
                >
                  <Image
                    src={image.path}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Google Reviews Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-gray-900">Avis Google</h2>
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-colors hover:bg-blue-700"
              >
                Laissez votre avis
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6">
              {currentReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {review.author_name}
                    </h3>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-5 h-5",
                            i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{review.text}</p>
                  <p className="text-sm text-gray-500">
                    {review.relative_time_description}
                    {review.visited && ` • ${review.visited}`}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={cn(
                    "w-10 h-10 rounded-full font-medium transition-colors",
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showEnlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            <div className="relative aspect-[4/3]">
              <Image
                src={guestBookImages[currentImageIndex].path}
                alt={guestBookImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            
            <button
              onClick={() => setShowEnlargedImage(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}