'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const PropertyPage = () => {
  const [mainImage, setMainImage] = useState(0);
  
  const property = {
    name: "Mas en Ardèche",
    rating: 8.7,
    location: "Ardèche, France",
    reviews: 124,
    features: [
      "Appartements",
      "Cuisine",
      "Vue sur nature",
      "Animaux domestiques admis",
      "Lave-linge"
    ],
    amenities: [
      { icon: "wifi", label: "Connexion Wi-Fi gratuite" },
      { icon: "terrace", label: "Terrasse" },
      { icon: "balcony", label: "Balcon" },
      { icon: "ac", label: "Climatisation" },
      { icon: "bathroom", label: "Salle de bains privative" }
    ],
    images: [
      "/images/gites/figuiers/image1.png",
      "/images/gites/figuiers/image2.png",
      "/images/gites/figuiers/image3.png",
      "/images/gites/figuiers/image4.png",
      "/images/gites/figuiers/image5.png"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {"★".repeat(4)}
            </div>
            <span className="text-sm text-gray-600">Gîtes de charme</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">{property.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Voir sur la carte
            </span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Réserver
        </button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        <div className="col-span-2 row-span-2 relative h-[400px]">
          <Image
            src={property.images[mainImage]}
            alt="Main view"
            fill
            className="object-cover rounded-l-lg"
          />
        </div>
        {property.images.slice(1, 5).map((img, index) => (
          <div key={index} className="relative h-[198px]">
            <Image
              src={img}
              alt={`View ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-md shadow">
          Voir plus de photos
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">
              Découvrez nos 6 gîtes de charme en Ardèche, nichés dans un environnement paisible. 
              Chaque gîte dispose d'une terrasse privative avec vue imprenable sur la nature environnante.
              Profitez d'un séjour authentique dans un cadre exceptionnel, à proximité des plus beaux sites touristiques de l'Ardèche.
            </p>
          </div>

          {/* Amenities */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Les plus appréciés</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Rating Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">Superbe</h3>
                <p className="text-sm text-gray-600">{property.reviews} commentaires</p>
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-tr-lg rounded-bl-lg font-bold">
                {property.rating}
              </div>
            </div>
          </div>

          {/* Quick Booking */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;