'use client'

import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Lazy load YouTube component
const YouTube = lazy(() => import('react-youtube'));

const InstagramGallery = () => {
  const images = [
    {
      url: "/images/Instagram/Photo 1.jpeg",
      alt: "Photo 1",
      width: 800,
      height: 600
    },
    {
      url: "/images/Instagram/Photo 2.jpeg",
      alt: "Photo 2",
      width: 800,
      height: 600
    },
    {
      url: "/images/Instagram/Photo 3.jpeg",
      alt: "Photo 3",
      width: 800,
      height: 600
    },
    {
      url: "/images/Instagram/Photo 4.jpeg",
      alt: "Photo 4",
      width: 800,
      height: 600
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-lg relative">
      <div className="absolute left-[-80px] bottom-[16.5%] transform translate-y-1/2 hidden md:block">
        <p className="text-xl text-gray-600 transform -rotate-90">INSTAGRAM</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <a
            key={index}
            href="https://www.instagram.com/le_mas_deylieux"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              quality={75}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
          </a>
        ))}
      </div>
      <div className="md:hidden mt-4">
        <p className="text-lg text-gray-600">INSTAGRAM</p>
      </div>
    </div>
  );
};

const HomeHero = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Suspense fallback={<div className="w-full h-full bg-gray-900" />}>
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
                  playsinline: 1,
                },
                width: '100%',
                height: '100%',
              }}
              className="w-full h-full"
              iframeClassName="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[56.25vw]"
              onEnd={(event) => event.target.playVideo()}
            />
          </Suspense>
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
              Un domaine d'exception au coeur de l'Ardèche
            </p>
            <Link
              href="/presentation"
              className="inline-flex items-center px-12 py-4 bg-white border border-black text-black rounded-full transition-colors duration-300 hover:bg-black hover:border-white hover:text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Nous découvrir </span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Le Mas d'Eylieux vous accueille</h3>
          </div>
          <InstagramGallery />
        </div>
      </section>
    </>
  );
};

export default HomeHero;