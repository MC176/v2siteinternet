'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import { Instagram } from 'lucide-react';

const InstagramGallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
      alt: "Vue extérieure du Mas"
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      alt: "Terrasse et jardin"
    },
    {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
      alt: "Intérieur chaleureux"
    },
    {
      url: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80",
      alt: "Vue sur la piscine"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <a
            key={index}
            href="https://www.instagram.com/le_mas_deylieux"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const HomeHero = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <YouTube
            videoId="con7hSv03D0"
            opts={{
              playerVars: {
                autoplay: 1,
                loop: 1,
                mute: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                modestbranding: 1,
                playlist: 'con7hSv03D0',
              },
              width: '100%',
              height: '100%',
            }}
            className="w-full h-full"
            iframeClassName="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[56.25vw]"
            onEnd={(event) => event.target.playVideo()}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10" />

        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Le Mas d'Eylieux
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
              Découvrez nos 6 gîtes de charme dans un cadre exceptionnel en Ardèche
            </p>
            <Link
              href="/disponibilites"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 inline-block"
            >
              Réserver maintenant
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Le Mas d'Eylieux accueille nos gîtes</h3>
            <p className="text-lg text-gray-600">INSTAGRAM</p>
          </div>
          <InstagramGallery />
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center">
        <div className="max-w-7xl mx-auto px-4">
        </div>
      </footer>
    </>
  );
};

function App() {
  return (
    
      <HomeHero />
    
  );
}

export default App;
