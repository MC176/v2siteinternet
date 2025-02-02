'use client'; // This line makes the component a client component

import Image from 'next/image';
import { useState } from 'react';

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
  { id: 3, path: '/images/avis/avis 4.png', alt: 'Avis client 4' },
  { id: 3, path: '/images/avis/avis 5.png', alt: 'Avis client 5' },
  { id: 3, path: '/images/avis/avis 6.png', alt: 'Avis client 6' },
];

export default function AvisPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showEnlargedImage, setShowEnlargedImage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;
  
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % guestBookImages.length);
    };
  
    const previousImage = () => {
      setCurrentImageIndex((prev) => (prev === 0 ? guestBookImages.length - 1 : prev - 1));
    };
  
    const openEnlargedImage = (index) => {
      setCurrentImageIndex(index); // Set the clicked image as current
      setShowEnlargedImage(true);
    };
  
    const closeEnlargedImage = () => {
      setShowEnlargedImage(false);
    };
  
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = googleReviews.slice(indexOfFirstReview, indexOfLastReview);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
const googleReviewsLink = "https://www.google.com/search?sa=X&sca_esv=22c69e882f91db0f&rlz=1C1CHNY_frFR1114FR1114&tbm=lcl&sxsrf=AHTn8zr4zZRPZpqOZFY9PJEpczBymczvKw:1738521775349&q=Le+Mas+d%27Eylieux+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NbUwMjA1MDU3NbI0MTIxMDMw28DI-IpR1CdVwTexWCFF3bUyJzO1tELBsSyzeBErdnEAI9I_x0oAAAA&rldimm=5582050575294240606&hl=fr-FR&ved=2ahUKEwiVieqm0qWLAxV_U6QEHekkKI0Q9fQKegQIRxAF&biw=1705&bih=1270&dpr=1#lkt=LocalPoiReviews";

    return (
      <div className="space-y-6 pt-40 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Vos avis
        </h1>
  
        <p className="text-center text-gray-600 mb-16">
          Parce que vous en parlez le mieux
        </p>
  
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Livre d'Or Photos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Notre Livre d'Or
            </h2>
  
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {guestBookImages.map((image, index) => (
                <div key={image.id} className="relative group">
                  <div
                    className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-white cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    onClick={() => openEnlargedImage(index)}
                  >
                    <Image
                      src={image.path}
                      alt={image.alt}
                      fill
                      className="object-contain transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
  
  
          {/* Google Reviews */}
          <div className="space-y-6 bg-gradient-to-r from-indigo-50 to-violet-50 p-6 rounded-lg">
          <div className="flex justify-end mb-4"> {/* Added container for button */}
            <a
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Laissez un avis
            </a>
          </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Avis Google
            </h2>
  
            <div className="space-y-4">
              {currentReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {review.author_name}
                    </h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{review.text}</p>
                  <p className="text-sm text-gray-400">
                    {review.relative_time_description} - {review.visited || ''}
                  </p>
                </div>
              ))}
            </div>
  
  
            {/* Pagination Controls */}
            <div className="flex justify-center space-x-2">
              {Array.from({
                length: Math.ceil(googleReviews.length / reviewsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                    currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
  
        {/* Enlarged Image Modal */}
        {showEnlargedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300">
            <div className="relative">
              <Image
                src={guestBookImages[currentImageIndex].path}
                alt={guestBookImages[currentImageIndex].alt}
                width={800}
                height={600}
                className="object-contain rounded-2xl"
              />
              <button
                onClick={closeEnlargedImage}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                aria-label="Fermer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }